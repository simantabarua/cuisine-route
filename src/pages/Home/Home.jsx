import React, { createContext } from "react";
import Banner from "../../components/Banner/Banner";
import AllChef from "../../components/AllChef/AllChef";
import { useLoaderData } from "react-router-dom";
import FeaturedRecipes from "../../components/FeaturedRecipes/FeaturedRecipes";
import Testimonials from "../../components/Testimonials/Testimonials";
import GallerySection from "../../components/GallerySection/GallerySection";
import Featured from "../../components/Featured/Featured";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <AllChef />
      <FeaturedRecipes />
      <GallerySection />
      <Featured />
      <ServiceBanner/>
      <Testimonials />
    </>
  );
};

export default Home;
