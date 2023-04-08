import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css";

export const CarouselHome = () => {
  return (
    <Carousel fade className={styles.wholeCarousel}>
      <Carousel.Item className={styles.imageCarousel}>
        <img
          className="d-block w-100"
          src="https://wallpapershome.com/images/pages/pic_h/19758.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.imageCarousel}>
        <img
          className="d-block w-100"
          src="https://wallpapershome.com/images/pages/pic_h/5114.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className={styles.imageCarousel}>
        <img
          className="d-block w-100"
          src="https://wallpapershome.com/images/pages/pic_h/10326.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
