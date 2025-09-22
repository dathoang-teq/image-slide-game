import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../assets/images/four/BOWL.jpg";
import image2 from "../../assets/images/four/Chair.png";
import image3 from "../../assets/images/four/FRIDGE.jpg";
import image4 from "../../assets/images/four/glasses.jpg";
import image5 from "../../assets/images/four/HAIR-DRYER.avif";
import image6 from "../../assets/images/four/helmet.webp";
import image7 from "../../assets/images/four/remote.webp";
import image8 from "../../assets/images/four/Speaker.jpg";
import image9 from "../../assets/images/four/TRAFIC-LIGHT.webp";
import image10 from "../../assets/images/four/umbrella.avif";

import "./New.css";

import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const imagesFromfour = [
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
