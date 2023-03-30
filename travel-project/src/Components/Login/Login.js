import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  // Username: 'username',
  Email: 'email',
  Password: 'password'
}


export const Login = () => {


  const {onLoginSubmit} = useAuthContext();
  const {values, changeHandler, onSubmit} = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: ''
  }, onLoginSubmit)


    return (
        <section id="contact" className="login-section">

        <div id="contact-content">
            <div className="section-heading">
                <h1>Login at<br/><em>Photo community</em></h1>
                {/* <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p> */}
                
            </div>
            <div className="section-content">
                <form id="login" method="post" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-8">
                          <fieldset>
                            <input 
                              type="text" className="form-control" id="email" placeholder="Type in your email..." required=""
                              name={LoginFormKeys.Email}
                              onChange={changeHandler}
                              />
                          </fieldset>
                        </div>

                        <div className="col-md-8">
                          <fieldset>
                            <input 
                              type="password" className="form-control" id="password" placeholder="Type in your password..." required=""
                              name={LoginFormKeys.Password}
                              value={values[LoginFormKeys.Password]}
                              onChange={changeHandler}
                              />
                          </fieldset>
                        </div>


                        <div className="col-md-8">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn">Login</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )    
}