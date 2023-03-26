import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div classNameName="App">
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

        <div className="sidebar-navigation hidde-sm hidden-xs">
            <div className="logo">
                <a href="#">Sen<em>tra</em></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#top">
                            <span className="rect"></span>
                            <span className="circle"></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#featured">
                            <span className="rect"></span>
                            <span className="circle"></span>
                            Featured
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <span className="rect"></span>
                            <span className="circle"></span>
                            Recent Work
                        </a>
                    </li>
                    <li>
                        <a href="#video">
                            <span className="rect"></span>
                            <span className="circle"></span>
                            Presentation
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            <span className="rect"></span>
                            <span className="circle"></span>
                            Blog Entires
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <span className="rect"></span>
                            <span className="circle"></span>
                            Contact Us
                        </a>
                    </li>
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

        <div className="slider">
            <div className="Modern-Slider content-section" id="top">
                <div className="item item-1">
                    <div className="img-fill">
                    <div className="image"></div>
                    <div className="info">
                        <div>
                          <h1>Beautiful Template<br/>Sentra</h1>
                          <p>Sentra is free Bootstrap CSS Template by templatemo website.<br/>
                          	Please share our site link to your friends.</p>
                          <div className="white-button button">
                              <a href="#featured">Discover More</a>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="item item-2">
                    <div className="img-fill">
                        <div className="image"></div>
                        <div className="info">
                        <div>
                          <h1>Please tell <br/>your friends</h1>
                          <p>Support templatemo by sharing a link to your friends.
							<br/>Thank you for helping us.</p>
                          
                          <div className="white-button button">
                              <a href="#featured">Share More</a>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="item item-3">
                    <div className="img-fill">
                        <div className="image"></div>
                        <div className="info">
                        <div>
                          <h1>Suspendisse suscipit<br/>nulla sed</h1>
                          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices <br/>posuere cubilia Curae; Sed at massa turpis.</p>
                          
                          <div className="white-button button">
                              <a href="#featured">Learn More</a>
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
      
            </div>
        </div>


        <div className="page-content">
            <section id="featured" className="content-section">
                <div className="section-heading">
                    <h1>Featured<br/><em>Places</em></h1>
                    <p>Praesent pellentesque efficitur magna, 
                    <br/>sed pellentesque neque malesuada vitae.</p>
                </div>
                <div className="section-content">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_1.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Lorem ipsum dolor</h4>
                                <span>Proin et sapien</span>
                                <p>#1 You are allowed to use Sentra Template for your business or client websites. You can use it for commercial or non-commercial or educational purposes.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_2.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Phasellus a lacus ac odio</h4>
                                <span>Maximus</span>
                                <p>#2 You are NOT allowed to re-distribute this on any template website. You <strong>can post</strong> a screenshot and a link back to original template page on your blog or site. Thank you.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_3.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Proin sit amet fringilla</h4>
                                <span>Vulputate</span>
                                <p>#3 Aliquam mollis lacus eget metus efficitur lobortis. Suspendisse libero lacus, accumsan vitae commodo tristique, luctus gravida metus.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_2.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>In volutpat augue lectus</h4>
                                <span>Elementum</span>
                                <p>#4 Aliquam mollis lacus eget metus efficitur lobortis. Suspendisse libero lacus, accumsan vitae commodo tristique, luctus gravida metus.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_1.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Cras commodo odio</h4>
                                <span>Aliquam</span>
                                <p>#5 Mauris lacinia pretium libero, ut tincidunt lacus molestie ornare. Phasellus a facilisis erat. Praesent eleifend nibh mauris, quis sodales lorem convallis pulvinar.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_3.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Sed at massa turpis</h4>
                                <span>Curabitur</span>
                                <p>#6 Vestibulum tincidunt ornare ligula vel molestie. Curabitur hendrerit mauris mollis ipsum vulputate rutrum. Phasellus luctus odio eget dui imperdiet.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_2.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Aliquam mollis lacus</h4>
                                <span>Suspendisse</span>
                                <p>#7 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_1.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Mauris lacinia pretium</h4>
                                <span>Vestibulum</span>
                                <p>#8 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="img/featured_3.jpg" alt=""></img>
                                <div className="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                            <div className="text-content">
                                <h4>Proin sit amet fringilla erat</h4>
                                <span>Convallis</span>
                                <p>#9 Suspendisse suscipit nulla sed nisl fermentum, auctor suscipit nunc rhoncus. Proin faucibus metus diam, nec hendrerit purus pharetra in.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className="content-section">
                <div className="section-heading">
                    <h1>Recent<br/><em>Projects</em></h1>
                    <p>Praesent pellentesque efficitur magna, 
                    <br/>sed pellentesque neque malesuada vitae.</p>
                </div>
                <div className="section-content">
                    <div className="masonry">
                        <div className="row">
                            <div className="item">
                                <div className="col-md-8">
                                    <a href="img/portfolio_big_1.jpg" data-lightbox="image"><img src="img/portfolio_1.jpg" alt=" 1"></img></a>
                                </div>
                            </div>
                            <div className="item second-item">
                                <div className="col-md-4">
                                    <a href="img/portfolio_big_2.jpg" data-lightbox="image"><img src="img/portfolio_2.jpg" alt=" 2"></img></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-4">
                                    <a href="img/portfolio_big_3.jpg" data-lightbox="image"><img src="img/portfolio_3.jpg" alt=" 3"></img></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-4">
                                    <a href="img/portfolio_big_4.jpg" data-lightbox="image"><img src="img/portfolio_4.jpg" alt=" 4"></img></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-8">
                                    <a href="img/portfolio_big_5.jpg" data-lightbox="image"><img src="img/portfolio_5.jpg" alt=" 5"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
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
                                {/* <iframe width="100%" height="520" src="https://www.youtube.com/embed/j-_7Ub-Zkow?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                                <img src="img/blog_1.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Integer ultrices augue</h4>
                                                    <span>25 July 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_2.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>16 July 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_3.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Sed at massa turpis</h4>
                                                    <span>10 July 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab2">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_3.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Sed at massa turpis</h4>
                                                    <span>30 June 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_1.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Lorem ipsum dolor sit</h4>
                                                    <span>24 June 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_2.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>12 June 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab3">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_2.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>26 May 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_1.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Lorem ipsum dolor sit</h4>
                                                    <span>22 May 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_3.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Integer ultrices augue</h4>
                                                    <span>8 May 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab4">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_1.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Lorem ipsum dolor sit</h4>
                                                    <span>26 April 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>                                
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_3.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Integer ultrices augue eu</h4>
                                                    <span>24 April 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div className="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="img/blog_2.jpg" alt=""></img>
                                                <div className="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>20 April 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
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
            <section id="contact" className="content-section">
                <div id="map">
                
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                </div>
                <div id="contact-content">
                    <div className="section-heading">
                        <h1>Contact<br/><em>Sentra</em></h1>
                        <p>Curabitur hendrerit mauris mollis ipsum vulputate rutrum. 
                        <br/>Phasellus luctus odio eget dui imperdiet.</p>
                        
                    </div>
                    <div className="section-content">
                        <form id="contact" action="#" method="post">
                            <div className="row">
                                <div className="col-md-4">
                                  <fieldset>
                                    <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required=""></input>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required=""></input>
                                  </fieldset>
                                </div>
                                 <div className="col-md-4">
                                  <fieldset>
                                    <input name="subject" type="text" className="form-control" id="subject" placeholder="Subject..." required=""></input>
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <button type="submit" id="form-submit" className="btn">Send Message Now</button>
                                  </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="footer">
                <p>Copyright &copy; 2019 Company Name 
                
                . Design: TemplateMo</p>
            </section>
        </div>
    </div>
  );
}

export default App;
