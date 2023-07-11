import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";

const GallerySection = () => {
  const images = [
"https://i.ibb.co/9Tr46g1/food-img14.jpg",
"https://i.ibb.co/9ym5xnM/food-img7.jpg",
"https://i.ibb.co/NTCHXwN/food-img10.jpg",
"https://i.ibb.co/b1mydYc/food-img11.jpg",
"https://i.ibb.co/bvfPqBD/food-img17.jpg",
"https://i.ibb.co/d2hbgzq/food-img3.jpg",
  ];

  return (
    <div>
      <SectionHeader
        title={"Recipes Gallery"}
        subtitle={"Some best Recipes form Gallery"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <img
               
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out transform hover:scale-125"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;


