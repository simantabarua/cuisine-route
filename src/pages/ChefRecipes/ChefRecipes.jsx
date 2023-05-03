import React from "react";
import ChefInfo from "../../components/ChefInfo/ChefInfo";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const chef = useLoaderData();
  const {
    id,
    chefName,
    cuisine,
    chefImage,
    chefExperience,
    recipes_count,
    likes,
    contact: { email, phone },
    address: { city, state },
    hobbies,
    chefDescription,
    recipes,
  } = chef;
  console.log("chefData", chef);

  return (
    <>
      <ChefInfo />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-5 md:px-3 lg:px-6 place-items-center">
        {recipes.map((recipe, index) => (
          <RecipeCard key={recipe.recipeId} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default ChefRecipes;
