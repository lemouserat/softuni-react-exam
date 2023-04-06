import { useAuthContext } from "../../contexts/AuthContext";
import { useBlogContext } from "../../contexts/BlogContext";
import { useForm } from "../../hooks/useForm";

import styles from '../Register/Register.module.css'



export const AddBlog = () => {

    const {onCreateBlogSubmit} = useBlogContext();
    const {userId, isAuthenticated, userEmail} = useAuthContext();
    const {values, changeHandler, onSubmit, validateForm, formErrors } = useForm({
        title: '',
        country: '',
        city: '',
        blogPhotoUrl: '',
        story: '',
        userEmail: userEmail
    }, onCreateBlogSubmit )

    const isEnabled = !Object.keys(formErrors).some(x => formErrors[x]);

    return (
        <section id="contact" className="content-section">

        <div id="contact-content">
            <div className="section-heading">
                <h1>Add your<br/><em>blog post</em></h1>
                <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p>
                
            </div>
            <div className="section-content">
                <form id="add-blog"  method="post" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                          <fieldset>
                            <input name="title" type="text" className="form-control" id="title" placeholder="Title..." required 
                              value={values.title} 
                              onChange={changeHandler}
                              onBlur={validateForm}
                              />
                                  {formErrors.title && 
                                    <p className={styles.formError}>
                                  {formErrors.title}
                                    </p>
                                } 
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input name="country" type="text" className="form-control" id="country" placeholder="Country..." required value={values.country} onChange={changeHandler}/>
                          </fieldset>
                        </div>
                         <div className="col-md-6">
                          <fieldset>
                            <input name="city" type="text" className="form-control" id="city" placeholder="City..." value={values.city} onChange={changeHandler}/>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <input name="blogPhotoUrl" type="text" className="form-control" id="blogPhotoUrl" placeholder="Photo url..." 
                              value={values.blogPhotoUrl} 
                              onChange={changeHandler} required
                              onBlur={validateForm}
                              />
                                   {formErrors.blogPhotoUrl && 
                                    <p className={styles.formError}>
                                     {formErrors.blogPhotoUrl}
                                  </p>
                                } 
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <textarea name="story" rows="3" className="form-control" id="story" placeholder="Share a short story with us..." required
                              value={values.story} 
                              onChange={changeHandler} 
                              onBlur={validateForm}
                              ></textarea>
                                  {formErrors.story && 
                                    <p className={styles.formError}>
                                  {formErrors.story}
                                    </p>
                                } 
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn" disabled={!isEnabled}>Add blog post</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}