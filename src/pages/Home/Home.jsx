import React, { createContext } from "react";
import Banner from "../../components/Banner/Banner";
import AllChef from "../../components/AllChef/AllChef";
import { useLoaderData } from "react-router-dom";
export const ChefContext = createContext([]);
const Home = () => {
  const chefs = useLoaderData();
  return (
    <>
      <ChefContext.Provider value={chefs}>
        <Banner />
        <AllChef />
      </ChefContext.Provider>
    </>
  );
};

export default Home;
