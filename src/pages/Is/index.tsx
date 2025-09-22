import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/images/three/BAG.webp";
import image2 from "../../assets/images/three/blender.jpg";
import image3 from "../../assets/images/three/calendar.webp";
import image4 from "../../assets/images/three/KEYBOARD.jpg";
import image5 from "../../assets/images/three/lipstick.avif";
import image6 from "../../assets/images/three/Rice_Cooker.webp";
import image7 from "../../assets/images/three/Scalf.jpg";
import image8 from "../../assets/images/three/SMART-PHONE.jpg";
import image9 from "../../assets/images/three/towel.jpg";
import image10 from "../../assets/images/three/TRUCK.webp";

import "./Is.css";

import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
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

export default Home;
