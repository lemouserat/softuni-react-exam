import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export const Header = () => {

    const {isAuthenticated, userEmail} = useContext(AuthContext)

    return (
        <>
            <div className="sidebar-navigation hidde-sm hidden-xs">
        <div className="logo">
            <Link to="/">Travel<em>blog</em></Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Home </Link>
                </li>
                <li>
                    <Link to="/gallery">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Gallery </Link>
                </li>
                <li>
                    <Link to="/blogs">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Blogs </Link>
                </li>
                {!isAuthenticated && (
                    <>
                        <li>
                            <Link to="/login">
                                <span className="rect"></span>
                                <span className="circle"></span>
                                Login </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <span className="rect"></span>
                                <span className="circle"></span>
                                Register </Link>
                        </li>
                    </>
                )}


                {isAuthenticated && (
                    <>
                <li>
                    <Link to="/add-blog">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Add Blog post </Link>
                </li>
                <li>
                    <Link to="/my-profile">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        My profile - {userEmail} </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Logout </Link>
                </li>
                    </>
                )}
            </ul>
        </nav>

    </div>
        </>

    
    )
}