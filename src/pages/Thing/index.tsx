import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/images/one/batteries.jpg";
import image2 from "../../assets/images/one/bicycle.webp";
import image3 from "../../assets/images/one/cardholder.jpg";
import image4 from "../../assets/images/one/Dustbin.jpg";
import image5 from "../../assets/images/one/lamp.webp";
import image6 from "../../assets/images/one/mouse-pad.jpeg";
import image7 from "../../assets/images/one/Passport.webp";
import image8 from "../../assets/images/one/perfume.webp";
import image9 from "../../assets/images/one/Toothbrushs.jpg";
import image10 from "../../assets/images/one/watch.jpg";

import "./Thing.css";

import "swiper/css";
import "swiper/css/navigation";

const Thing = () => {
  const imagesFromOne = [
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
        {imagesFromOne.map((image) => (
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

export default Thing;
