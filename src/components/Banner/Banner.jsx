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
      delay: 2000,
    },
    modules: [EffectFade, Pagination, Navigation, Autoplay],
  };
  const slides = [
    {
      backgroundImage: "https://i.ibb.co/tM7N6D1/banner2.jpg",
      title:
        "The Secret Ingredient: Unconventional Spices to Elevate Your Cooking",
      description:
        "Discover the world of unique and lesser-known spices that can take your cooking to the next level.Impress your dinner guests with your newfound spice knowledge and culinary skills!",
    },
    {
      backgroundImage: "https://i.ibb.co/HBpJfLD/banner3.jpg",
      title: "One-Pot Wonders: Quick and Easy Meals for Busy Weeknights",
      description:
        "Tired of spending hours in the kitchen after a long day at work? Try these simple and delicious one-pot meals that require minimal prep and clean-up. ",
    },
    {
      backgroundImage: "https://i.ibb.co/jZyH20z/banner5.jpg",
      title:
        "The Art of Plating: Creating Beautiful and Instagram-Worthy Dishes",
      description:
        "Learn from top chefs and food bloggers about the art of plating - the process of arranging food on a plate to create a visually appealing and appetizing dish. ",
    },
  ];

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
