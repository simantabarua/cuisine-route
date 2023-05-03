import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../SectionHeader/SectionHeader";
import Rating from "react-rating";
import { HiOutlineLocationMarker, HiOutlineStar, HiStar } from "react-icons/hi";

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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className=" absolute top-0 left-0 w-full h-full "
        >
          {reviews.map(({ id, name, location, review, rating }) => (
            <SwiperSlide className="h-full md:h-64" key={id}>
              <div className="card md:h-[34rem] my-5 bg-base-200 shadow-xl py-4">
                <figure>
                  <img
                    className="h-32 w-32 rounded-full block"
                    src="https://i.ibb.co/R2SdJhB/chef8.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p><HiOutlineLocationMarker className="w-6 h-6 inline"/> {location}</p>
                  <p>{ review}</p>
                  <div className=" flex gap-2  ">
                    Rating:
                    <Rating
                      className="text-2xl"
                      readonly
                      placeholderRating={rating}
                      emptySymbol={
                        <HiOutlineStar className="text-orange-600  " />
                      }
                      placeholderSymbol={<HiStar className="text-orange-600" />}
                      fullSymbol={<HiStar />}
                    />
                    <span>{rating}</span>
                  </div>
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
