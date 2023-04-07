import { createContext } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useBlogContext } from "../../contexts/BlogContext";
import { useForm } from "../../hooks/useForm";
import { countries } from "../common/countriesData";

import styles from './AddBlog.module.css'



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
                <h1>Add your<br/><em>Blog post</em></h1>
                <p>Let the other users see what you saw, feel what you felt!
                <br/>Add a pictoresque image and write down a compelling story. </p>
                
            </div>
            <div className="section-content">
                <form id="add-blog"  method="post" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12">
                          <fieldset>
                            <input name="title" type="text" className="form-control" id="title" placeholder="Write a title..." required 
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
                                <select name="country"  id="country" 
                                  value={values.country} 
                                  onChange={changeHandler}
                                  required
                                  className={styles.countryDropdownWhole }
                                  >
                                  <option>Select the country</option>
                                 
                                    {countries.map(c => (
                                      <option key={c.code} >{c.name}</option>
                                    ))}
                                
                                  
                                </select>
                          </fieldset>
                        </div>
                         <div className="col-md-6">
                          <fieldset>
                            <input name="city" type="text" className="form-control" id="city" placeholder="Add a city if relevant..." 
                              value={values.city} 
                              onChange={changeHandler}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <input name="blogPhotoUrl" type="text" className="form-control" id="blogPhotoUrl" placeholder="Paste a photo url..." 
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
                            <textarea name="story" rows="3" className="form-control" id="story" placeholder="Share a short story with us..." 
                              value={values.story} 
                              onChange={changeHandler} 
                              ></textarea>
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