import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination, Parallax } from "swiper";

const Banner = () => {
  const params = {
    speed: 600,
    parallax: true,
    effect: "fade",
    pagination: {
      clickable: true,
    },
    navigation: true,
    autoplay: {
      delay: 2500,
    },
    modules: [EffectFade, Pagination, Navigation, Parallax, Autoplay],
  };
  const slides = [
    {
      backgroundImage: "https://swiperjs.com/demos/images/nature-2.jpg",
      title: "First slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      backgroundImage: "https://swiperjs.com/demos/images/nature-3.jpg",
      title: "Second slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      backgroundImage: "https://swiperjs.com/demos/images/nature-1.jpg",
      title: "Third slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <Swiper {...params}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-full md:h-[668px] flex flex-col justify-center items-center py-24 bg-opacity-30 bg-cover bg-center text-white"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
            }}
          >
            <h1 className="text-4xl font-bold p-5">{slide.title}</h1>
            <p className="text-lg">{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
