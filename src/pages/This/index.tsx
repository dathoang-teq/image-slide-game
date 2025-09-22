import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import imageBatteries from "../../assets/images/two/Alarm-clock.webp";
import imageBicycle from "../../assets/images/two/Chocolate.jpg";
import imageCardholder from "../../assets/images/two/Flashlight.jpg";
import imageCar from "../../assets/images/two/Headphone.jpg";
import imageLamp from "../../assets/images/two/highHeels.png";
import imageMousePad from "../../assets/images/two/Microwave.jpg";
import imagePassport from "../../assets/images/two/ORANGE-JUICE.webp";
import imagePerfume from "../../assets/images/two/Scissors.jpg";
import imageToothbrushs from "../../assets/images/two/Television.jpg";
import imageWatch from "../../assets/images/two/WATERMELON.jpg";

import "./This.css";

import "swiper/css";
import "swiper/css/navigation";

const This = () => {
  const imagesFromtwo = [
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
        {imagesFromtwo.map((image) => (
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

export default This;
