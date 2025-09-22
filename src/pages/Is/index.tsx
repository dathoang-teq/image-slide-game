import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import imageBatteries from "../../assets/images/three/BAG.webp";
import imageBicycle from "../../assets/images/three/Blender.jpeg";
import imageCardholder from "../../assets/images/three/calendar.webp";
import imageCar from "../../assets/images/three/KEYBOARD.jpg";
import imageLamp from "../../assets/images/three/lipstick.avif";
import imageMousePad from "../../assets/images/three/Rice_Cooker.webp";
import imagePassport from "../../assets/images/three/Scalf.jpg";
import imagePerfume from "../../assets/images/three/SMART-PHONE.jpg";
import imageToothbrushs from "../../assets/images/three/towel.jpg";
import imageWatch from "../../assets/images/three/TRUCK.webp";

import "./Is.css";

import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const imagesFromthree = [
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

export default Home;
