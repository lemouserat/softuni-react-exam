
import { createContext, useContext } from "react";
import { useNavigate } from "react-router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";



export const AuthContext = createContext()

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)



    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/blogs');
        } catch (error) {
            console.log('There is an authentication problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const {confirmPassword, ...registerData} = values;
        if(confirmPassword !== registerData.password) {
            console.log(`Register - password is different`)
            return
        }

        try {
            const result = await authService.register(registerData)
            setAuth(result)
            console.log(`Register - ${result}`)
            navigate('/blogs')
        } catch (error) {
            console.log('There is an authentication problem');
        }
    }

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };

    const contextValues = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };


    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
}


export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};