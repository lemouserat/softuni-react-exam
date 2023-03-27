
export const Register = () => {
    return (
        <section id="contact" class="content-section">

        <div id="contact-content">
            <div class="section-heading">
                <h1>Register at<br/><em>Photo community</em></h1>
                {/* <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p> */}
                
            </div>
            <div class="section-content">
                <form id="register" method="post">
                    <div class="row">
                        <div class="col-md-8">
                          <fieldset>
                            <input name="username" type="text" class="form-control" id="username" placeholder="Type in your username..." required=""/>
                          </fieldset>
                        </div>
                        <div class="col-md-8">
                          <fieldset>
                            <input name="email" type="email" class="form-control" id="email" placeholder="Type in your email..." required=""/>
                          </fieldset>
                        </div>
                        <div class="col-md-8">
                          <fieldset>
                            <input name="password" type="password" class="form-control" id="password" placeholder="Type in your password..." required=""/>
                          </fieldset>
                        </div>
                        <div class="col-md-8">
                          <fieldset>
                            <input name="repeat-password" type="password" class="form-control" id="repeat-password" placeholder="Repeat your password..." required=""/>
                          </fieldset>
                        </div>
                         <div class="col-md-8">
                          <fieldset>
                            <input name="personal-camera" type="text" class="form-control" id="personal-camera" placeholder="What is your personal camera..." required=""/>
                          </fieldset>
                        </div>

                        <div class="col-md-8">
                          <fieldset>
                            <button type="submit" id="form-submit" class="btn">Register Now</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}