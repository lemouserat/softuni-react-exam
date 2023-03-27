import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
                {/* <header class="nav-down responsive-nav hidden-lg hidden-md">
        <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <div id="main-nav" class="collapse navbar-collapse">
            <nav>
                <ul class="nav navbar-nav">
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
            <div class="sidebar-navigation hidde-sm hidden-xs">
        <div class="logo">
            <a href="#">Photo<em>community</em></a>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <span class="rect"></span>
                        <span class="circle"></span>
                        Home </Link>
                </li>
                <li>
                    <Link to="/gallery">
                        <span class="rect"></span>
                        <span class="circle"></span>
                        Gallery </Link>
                </li>
                <li>
                    <Link to="/login">
                        <span class="rect"></span>
                        <span class="circle"></span>
                        Login </Link>
                </li>
                <li>
                    <Link to="/register">
                        <span class="rect"></span>
                        <span class="circle"></span>
                        Register </Link>
                </li>
                <li>
                    <Link to="/add-photo">
                        <span class="rect"></span>
                        <span class="circle"></span>
                        Add photo </Link>
                </li>

            </ul>
        </nav>
        <ul class="social-icons">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-rss"></i></a></li>
            <li><a href="#"><i class="fa fa-behance"></i></a></li>
        </ul>
    </div>
        </>

    
    )
}