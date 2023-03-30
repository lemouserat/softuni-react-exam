
export const Details = () => {
    return (
        <section id="video" className="content-section">
        <div className="row">
            <div className="col-md-12">
                <div className="section-heading">
                    <h1>This is a <em>company</em> presentation.</h1>
                    <p>Praesent pellentesque efficitur magna, sed pellentesque neque malesuada vitae.</p>
                </div>
                <div className="text-content">
                    <p>In eget ipsum sed lorem vehicula luctus. Curabitur non dolor rhoncus, hendrerit justo sit amet, vestibulum turpis. Pellentesque id auctor tellus, vel ultricies augue. Duis condimentum aliquet blandit. Fusce rhoncus et eros ut pharetra. Phasellus convallis ultricies ligula ac gravida.</p>
                </div>
                <div className="accent-button button">
                    <a href="#blog">Continue Reading</a>
                </div>
            </div>
            <div className="col-md-12">
                <div className="box-video">
                    <div className="bg-video" 
                    // style="background-image: url(https://unsplash.imgix.net/photo-1425036458755-dc303a604201?fit=crop&fm=jpg&q=75&w=1000);"
                    >
                        <div className="bt-play">Play</div>
                    </div>
                    <div className="video-container">
                        <iframe width="100%" height="520" src="https://www.youtube.com/embed/j-_7Ub-Zkow?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}