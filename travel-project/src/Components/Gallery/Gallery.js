import { useBlogContext } from "../../contexts/BlogContext"
import { GalleryItem } from "./GalleryItem"

import styles from './Gallery.module.css'

export const Gallery = () => {

    const {blogs} = useBlogContext()

    return (
        <section id="projects" className="content-section">
        <div className="section-heading">
            <h1>Our<br/><em>Gallery</em></h1>
            <p>Welcome to our blog post gallery!
            <br/>Here you will find all images posten within blogs. Select an image to go to its blog post and story. </p>
        </div>
        <div className="section-content">
            <div className={styles.wholeGallery}>
            <ul>    
                    {blogs.map(x => 
                        <GalleryItem key={x._id} {...x} />
                          )}
                                {blogs.length === 0 && (
                                    <p >No articles yet</p>
                        )}

            </ul>
            </div>
  
        </div>            
    </section>
    )
}