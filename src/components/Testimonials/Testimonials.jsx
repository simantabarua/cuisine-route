import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../SectionHeader/SectionHeader";

const Testimonials = () => {
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
        title="Satisfied Taste Buds: Hear What Our Customers Have to Say"
        subtitle="Our customers have described our dishes as 'heavenly', 'mouth-watering', and 'the best I've ever tasted'. We're thrilled to share their reviews and testimonials with you, so you can see for yourself why Cuisine Route is the ultimate destination for foodies who crave culinary inspiration and satisfaction"
      />
      <div className="relative w-full h-[26rem]  px-5 ">
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

export default Testimonials;
