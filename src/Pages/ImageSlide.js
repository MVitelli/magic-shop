import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const ImageSlide = () => {
  return (
    <>
      <Carousel style={{margin: "0rem 0rem 0rem -1.2rem"}}>
        <Carousel.Item>
          <Image
            src="http://www.magic4ever.com.ar/image/cache/data/Banners/Banner Slider 2 D-600x400.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="http://www.magic4ever.com.ar/image/cache/data/Banners/Banner Slider 1 F-600x400.jpg"
          />
        </Carousel.Item>
        </Carousel>
    </>
  );
}

export default ImageSlide;
