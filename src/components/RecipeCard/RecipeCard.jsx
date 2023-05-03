import React from "react";
import { HiOutlineBookmark } from "react-icons/hi";

const RecipeCard = ({ recipe }) => {
  const {
    recipeId,
    recipeName,
    recipeImage,
    ingredients,
    cooking_method,
    rating,
  } = recipe;
  return (
    <>
      <div className="card card-compact w-full md:w-[23rem] lg:w-96 bg-base-100 shadow-xl p-2 md:p-5 ">
        <h4 className="text-xl mb-2">{recipeName}</h4>
        <img src={recipeImage} alt={recipeName} className="mb-2" />
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
            View Recipes
          </button>
          <div className="tooltip" data-tip="Add to bookmark">
            <button className="btn btn-ghost">
              <HiOutlineBookmark className="w-6 h-6" />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
