import Carousel from 'react-bootstrap/Carousel';

import styles from './Home.module.css'


export const Home = () => {
    return (

        <>
                 <div className="slider">      
         <div className="Modern-Slider content-section" id="top"> 
             <div className="item item-1"> 
                 <div className="img-fill"> 
                 <Carousel fade className={styles.wholeCarousel}>
      <Carousel.Item className={styles.imageCarousel}>
        <img
          className="d-block w-100"
        src="https://wallpapershome.com/images/pages/pic_h/19758.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className={styles.imageCarousel}>
        <img
          className="d-block w-100"
          src="https://wallpapershome.com/images/pages/pic_h/5114.jpg"
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className={styles.imageCarousel}>
        <img
          className="d-block w-100"
          src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
                <div className="info">
                    <div>
                      <h1>Travel Blog Project<br/>by Anastas</h1>
                      {/* <p>Gaze upon the finest photography work out there.<br/>
                          Please share our site link to your friends.</p> */}
                      <div className="white-button button">
                          <a href="/login">Log in</a>
                      </div>
                    </div>
                    </div> 
                </div> 
            </div> 

         </div> 
     </div> 
        
        </>

    )
}