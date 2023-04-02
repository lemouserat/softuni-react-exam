import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export const Header = () => {

    const {isAuthenticated, userEmail} = useContext(AuthContext)

    return (
        <>
                {/* <header className="nav-down responsive-nav hidden-lg hidden-md">
        <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <div id="main-nav" className="collapse navbar-collapse">
            <nav>
                <ul className="nav navbar-nav">
                    <li><a href="#top">Home</a></li>
                    <li><a href="#featured">Featured</a></li>
                    <li><a href="#projects">Recent Projects</a></li>
                    <li><a href="#video">Presentation</a></li>
                    <li><a href="#blog">Blog Entries</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    </header> */}
            <div className="sidebar-navigation hidde-sm hidden-xs">
        <div className="logo">
            <a href="#">Travel<em>blog</em></a>
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
                        Blog </Link>
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
                    <Link to="/add-photo">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Add photo </Link>
                </li>
                {/* <li>
                    <Link to="/photo-details">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Photo details </Link>
                </li> */}
                <li>
                    <Link to="/add-blog">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Add Blog post </Link>
                </li>
                <li>
                    
                    <Link to="/logout">
                        <span className="rect"></span>
                        <span className="circle"></span>
                        Logout </Link>
                        <span className="rect">{userEmail}</span>
                </li>
                    </>
                )}




            </ul>
        </nav>
        <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-rss"></i></a></li>
            <li><a href="#"><i className="fa fa-behance"></i></a></li>
        </ul>
    </div>
        </>

    
    )
}