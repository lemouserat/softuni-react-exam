import { Navigate, useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import styles from './Login.module.css'

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
}

export const Login = () => {

  let {onLoginSubmit, error} = useAuthContext();
  const {values, formErrors, changeHandler, onSubmit, validateForm} = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: ''
  }, onLoginSubmit)

  const isEnabled = !Object.keys(formErrors).some(x => formErrors[x]);


    return (
        <section id="contact" className="login-section">

        <div id="contact-content">
            <div className="section-heading">
                <h1>Login at<br/><em>Travel</em>BLOG</h1>         
            </div>
            {error && <p className={styles.errorMessage}>An error occured while authenticating: {error.message}</p>}
            <div className="section-content">
                <form id="login" method="POST" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                          <fieldset>
                            <input 
                              type="text"  
                              placeholder="Type in your email..."
                              name={LoginFormKeys.Email}
                              onChange={changeHandler}
                              className="form-control" 
                              onBlur={validateForm}
                              required
                              />
                                {formErrors.email && 
                                    <p className={styles.formError}>
                                     {formErrors.email}
                                    </p>
                                } 
                          </fieldset>
                        </div>

                        <div className="col-md-12">
                          <fieldset>
                            <input 
                              type="password" id="password" placeholder="Type in your password..." required
                              name={LoginFormKeys.Password}
                              value={values[LoginFormKeys.Password]}
                              onChange={changeHandler}
                              className="form-control" 
                              
                              />
                          </fieldset>
                        </div>


                        <div className="col-md-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn" disabled={!isEnabled}>Login</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )    
}