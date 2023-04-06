import { Link } from 'react-router-dom'
import styles from './Gallery.module.css'



export const GalleryItem = ({
    _id,
    blogPhotoUrl,

}) => {

    return (
        <li>
            <div className={styles.galleryItem}>
                
                   

                        <Link to={`/blogs/${_id}`}><img src={blogPhotoUrl} alt="image 2"/></Link>
                
            </div>
    </li>
    )
}