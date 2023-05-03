import React from "react";
import { BiLike } from "react-icons/bi";
import { GiLoveMystery, GiRiceCooker } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiPhone,
} from "react-icons/hi";

const ChefInfo = ({ chef }) => {
  const {
    chefName,
    chefImage,
    chefExperience,
    recipes_count,
    likes,
    contact: { email, phone },
    address: { city, state },
    hobbies,
    chefDescription,
  } = chef;
  return (
    <>
      <div className="hero md:mt-12 bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 md:px-24">
          <img
            src={chefImage}
            alt="Chef picture"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="leading-8 font-medium">
            <h1 className="text-5xl font-bold">{chefName}</h1>
            <p className="py-6">{chefDescription}</p>
            <div>
              <p className="flex gap-1 items-center ">
                <RiUserStarLine className="w-6 h-6" /> {chefExperience} Years
              </p>
              <p className="flex gap-1 items-center ">
                <GiRiceCooker className="w-6 h-6" /> {recipes_count} Recipes
              </p>
              <p className="flex gap-1  items-center ">
                <BiLike className="w-6 h-6" /> {likes} Likes
              </p>
              <p className="flex gap-1 items-center ">
                <HiOutlineMail className="w-6 h-6" /> {email}
              </p>
              <p className="flex gap-1 items-center ">
                <HiPhone className="w-6 h-6" /> {phone}
              </p>
              <p className="flex gap-1 items-center ">
                <HiOutlineLocationMarker className="w-6 h-6" /> {city}
              </p>
              <p className="flex gap-1 items-center  capitalize">
                <GiLoveMystery className="w-6 h-6" />
                {hobbies.join(", ") + "."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefInfo;
