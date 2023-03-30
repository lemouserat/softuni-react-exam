import { useBlogContext } from "../../contexts/BlogContext"

export const Blog = ({
    _id,
    title,
    recommend,
    country,
    city,
    blogPhotoUrl,
}) => {

    // const {blogs} = useBlogContext()


    return (
        <section id="blog" className="content-section">
        <div className="section-heading">
            <h1>Blog<br/><em>Entries</em></h1>
            <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
            <br/>Phasellus luctus odio eget dui imperdiet.</p>
        </div>
        <div className="section-content">
            <div className="tabs-content">
                <div className="wrapper">
                    <ul className="tabs clearfix" data-tabgroup="first-tab-group">
                      <li><a href="#tab1" className="active">July 2018</a></li>
                      <li><a href="#tab2">June 2018</a></li>
                      <li><a href="#tab3">May 2018</a></li>
                      <li><a href="#tab4">April 2018</a></li>
                    </ul>
                    <section id="first-tab-group" className="tabgroup">
                        <div id="tab1">
                            <ul>
                                <li>
                                    <div className="item">
                                        <img src={blogPhotoUrl} alt=""/>
                                        <div className="text-content">
                                            <h4>{title}</h4>
                                            <span>25 July 2018</span>
                                            <p>{country}</p>
                                            <p>{city}</p>
                                            <div className="accent-button button">
                                                <a href="#contact">Continue Reading</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </section> 
                </div>
            </div>
        </div>
    </section>
    )
}