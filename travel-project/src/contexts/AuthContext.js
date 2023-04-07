
import { useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authService";



export const AuthContext = createContext()

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    //Sync state to local storage so that it persists through a page refresh. 
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)
    const [error, setError] = useState(null)



    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/blogs');
        } catch (error) {
            console.log(error);
            setError(error)
            
        }
    };

    const onRegisterSubmit = async (values) => {
        const {confirmPassword, ...registerData} = values;
        if(confirmPassword !== registerData.password) {
            console.log(error)
            return
        }

        try {
            const result = await authService.register(registerData)
            setAuth(result)
           
            navigate('/blogs')
        } catch (error) {
            setError(error)
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

        setError,
        error
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