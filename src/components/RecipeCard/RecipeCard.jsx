import React, { useState } from "react";
import { BsBookmarkCheck, BsBookmarkDash } from "react-icons/bs";
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
      title: "Bookmarked",
      timer: 1500,
    });
  };
  return (
    <>
      <div className="card card-compact  w-full my-5  shadow-xl p-2 md:p-5 ">
        <img
          className="h-48 object-cover w-full rounded-lg"
          src={recipeImage}
          alt={recipeName}
        />
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
        <p>
          Rating: <span className="font-semibold">{rating}</span>
        </p>
        <div className="card-actions flex justify-between items-center ">
          <button className="btn btn-primary  btn-sm normal-case ">
            View Recipe
          </button>
          <div className="tooltip" data-tip="Add to bookmark">
            <button
              onClick={handleDisable}
              className="btn btn-ghost"
              disabled={disabled}
            >
              {disabled ? (
                <BsBookmarkCheck className="w-6 h-6"  />
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
