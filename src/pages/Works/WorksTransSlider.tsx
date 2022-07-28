// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../../css/Works/WorksTransSlider.scss";
import { WorksTransData } from "./WorksData";

const data = WorksTransData;

export default () => (
  <section className="workstransslider">
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      speed={2000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      // scrollbar={{ draggable: true }}
      className="workstransslider__slider"
    >
      <SwiperSlide className="workstransslider__slider__slide">
        <h1 className="workstransslider__slider__slide__title">
          {data[0].title}
        </h1>
        <div className="workstransslider__slider__slide__content workstransslider__slider__slide__content--column">
          <div className="workstransslider__slider__slide__content__text-area ">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[0].subtitle_0}
            </h2>
            <article className="workstransslider__slider__slide__content__article huninn-overpass">
              {data[0].mainText_0}
            </article>
          </div>
          <div className="workstransslider__slider__slide__content__text-area">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[0].subtitle_1}
            </h2>
            <article className="workstransslider__slider__slide__content__article huninn-overpass">
              {data[0].mainText_1}
            </article>
          </div>
        </div>
        <button className="workstransslider__slider__slide__read-more">
          看更多
        </button>
      </SwiperSlide>
      <SwiperSlide className="workstransslider__slider__slide">
        <h1 className="workstransslider__slider__slide__title">
          {data[1].title}
        </h1>
        <div className="workstransslider__slider__slide__content workstransslider__slider__slide__content--column">
          <div className="workstransslider__slider__slide__content__text-area ">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[1].subtitle_0}
            </h2>
            <article className="workstransslider__slider__slide__content__article huninn-overpass">
              {data[1].mainText_0}
            </article>
          </div>
          <div className="workstransslider__slider__slide__content__text-area">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[1].subtitle_1}
            </h2>
            <article className="workstransslider__slider__slide__content__article huninn-overpass">
              {data[1].mainText_1}
            </article>
          </div>
        </div>
        <button className="workstransslider__slider__slide__read-more">
          看更多
        </button>
      </SwiperSlide>
      <SwiperSlide className="workstransslider__slider__slide  serif-tc text-center">
        <h1 className="workstransslider__slider__slide__title">
          {data[2].title}
        </h1>
        <div className="workstransslider__slider__slide__content workstransslider__slider__slide__content--row">
          <div className="workstransslider__slider__slide__content__text-area ">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[2].subtitle_0}
            </h2>
            <article className="workstransslider__slider__slide__content__article workstransslider__slider__slide__content__article--row">
              {data[2].mainText_0}
            </article>
          </div>
          <div className="workstransslider__slider__slide__content__text-area">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[2].subtitle_1}
            </h2>
            <article className="workstransslider__slider__slide__content__article workstransslider__slider__slide__content__article--row">
              {data[2].mainText_1}
            </article>
          </div>
        </div>
        <button className="workstransslider__slider__slide__read-more">
          看更多
        </button>
      </SwiperSlide>
      <SwiperSlide className="workstransslider__slider__slide text-center">
        <h1 className="workstransslider__slider__slide__title serif-jp">
          {data[3].title}
        </h1>
        <div className="workstransslider__slider__slide__content workstransslider__slider__slide__content--row">
          <div className="workstransslider__slider__slide__content__text-area serif-jp">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[3].subtitle_0}
            </h2>
            <article className="workstransslider__slider__slide__content__article workstransslider__slider__slide__content__article--row">
              {data[3].mainText_0}
            </article>
          </div>
          <div className="workstransslider__slider__slide__content__text-area serif-tc">
            <h2 className="workstransslider__slider__slide__content__subtitle">
              {data[3].subtitle_1}
            </h2>
            <article className="workstransslider__slider__slide__content__article workstransslider__slider__slide__content__article--row">
              {data[3].mainText_1}
            </article>
          </div>
        </div>
        <button className="workstransslider__slider__slide__read-more">
          看更多
        </button>
      </SwiperSlide>
    </Swiper>
  </section>
);
