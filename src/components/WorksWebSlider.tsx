// import Swiper core and required modules
import { FaBeer } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../css/WorksWebSlider.scss";

export default () => (
  <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    slidesPerView={1}
    navigation
    // pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    className="workswebslider"
  >
    <SwiperSlide className="workswebslider__metronome">
      <h3 className="workswebslider__metronome__title">節拍器</h3>
      <img src="https://picsum.photos/300/200" alt=""/>
    </SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    ...
  </Swiper>
);
