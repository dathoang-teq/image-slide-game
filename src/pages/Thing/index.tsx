import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import imageBatteries from "../../assets/images/one/Batteries.jpeg";
import imageBicycle from "../../assets/images/one/bicycle.webp";
import imageCardholder from "../../assets/images/one/cardholder.jpg";
import imageCar from "../../assets/images/one/Dustbin.jpg";
import imageLamp from "../../assets/images/one/lamp.webp";
import imageMousePad from "../../assets/images/one/mouse-pad.jpeg";
import imagePassport from "../../assets/images/one/Passport.webp";
import imagePerfume from "../../assets/images/one/perfume.webp";
import imageToothbrushs from "../../assets/images/one/Toothbrushs.jpg";
import imageWatch from "../../assets/images/one/watch.jpg";

import "./Thing.css";

import "swiper/css";
import "swiper/css/navigation";

const Thing = () => {
  const imagesFromOne = [
    imageBatteries,
    imageBicycle,
    imageCardholder,
    imageCar,
    imageLamp,
    imageMousePad,
    imagePassport,
    imagePerfume,
    imageToothbrushs,
    imageWatch,
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
