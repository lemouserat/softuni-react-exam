import Carousel from 'react-bootstrap/Carousel';
import styles from './Home.module.css'

export const CarouselHome = () => {
    return (
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
    )
}