import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/images/seven/1.png";
import image2 from "../../assets/images/seven/2.png";
import image3 from "../../assets/images/seven/3.jpg";
import image4 from "../../assets/images/seven/4.jpg";
import image5 from "../../assets/images/seven/5.png";
import image6 from "../../assets/images/seven/6.png";
import image7 from "../../assets/images/seven/7.png";
import image8 from "../../assets/images/seven/8.png";
import image9 from "../../assets/images/seven/9.png";
import image10 from "../../assets/images/seven/10.png";

import "./Nice.css";

import "swiper/css";
import "swiper/css/navigation";

const Nice = () => {
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

export default Nice;
