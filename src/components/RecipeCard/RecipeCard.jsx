import React, { useState } from "react";
import { BsBookmarkCheck, BsBookmarkDash } from "react-icons/bs";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import LazyLoad from "react-lazy-load";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RecipeCard = ({ recipe }) => {
  const [disabled, setDisabled] = useState(false);
  const {
    recipeId,
    recipeName,
    recipeImage,
    ingredients,
    cooking_method,
    rating,
  } = recipe;

  const handleDisable = () => {
    setDisabled(true);
    Swal.fire({
      icon: "success",
      title: "Marked as a favorite",
      timer: 1500,
    });
  };
  return (
    <>
      <div className="card card-compact  w-full my-5  shadow-xl p-2 md:p-5 ">
        <LazyLoad>
          <img
            className="h-48 object-cover w-full rounded-lg"
            src={recipeImage}
            alt={recipeName}
          />
        </LazyLoad>
        <h4 className="text-xl mb-2 font-bold my-2">{recipeName}</h4>
        <p>Ingredient:</p>
        <ul className="list-disc pl-5 mb-2">
          {ingredients.slice(0, 5).map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p className="mb-2">
          Cooking Method:
          <span className="font-semibold">{cooking_method}</span>
        </p>
        <div className=" flex gap-2  ">
          Rating:
          <Rating
            className="text-2xl"
            readonly
            placeholderRating={rating}
            emptySymbol={<HiOutlineStar className="text-orange-600  " />}
            placeholderSymbol={<HiStar className="text-orange-600" />}
            fullSymbol={<HiStar />}
          />
          <span>{rating}</span>
        </div>
        <div className="card-actions flex justify-between items-center ">
          <Link to={`/recipe-details/${recipeId}`}>
            <button className="btn btn-primary  btn-sm normal-case ">
              View Recipe Details
            </button>
          </Link>
          <div className="tooltip" data-tip="Add to favorite ">
            <button
              onClick={handleDisable}
              className="btn btn-ghost"
              disabled={disabled}
            >
              {disabled ? (
                <BsBookmarkCheck className="w-6 h-6" />
              ) : (
                <BsBookmarkDash className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
