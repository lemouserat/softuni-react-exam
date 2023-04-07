import { useBlogContext } from "../../contexts/BlogContext"
import { BlogItem } from "./BlogItem"

 import styles from './blogs.module.css'

export const Blogs = () => {

     const {blogs} = useBlogContext()


    return (
        <section id="blog" className="content-section">
        <div className="section-heading">
            <h1>Blog<br/><em>Entries</em></h1>
            <p>See what our other users saw, feel what they felt!
            <br/>Here is a list of all posted blog entries.</p>
        </div>
        <div className="section-content">
            <div className="tabs-content">
                <div className="wrapper">
                    <section id="first-tab-group" className="tabgroup">
                        <div id="tab1">
                            <ul className={styles.BlogsListWhole}>    
                                {blogs.map(x => 
                                    <BlogItem key={x._id} {...x} />
                                    )}
                                    
                                            {blogs.length === 0 && (
                                                <p >No articles yet</p>
                                            )}

                            </ul>
                        </div>
                    </section> 
                </div>
            </div>
        </div>
    </section>
    )
}