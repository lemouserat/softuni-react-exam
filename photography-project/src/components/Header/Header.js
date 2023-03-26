
export const Header = () => {
    return (
        <header className="nav-down responsive-nav hidden-lg hidden-md">
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
    </header>
    )
}