import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router"
import { useAuthContext } from "../../contexts/AuthContext";
import { useBlogContext } from "../../contexts/BlogContext";
import { blogReducer } from "../../reducers/blogReducer";
import { useService } from '../../hooks/useService';
import { blogServiceFactory } from "../../services/blogService";
import { Link } from "react-router-dom";
import * as commentService from '../../services/commentService';
import * as recommendationService from '../../services/recommendationService';

 import styles from './BlogPostDetails.module.css'
import { AddComment } from "../Comments/AddComment";
import { AddRecommendation } from "../AddRecommendion/AddRecommendation";
import { DeleteRecommendation } from "../AddRecommendion/DeleteRecommendation";
import { useState } from "react";

import {Modal, Button} from "react-bootstrap"





export const BlogPostDetails = () => {
    const {blogId} = useParams();
    const {userId, isAuthenticated, userEmail} = useAuthContext();
    const {deleteBlog} = useBlogContext()
    const [blog, dispatch] = useReducer(blogReducer, {})
    const blogService = useService(blogServiceFactory)
    const navigate = useNavigate()

    const [show, setShow] = useState(false)


  
     useEffect(() => {
        Promise.all([
            blogService.getOneBlog(blogId),
            commentService.getAllComments(blogId),
            recommendationService.getAllRecommendations(blogId)
        ]).then(([blogData, comments, recommendations]) => {
            const blogState = {
                ...blogData,
                comments,
                recommendations
            }
            dispatch({type: 'BLOG_LOAD', payload: blogState},)
        })
     }, [blogId])

    const isOwner = blog._ownerId === userId

     
 let hasRecommended = (blog.recommendations?.some(x => x._ownerId === userId))

 const onDeleteClick = async () => {

    await blogService.delete(blog._id)
    deleteBlog(blog._id)
    navigate('/blogs')

}

const handleClickDelete = (id) => {
setShow(true)
console.log(id)
}

 const handleClose = () => {
    setShow(false)
}

    const onCommentSubmit = async (values) => {
        const blogTitle = blog.title
        const response = await commentService.createComment(blogId, blogTitle, values.comment);
        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail
        })
    }

    const onCommentDelete = async (id) => {
        const commentId = id
        await commentService.deleteComment(commentId)
        
        dispatch({
            type: 'COMMENT_DELETE',
            payload: commentId,
        })
    }

    
    const onRecommendationSubmit = async (values) => {
        const response = await recommendationService.createRecommendation(blogId, values.recommendation);
        dispatch({
            type: 'RECOMMENDATION_ADD',
            payload: response,
            userEmail
        })
    }

    const onRecommendationDelete = async () => {

        const recommendation = (blog.recommendations?.find(x => x._ownerId === userId))
        const recommendationId = recommendation._id

        await recommendationService.deleteRecommendation(recommendationId);
         blog.recommendations.length--
        navigate(`/blogs/${blogId}`)
    }

    // const onRecommendationDelete = async () => {

    //     const recommendation = (blog.recommendations?.find(x => x._ownerId === userId))
    //     const recommendationId = recommendation._id

    //     await recommendationService.deleteRecommendation(recommendationId);

    //     dispatch({
    //         type: 'RECOMMENDATION_DELETETE',
    //         payload: recommendationId,
    //     })
    // }



    return (
        <>
    <Modal animation={false} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete {blog.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Think about everyone who would want to see your blog first!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onDeleteClick(blog._id)}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <section id="video" className="content-section">
        <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                    <h1>{blog.title}</h1>
                    <div className={styles.countryCity}>
                        <h4>Country: {blog.country} </h4>
                        <h4>City: {blog.city}</h4>
                        <h4>Recommendation: {blog.recommendations?.length}</h4>
                    </div>
                </div>
                <div className="col-md-12">

                <img className={styles.imageBlogDetails} src={blog.blogPhotoUrl} alt=""/>

            </div>
                <div className="text-content">
                    <p>{blog.story}</p>
                    <p>Author: {blog.userEmail}</p>
                </div>
                {isAuthenticated && (

                    <div>
                        {!isOwner && (
                                <div>
                                     {!hasRecommended && <AddRecommendation onRecommendationSubmit={onRecommendationSubmit}/>}
                                     {hasRecommended && <DeleteRecommendation onRecommendationDelete={onRecommendationDelete}/>}    
                                </div>
                        )}
                    </div>                   
                )}

            {isOwner && (    
                            <div className={styles.editDeleteButtons}>
                                <div className="accent-button button">
                                    <Link to={`/blogs/${blog._id}/edit`}>Edit</Link>
                                </div>
                                <div  className={styles.deleteButton}>
                                    <a href="#blog" onClick={() => handleClickDelete(blog._id)}>Delete</a>
                                    
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
                                <p> <b>{x.comment}</b> <br/> by: {x.author.email} </p>
                                { userEmail === x.author.email && (
                                    <button onClick={() => onCommentDelete(x._id)} className={styles.deleteCommentButton}>Delete</button>)}                             
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

                <div className="accent-button button">
                                    <Link to={`/blogs/`}>Back to Blogs</Link>
                </div>      

        </div>
    </section>
        
        </>
    
    )
}