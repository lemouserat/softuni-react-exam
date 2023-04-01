import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router"
import { useAuthContext } from "../../contexts/AuthContext";
import { useBlogContext } from "../../contexts/BlogContext";
import { blogReducer } from "../../reducers/blogReducer";
import { useService } from '../../hooks/useService';
import { blogServiceFactory } from "../../services/blogService";
import { Link } from "react-router-dom";
import * as commentService from '../../services/commentService';

 import styles from './BlogPostDetails.module.css'
import { AddComment } from "../Comments/AddComment";


export const BlogPostDetails = () => {
    const {blogId} = useParams();
    const {userId, isAuthenticated, userEmail} = useAuthContext();
    const {deleteBlog} = useBlogContext()
    const [blog, dispatch] = useReducer(blogReducer, {})
    const blogService = useService(blogServiceFactory)
    const navigate = useNavigate()

     useEffect(() => {
        Promise.all([
            blogService.getOneBlog(blogId),
            commentService.getAllComments(blogId)
        ]).then(([blogData, comments]) => {
            const blogState = {
                ...blogData,
                comments
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

    const onCommentSubmit = async (values) => {
        const response = await commentService.createComment(blogId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail
        })

    }


    return (
     <section id="video" className="content-section">
        <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                    <h1>{blog.title}</h1>
                    <div className={styles.countryCity}>
                        <h4>Country: {blog.country} </h4>
                        <h4>City: {blog.city}</h4>
                        <h4>Recomendation: {blog.recommend}</h4>
                    </div>
                </div>
                <div className="col-md-12">

                <img className={styles.imageBlogDetails} src={blog.blogPhotoUrl} alt=""/>

            </div>
                <div className="text-content">
                    <p>{blog.story}</p>
                </div>
            {isOwner && (    
                            <div className={styles.editDeleteButtons}>
                                <div className="accent-button button">
                                    <Link to={`/blogs/${blog._id}/edit`}>Edit</Link>
                                </div>
                                <div  className={styles.deleteButton}>
                                    <a href="#blog" onClick={onDeleteClick}>Delete</a>
                                </div>
                            </div>
            )}    
            </div>

            
            <h2>Comment section:</h2>
            <div className={styles.commentSection}>
                    <div className={styles.commentList}>
                    <ul>
                        {blog.comments && blog.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p> <b>{x.comment}</b> <br/> by: {x.author.email}:</p>
                            </li>
                        ))}
                    </ul>

                    {!blog.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                    </div>
                    
                    <div>
                    {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />} 
                    {!isAuthenticated && 
                        <div className="accent-button button">
                        <Link to="/login">Log in to add a comment</Link>
                        </div> 
                    } 
                </div>
                </div>   

                

        </div>
    </section>
    )
}