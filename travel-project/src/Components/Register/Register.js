import { useContext } from "react"
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import styles from './Register.module.css'

export const Register = () => {
  const {onRegisterSubmit, error} = useContext(AuthContext)
  const {values, formErrors, changeHandler, onSubmit, validateForm} = useForm({
    email:'',
    password: '',
    confirmPassword: ''
  }, onRegisterSubmit)

  const isEnabled = !Object.keys(formErrors).some(x => formErrors[x]);

    return (
        <section id="contact" className="login-section">

        <div id="contact-content">
            <div className="section-heading">
                <h1>Register at<br/><em>Travel</em>BLOG</h1>
            </div>
            {error && <p className={styles.errorMessage}>An error occured while authenticating: {error.message}</p>}
            <div className="section-content">
       
                {/* <form id="register" method="post" onSubmit={(e) => onSubmit(e)}> */}
                <form id="register" method="post" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                          <fieldset>
                            <input 
                              name="email" 
                              type="email" 
                              className="form-control" 
                              id="email" 
                              placeholder="Type in your email..." 
                              required
                              value={values.email}
                              onChange={changeHandler}
                              onBlur={validateForm}
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
                              name="password" 
                              type="password" 
                              className="form-control" 
                              id="password" 
                              placeholder="Type in your password..." 
                              required
                              value={values.password}
                              onChange={changeHandler}
                              onBlur={validateForm}
                              />
                                    {formErrors.password && 
                                    <p className={styles.formError}>
                                     {formErrors.password}
                                    </p>
                                } 
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                          <input 
                              name="confirmPassword" 
                              type="password" 
                              className="form-control" 
                              id="confirmPassword" 
                              placeholder="Please confirm your password..." 
                              required
                              value={values.confirmPassword}
                              onChange={changeHandler}
                              onBlur={validateForm}
                              />
                                {formErrors.confirmPassword && 
                                    <p className={styles.formError}>
                                     {formErrors.confirmPassword}
                                    </p>
                                } 
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn" disabled={!isEnabled}>Register Now</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}