import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/images/five/1.webp";
import image2 from "../../assets/images/five/2.webp";
import image3 from "../../assets/images/five/3.jpg";
import image4 from "../../assets/images/five/4.jpg";
import image5 from "../../assets/images/five/5.jpg";
import image6 from "../../assets/images/five/6.jpeg";
import image7 from "../../assets/images/five/7.jpeg";
import image8 from "../../assets/images/five/8.jpg";
import image9 from "../../assets/images/five/9.jpg";
import image10 from "../../assets/images/five/10.webp";

import "./It.css";

import "swiper/css";
import "swiper/css/navigation";

const It = () => {
  const imagesFromthree = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <div className="container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        centeredSlides
        centerInsufficientSlides
      >
        {imagesFromthree.map((image) => (
          <SwiperSlide className="slide-content" key={image}>
            <div className="image-wrapper">
              <img src={image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default It;
