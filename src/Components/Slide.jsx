import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import CardOne from "./CardOne";

const Slide = ({ data }) => {
  
  if (!data || data.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3.5}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.slice(0,5).map((item, index) => (
          <SwiperSlide key={index}>
            <CardOne info={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
