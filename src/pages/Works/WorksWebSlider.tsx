// import Swiper core and required modules
import { FaBeer } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../../css/Works/WorksWebSlider.scss";

import metronomeJPG from "../../images/slider/metronome.jpg";
import calculatorJPG from "../../images/slider/calculator.jpg";
import portfolioPNG from "../../images/slider/portfolio.png";
import shoppingCartPNG from "../../images/slider/shopping-cart.png";

export default () => (
  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    slidesPerView={1}
    navigation
    speed={2000}
    autoplay={{
      delay: 4000,
      disableOnInteraction: true,
    }}
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    className="workswebslider"
  >
    <SwiperSlide className="workswebslider__metronome">
      <h3 className="workswebslider__slide__title">節拍器</h3>
      <img className="workswebslider__slide__image" src={metronomeJPG} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <h3 className="workswebslider__slide__title">計算機</h3>
      <img
        className="workswebslider__slide__image"
        src={calculatorJPG}
        alt=""
      />
    </SwiperSlide>
    <SwiperSlide>
      <h3 className="workswebslider__slide__title">第一份網頁履歷</h3>
      <img className="workswebslider__slide__image" src={portfolioPNG} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <h3 className="workswebslider__slide__title">購物車</h3>
      <img
        className="workswebslider__slide__image"
        src={shoppingCartPNG}
        alt=""
      />
    </SwiperSlide>
    ...
  </Swiper>
);
