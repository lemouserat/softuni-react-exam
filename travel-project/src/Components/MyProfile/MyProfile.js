import { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuthContext } from "../../contexts/AuthContext";
import { useBlogContext } from "../../contexts/BlogContext";
import { useService } from "../../hooks/useService";
import { blogReducer } from "../../reducers/blogReducer";
import { blogServiceFactory } from "../../services/blogService";
import { BlogItem } from "../Blogs/BlogItem";

import * as commentService from '../../services/commentService';

import styles from './MyProfile.module.css'
import { useState } from "react";

export const MyProfile = () => {

    const {blogId} = useParams();
    const {userId, isAuthenticated, userEmail} = useAuthContext();
    const [blog, dispatch] = useReducer(blogReducer, {})
    const blogService = useService(blogServiceFactory)
    const navigate = useNavigate()
    const {blogs, } = useBlogContext()


    const [comments, setComments] = useState([]);

     let blogsOfUser = (blogs?.filter(x => x._ownerId === userId))


     useEffect(() => {
        commentService.getAllCommentsByUser()
            .then(comments => {
                setComments(comments)
            })
    }, [])

    let commentsOfUser = (comments?.filter(x => x._ownerId === userId))

    return (
        <>
        <section id="blog" className="content-section">
        <div className="section-heading">
            <h1>My profile<br/><em>{userEmail}</em></h1>
            <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
            <br/>Phasellus luctus odio eget dui imperdiet.</p>
        </div>
        <div className="section-content">
            <div className="tabs-content">
                <div className="wrapper">
                <h2 className={styles.MyProfileHeadings}>My blog posts:</h2>
                    <section id="first-tab-group" className="tabgroup">
                        <div id="tab1">
                            
                            <ul className={styles.BlogsListWhole}>    
                                {blogsOfUser.map(x => 
                                    <BlogItem key={x._id} {...x} />
                                    )}
                                    
                                            {blogsOfUser.length === 0 && (
                                                <p >No articles yet</p>
                                            )}

                            </ul>
                        </div>
                    </section> 
                </div>
            </div>



            <div className="tabs-content">
                <div className="wrapper">
                <h2 className={styles.MyProfileHeadings}>My comments:</h2>
                  
                        <ul className={styles.MyProfileListOfComments}>
                        {commentsOfUser && commentsOfUser.map(x => (
                            <li key={x._id} className={styles.MyProfileComment}>
                                <p> <b>{x.comment}</b> <br/>in: <i>{x.blogTitle}</i>  </p>                        
                            </li>
                        ))}
                    </ul>

                    {!comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                      
                   
                </div>
            </div>







            </div>

    </section>

        </>

    )
}