import { Link } from "react-router-dom"

import styles from './blogs.module.css'

export const BlogItem = ({
    _id,
    title,
    // recommend,
    country,
    city,
    blogPhotoUrl,
    userEmail,
    _createdOn
}) => {

    return (
        <li>
        <div className="item">
           <div className={styles.BlogsItemWhole}>

              
                    <img src={blogPhotoUrl} alt="blogsItem-img" />
            
           
            <div className="text-content">
                <h4>{title}</h4>
                <p>Country: <b>{country}</b> </p>
                <p>City: <b>{city}</b> </p>
                <p>Author: {userEmail}</p>
                <div className="accent-button button">
                <Link to={`/blogs/${_id}`} className="details-button">Continue reading</Link>
                </div>
            </div>
            </div> 

        </div>
    </li>
    )
}