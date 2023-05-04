import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import ChefCard from "../ChefCard/ChefCard";

const AllChef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    const loadAllChef = async () => {
      try {
        const req = await fetch(
          "https://cuisine-route-server.vercel.app/chefData"
        );
        const res = await req.json();
        setChefs(res);
      } catch (error) {
        console.log(error);
      }
    };
    loadAllChef();
  }, []);

  return (
    <>
      <SectionHeader
        title="The Faces of Flavor"
        subtitle="Meet Our Talented Chefs and Their Unique Styles. Your Ultimate Source for Culinary Inspiration"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6 md:px-3 lg:px-6 place-items-center">
        {chefs.map((chef, index) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </>
  );
};

export default AllChef;
