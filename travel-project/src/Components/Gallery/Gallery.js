
export const Gallery = () => {
    return (
        <section id="projects" className="content-section">
        <div className="section-heading">
            <h1>Our<br/><em>Gallery</em></h1>
            <p>Praesent pellentesque efficitur magna, 
            <br/>sed pellentesque neque malesuada vitae.</p>
        </div>
        <div className="section-content">
            <div className="masonry">
                <div className="row">

                    <div className="item">
                        <div className="col-md-4">
                            <a href="img/portfolio_big_2.jpg" data-lightbox="image"><img src="img/portfolio_2.jpg" alt="image 2"/></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="col-md-4">
                            <a href="img/portfolio_big_3.jpg" data-lightbox="image"><img src="img/portfolio_3.jpg" alt="image 3"/></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="col-md-4">
                            <a href="img/portfolio_big_4.jpg" data-lightbox="image"><img src="img/portfolio_4.jpg" alt="image 4"/></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="col-md-4">
                            <a href="img/portfolio_big_4.jpg" data-lightbox="image"><img src="img/portfolio_4.jpg" alt="image 4"/></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="col-md-4">
                            <a href="img/portfolio_big_4.jpg" data-lightbox="image"><img src="img/portfolio_4.jpg" alt="image 4"/></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="col-md-4">
                            <a href="img/portfolio_big_4.jpg" data-lightbox="image"><img src="img/portfolio_4.jpg" alt="image 4"/></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>            
    </section>
    )
}