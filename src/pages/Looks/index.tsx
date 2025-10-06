import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/images/six/1.jpg";
import image2 from "../../assets/images/six/2.webp";
import image3 from "../../assets/images/six/3.jpg";
import image4 from "../../assets/images/six/4.jpeg";
import image5 from "../../assets/images/six/5.jpeg";
import image6 from "../../assets/images/six/6.jpg";
import image7 from "../../assets/images/six/7.jpeg";
import image8 from "../../assets/images/six/8.webp";
import image9 from "../../assets/images/six/9.jpeg";
import image10 from "../../assets/images/six/10.jpg";

import "./Looks.css";

import "swiper/css";
import "swiper/css/navigation";

const Looks = () => {
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

export default Looks;
