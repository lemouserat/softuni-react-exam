import { useBlogContext } from "../../contexts/BlogContext";
import { useForm } from "../../hooks/useForm";


export const AddBlog = () => {

    const {onCreateBlogSubmit} = useBlogContext();
    const {values, changeHandler, onSubmit} = useForm({
        title: '',
        recommend: '',
        country: '',
        city: '',
        blogPhotoUrl: '',
        story: '',
    }, onCreateBlogSubmit )



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
                        <div className="col-md-6">
                          <fieldset>
                            <input name="title" type="text" className="form-control" id="title" placeholder="Title..." required="" value={values.title} onChange={changeHandler}/>
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input name="recommend" type="text" className="form-control" id="recommend" placeholder="recommend..." value={values.recommend} onChange={changeHandler} required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input name="country" type="text" className="form-control" id="country" placeholder="Country..." required="" value={values.country} onChange={changeHandler}/>
                          </fieldset>
                        </div>
                         <div className="col-md-6">
                          <fieldset>
                            <input name="city" type="text" className="form-control" id="city" placeholder="City..." value={values.city} onChange={changeHandler} required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <input name="blogPhotoUrl" type="text" className="form-control" id="blogPhotoUrl" placeholder="Photo url..." value={values.blogPhotoUrl} onChange={changeHandler} required=""/>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <textarea name="story" rows="3" className="form-control" id="story" placeholder="Share a short story with us..." value={values.story} onChange={changeHandler} ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn">Add blog post</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}