import React from "react";

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
      <div className="card card-compact w-full md:w-[23rem] lg:w-96 bg-base-100 shadow-xl ">
        <h3 className="font-bold mb-2">Featured Recipe:</h3>
        <h4 className="text-xl mb-2">{recipeName}</h4>
        <img src={recipeImage} alt={recipeName} className="mb-2" />
        <ul className="list-disc pl-5 mb-2">
          {ingredients.map((ingredient, index) => (
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
      </div>
    </>
  );
};

export default RecipeCard;
