import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../SectionHeader/SectionHeader";
import RecipeCard from "../RecipeCard/RecipeCard";

const FeaturedRecipes = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);
  useEffect(() => {
    const loadFeatureRecipes = async () => {
      try {
        const req = await fetch(
          "https://cuisine-route-server.vercel.app/featured-recipe"
        );
        const res = await req.json();
        setFeaturedRecipes(res);
      } catch (error) {
        console.log(error);
      }
    };
    loadFeatureRecipes();
  }, []);
  return (
    <>
      <SectionHeader
        title="Featured Recipes: Discover Our Mouth-Watering Selection of Dishes"
        subtitle="Explore our selection of featured recipes that have been carefully curated by our talented chefs. From classic comfort foods to exotic international flavors, our recipes are sure to tantalize your taste buds and inspire your culinary creativity."
      />
      <div className="relative w-full px-5 ">
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
          {featuredRecipes.map((recipe) => (
            <SwiperSlide className="h-full" key={recipe.recipeId}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedRecipes;
