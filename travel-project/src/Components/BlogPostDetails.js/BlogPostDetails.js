import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router"
import { useAuthContext } from "../../contexts/AuthContext";
import { useBlogContext } from "../../contexts/BlogContext";
import { blogReducer } from "../../reducers/blogReducer";
import { useService } from '../../hooks/useService';
import { blogServiceFactory } from "../../services/blogService";


export const BlogPostDetails = () => {
    const {blogId} = useParams();
    const {userId, isAuthenticated, userEmail} = useAuthContext();
    const {deleteBlog} = useBlogContext()
    const [blog, dispatch] = useReducer(blogReducer, {})
    const blogService = useService(blogServiceFactory)
    const navigate = useNavigate()

     useEffect(() => {
        Promise.all([
            blogService.getOneBlog(blogId)
        ]).then(([blogData]) => {
            const blogState = {
                ...blogData
            }
            dispatch({type: 'BLOG_FETCH', payload: blogState})
        })
     }, [blogId])

    const isOwner = blog._ownerId === userId

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you wnt to delete ${blog.title}`)

        if(result) {
            await blogService.delete(blog._id)

            deleteBlog(blog._id)

            navigate('/blogs')
        }
    }


    return (
     <section id="video" className="content-section">
        <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                    <h1>{blog.title}</h1>
                    <p>Country: {blog.country} </p>
                    <p>City: {blog.city}</p>
                </div>
                <div className="text-content">
                    <p>{blog.story}</p>
                </div>
                <div className="accent-button button">
                    <a href="#blog">Edit</a>
                </div>
                <div className="accent-button button">
                    <a href="#blog" onClick={onDeleteClick}>Delete</a>
                </div>
            </div>
            <div className="col-md-12">
                <div className="box-video">
                    <div className="bg-video">
                        <img src={blog.blogPhotoUrl} alt=""/>
                    </div>
                    <div className="video-container">
                        <img src={blog.blogPhotoUrl} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}