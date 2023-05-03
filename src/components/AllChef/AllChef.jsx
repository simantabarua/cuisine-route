import React, { useContext } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ChefContext } from "../../pages/Home/Home";
import ChefCard from "../ChefCard/ChefCard";

const AllChef = () => {
  const chefs = useContext(ChefContext) || [];

  return (
    <>
      <SectionHeader title="AllChef" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-5 md:px-3 lg:px-6 place-items-center">
        {chefs.slice(0,6).map((chef, index) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </>
  );
};

export default AllChef;
