import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination, Parallax } from "swiper";
import { slides } from "../../utils/slideData";

const Banner = () => {
  const params = {
    speed: 300,
    pagination: {
      clickable: true,
    },
    navigation: true,
    autoplay: {
      delay: 2500,
    },
    modules: [EffectFade, Pagination, Navigation, Autoplay],
  };

  return (
    <Swiper {...params}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero h-96 md:h-[640px]"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-xl sm:text-3xl md:text-5xl font-medium md:font-bold">
                  {slide.title}
                </h1>
                <p className="mb-5 md:font-bold">{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
