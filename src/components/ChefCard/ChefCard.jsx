import React from "react";
import { GiCook, GiRiceCooker } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
const ChefCard = ({ chef }) => {
  const {
    id,
    chefName,
    cuisine,
    chefImage,
    chefExperience,
    recipes_count,
    likes,
  } = chef;
  return (
    <>
      <div className="card card-compact w-full md:w-[23rem] lg:w-96 bg-base-100 shadow-xl ">
        <figure>
          <LazyLoad>
            <img
              className="h-80 object-cover w-full rounded-lg"
              src={chefImage}
              alt={chefName}
            />
          </LazyLoad>
        </figure>
        <div className="card-body font-semibold text-gray-500">
          <h2 className="card-title font-xl text-gray-700 ">
            <GiCook /> {chefName}
          </h2>
          <p>Cuisine: {cuisine}</p>
          <p>Experience: {chefExperience} years</p>
          <div className="flex  items-center">
            <p className="flex gap-1 items-center">
              <GiRiceCooker className="w-6 h-6" /> {recipes_count} Recipes
            </p>
            <p className="flex gap-1  items-center">
              <BiLike className="w-6 h-6" /> {likes} Likes
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/chef/${id}`}>
              <button className="btn btn-primary w-full btn-sm normal-case ">
                View Recipes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
