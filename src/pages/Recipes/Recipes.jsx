import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function Recipes() {
  const recipes = useLoaderData();
  return (
    <div>
      <SectionHeader title="Recipes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6 md:px-3 lg:px-6 place-items-center">
        {recipes.map((recipe, index) => (
          <RecipeCard key={recipe.recipeId} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
