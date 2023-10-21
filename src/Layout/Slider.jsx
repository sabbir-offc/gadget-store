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

const Slider = () => {
  const [ads, setAds] = useState();
  useEffect(() => {
    fetch(
      "https://brand-shop-server-1uv6sggcd-mdsabbirhowlader420-gmailcom.vercel.app/advertise"
    )
      .then((res) => res.json())
      .then((data) => setAds(data));
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
