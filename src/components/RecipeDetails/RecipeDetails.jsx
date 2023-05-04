import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const recipe = useLoaderData();
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
      <h1 className="text-xl md:text-6xl font-bold text-center mt-2 md:mt-20">
        {recipeName}
      </h1>
      <div className="hero min-h-fit md:my-5 ">
        <div className="hero-content flex-col md:flex-row-reverse  md:gap-16 leading-9">
          <img
            src={recipeImage}
            className="w-full md:max-w-4xl  rounded-lg shadow-2xl"
          />
          <div>
            <p className="font-bold  md:text-xl">Ingredients:</p>
            <ul className="list-disc pl-2 ">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>
              <span className="font-bold">Cooking Method:</span>
              {cooking_method}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
