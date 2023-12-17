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
import { useEffect, useState } from "react";
import { axiosSecure } from "../../hook/useAxios";

const Slider = () => {
  const [ads, setAds] = useState();
  useEffect(() => {
    axiosSecure("/advertise").then((res) => setAds(res.data));
  }, []);

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Scrollbar, Keyboard, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        keyboard={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        <div className="h-[20vh]">
          {ads &&
            ads.map((ad) => (
              <SwiperSlide key={ad._id}>
                <img src={ad.image} alt="" className="w-fit mx-auto" />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
