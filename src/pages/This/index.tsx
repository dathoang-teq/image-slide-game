import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/images/two/Alarm-clock.webp";
import image2 from "../../assets/images/two/Chocolate.jpg";
import image3 from "../../assets/images/two/Flashlight.jpg";
import image4 from "../../assets/images/two/Headphone.jpg";
import image5 from "../../assets/images/two/highHeels.png";
import image6 from "../../assets/images/two/Microwave.jpg";
import image7 from "../../assets/images/two/ORANGE-JUICE.webp";
import image8 from "../../assets/images/two/Scissors.jpg";
import image9 from "../../assets/images/two/Television.jpg";
import image10 from "../../assets/images/two/WATERMELON.jpg";

import "./This.css";

import "swiper/css";
import "swiper/css/navigation";

const This = () => {
  const imagesFromtwo = [
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
