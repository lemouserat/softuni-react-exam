
export const Login = () => {
    return (
        <section id="contact" class="login-section">

        <div id="contact-content">
            <div class="section-heading">
                <h1>Login at<br/><em>Photo community</em></h1>
                {/* <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p> */}
                
            </div>
            <div class="section-content">
                <form id="login" method="post">
                    <div class="row">
                        <div class="col-md-8">
                          <fieldset>
                            <input name="username" type="text" class="form-control" id="username" placeholder="Type in your username..." required=""/>
                          </fieldset>
                        </div>

                        <div class="col-md-8">
                          <fieldset>
                            <input name="password" type="password" class="form-control" id="password" placeholder="Type in your password..." required=""/>
                          </fieldset>
                        </div>


                        <div class="col-md-8">
                          <fieldset>
                            <button type="submit" id="form-submit" class="btn">Login</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )    
}