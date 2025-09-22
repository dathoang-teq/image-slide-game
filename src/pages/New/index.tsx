import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import imageBatteries from "../../assets/images/four/BOWL.jpg";
import imageBicycle from "../../assets/images/four/Chair.png";
import imageCardholder from "../../assets/images/four/FRIDGE.jpg";
import imageCar from "../../assets/images/four/glasses.jpg";
import imageLamp from "../../assets/images/four/HAIR-DRYER.avif";
import imageMousePad from "../../assets/images/four/helmet.webp";
import imagePassport from "../../assets/images/four/Remote.jpeg";
import imagePerfume from "../../assets/images/four/Speaker.jpg";
import imageToothbrushs from "../../assets/images/four/TRAFIC-LIGHT.webp";
import imageWatch from "../../assets/images/four/umbrella.avif";

import "./New.css";

import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const imagesFromfour = [
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
        {imagesFromfour.map((image) => (
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
