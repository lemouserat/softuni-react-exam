
export const Register = () => {
    return (
        <section id="contact" className="login-section">

        <div id="contact-content">
            <div className="section-heading">
                <h1>Register at<br/><em>Photo community</em></h1>
                {/* <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p> */}
                
            </div>
            <div className="section-content">
                <form id="register" method="post">
                    <div className="row">
                        <div className="col-md-8">
                          <fieldset>
                            <input name="username" type="text" className="form-control" id="username" placeholder="Type in your username..." required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-8">
                          <fieldset>
                            <input name="email" type="email" className="form-control" id="email" placeholder="Type in your email..." required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-8">
                          <fieldset>
                            <input name="password" type="password" className="form-control" id="password" placeholder="Type in your password..." required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-8">
                          <fieldset>
                            <input name="repeat-password" type="password" className="form-control" id="repeat-password" placeholder="Repeat your password..." required=""/>
                          </fieldset>
                        </div>
                         <div className="col-md-8">
                          <fieldset>
                            <input name="equipment" type="text" className="form-control" id="equipment" placeholder="What is your equipment..." required=""/>
                          </fieldset>
                        </div>

                        <div className="col-md-8">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn">Register Now</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}