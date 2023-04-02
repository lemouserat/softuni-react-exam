import { useEffect, useReducer, useState } from "react";
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
import {deleteComment} from '../../services/commentService';
import { AddRecommendation } from "../AddRecommendion/AddRecommendation";
import { DeleteRecommendation } from "../AddRecommendion/DeleteRecommendation";
import { Action } from "@remix-run/router";


export const BlogPostDetails = () => {
    const {blogId} = useParams();
    const {userId, isAuthenticated, userEmail, recommendations} = useAuthContext();
    const {deleteBlog} = useBlogContext()
    const [blog, dispatch] = useReducer(blogReducer, {})
    const blogService = useService(blogServiceFactory)
    const navigate = useNavigate()

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
            dispatch({type: 'BLOG_FETCH', payload: blogState})
        })
     }, [blogId])

    const isOwner = blog._ownerId === userId
    //  console.log(`rec: ${blog.recommendations}`)
    //  console.log(`comemnts: ${blog.comments}`)

    //  if(blog.recommendations?.find(x => x._ownerId === userId)) {
    //     console.log(userId) 
    //     console.log(userEmail) 
    //     console.log('there is')
    //  } else {
    //     console.log(userId) 
    //     console.log(userEmail) 
    //     console.log('not')
    //  }

     
 const hasRecommended = (blog.recommendations?.some(x => x._ownerId === userId))
 console.log(`hasRecommended: ${hasRecommended}`)

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

    
    const onRecommendationSubmit = async (values) => {
        const response = await recommendationService.createRecommendation(blogId, values.recommendation);
        dispatch({
            type: 'RECOMMENDATION_ADD',
            payload: response,
            userEmail
            
        })
    }

    const onRecommendationDelete = async (values) => {

        const recommendation = (blog.recommendations?.find(x => x._ownerId === userId))
        console.log(`recommendation: ${recommendation}`)
        console.log(`recommendationId: ${recommendation._id}`)
        const recommendationId = recommendation._id

        const response = await recommendationService.deleteRecommendation(recommendationId);
        dispatch({
            type: 'RECOMMENDATION_DELETE',
            payload: response,
            userEmail,
            
        })

        navigate(`/blogs/${blogId}`)

    }


    const onDeleteCommentClick = async (commentId) => {
            await commentService.deleteComment(commentId)
            dispatch({
                type: 'COMMENT_DELETE',
                // payload: response,
                userEmail
            })    
            deleteComment(commentId)
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

                { !hasRecommended && <AddRecommendation onRecommendationSubmit={onRecommendationSubmit}/>}
                {hasRecommended && <DeleteRecommendation onRecommendationDelete={onRecommendationDelete}/>}    

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
                                { userEmail === x.author.email && (
                                    <button onClick={onDeleteCommentClick}>Delete</button>)}                             
                            </li>
                        ))}
                        {/* <p>Number of comments:{blog.comments.length}</p> */}
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
    )
}