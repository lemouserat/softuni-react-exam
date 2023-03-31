import { Link } from "react-router-dom"

export const BlogItem = ({
    _id,
    title,
    recommend,
    country,
    city,
    blogPhotoUrl,
}) => {
    return (
        <li>
        <div className="item">
            <img src={blogPhotoUrl} alt=""/>
            <div className="text-content">
                <h4>{title}</h4>
                <span>25 July 2018</span>
                <p>Country: {country}</p>
                <p>City: {city}</p>
                <div className="accent-button button">
                <Link to={`/blogs/${_id}`} className="details-button">Continue reading</Link>
                </div>
            </div>
        </div>
    </li>
    )
}