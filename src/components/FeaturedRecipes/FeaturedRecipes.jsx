import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../SectionHeader/SectionHeader";

const FeaturedRecipes = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const req = await fetch("http://localhost:3000/user-review");
        const res = await req.json();
        setReviews(res);
      } catch (error) {
        console.log(error);
      }
    };
    loadTestimonials();
  }, []);
  return (
    <>
      <SectionHeader
        title="Featured Recipes: Discover Our Mouth-Watering Selection of Dishes"
        subtitle="Explore our selection of featured recipes that have been carefully curated by our talented chefs. From classic comfort foods to exotic international flavors, our recipes are sure to tantalize your taste buds and inspire your culinary creativity."
      />
      <div className="relative w-full   px-5 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className=" absolute top-0 left-0 w-full h-full "
        >
          {reviews.map(({ id, name, location, review, rating }) => (
            <SwiperSlide className="h-full" key={id}>
              <div className="card h-full w-full bg-slate-200 shadow-xl max-h-full p-5">
                <figure>
                  <img src="" />
                </figure>
                <h2 className="card-title">{name} </h2>
                <div className="card-body">
                  <p>{location}</p>
                  <p>{review}</p>
                  <p>{rating}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedRecipes;
