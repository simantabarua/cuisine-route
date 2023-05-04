import React, { createContext } from "react";
import Banner from "../../components/Banner/Banner";
import AllChef from "../../components/AllChef/AllChef";
import { useLoaderData } from "react-router-dom";
import FeaturedRecipes from "../../components/FeaturedRecipes/FeaturedRecipes";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <AllChef />
      <FeaturedRecipes />
      <Testimonials />
    </>
  );
};

export default Home;
