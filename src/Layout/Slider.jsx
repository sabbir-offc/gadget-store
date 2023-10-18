// import Swiper core and required modules
import {
  Autoplay,
  Pagination,
  Scrollbar,
  Keyboard,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar, Keyboard, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        keyboard={true}
        autoplay={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
