import { useEffect } from "react";
import { useParams } from "react-router";
import { useBlogContext } from "../../contexts/BlogContext"
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { blogServiceFactory } from "../../services/blogService";


export const EditBlog = () => {
    const {onBlogEditSubmit} = useBlogContext();
    const {blogId} = useParams();
    const blogService = useService(blogServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        _id: '',
        title: '',
        country: '',
        city: '',
        blogPhotoUrl: '',
        story: '',
    }, onBlogEditSubmit)

    useEffect(() => {
        blogService.getOneBlog(blogId)
            .then(result => {
                changeValues(result)
            })
    }, [blogId])
    


    return (

        <section id="contact" className="content-section">

        <div id="contact-content">
            <div className="section-heading">
                <h1>Edit your<br/><em>blog post</em></h1>
                <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                <br/>Phasellus luctus odio eget dui imperdiet.</p>
                
            </div>
            <div className="section-content">
                <form id="edit-blog"  method="post" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                          <fieldset>
                            <input 
                                name="title" 
                                type="text" 
                                className="form-control" 
                                id="title" 
                                value={values.title} 
                                onChange={changeHandler}
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input 
                                name="country" 
                                type="text" 
                                className="form-control" 
                                id="country" 
                                placeholder="Country..." 
                                value={values.country} 
                                onChange={changeHandler}
                            />
                          </fieldset>
                        </div>
                         <div className="col-md-6">
                          <fieldset>
                            <input 
                                name="city" 
                                type="text" 
                                className="form-control" 
                                id="city" 
                                placeholder="City..." 
                                value={values.city} 
                                onChange={changeHandler} 
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <input 
                                name="blogPhotoUrl" 
                                type="text" 
                                className="form-control" 
                                id="blogPhotoUrl" 
                                placeholder="Photo url..." 
                                value={values.blogPhotoUrl} 
                                onChange={changeHandler} 
                            />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <textarea 
                                name="story" 
                                rows="3" 
                                className="form-control" 
                                id="story" 
                                placeholder="Share a short story with us..." 
                                value={values.story} 
                                onChange={changeHandler} 
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="btn">Edit blog post</button>
                          </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    )
}