import React from "react";
import { getFavoriteRecipes } from "../../utils/localstorage";
import { useLoaderData } from "react-router-dom";
import FavoriteRecipeCard from "../../components/FavoriteRecipeCard/FavoriteRecipeCard";

const MyFavoriteRecipes = () => {
  const recipes = useLoaderData();
  const favoriteRecipes = getFavoriteRecipes();
  console.log(recipes);
  const getFilteredRecipes = () => {
    const filteredRecipes = [];
    for (const id of favoriteRecipes) {
      const recipesForId = recipes.filter((recipe) => recipe.recipeId === id);
      filteredRecipes.push(...recipesForId);
    }
    return filteredRecipes;
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div>
      <h1 className="text-4xl text-center md:text-6xl font-bold my-2">
        Favorite Recipe will Show here
      </h1>
      {filteredRecipes.length === 0 ? (
        <div className="flex justify-center items-center flex-col my-5">
          <h2 className="font-bold text-2xl">
          hmm...  It looks like you haven't entered your favorite recipe yet
          </h2>
          <div className="flex gap-2 items-center my-5">
            <p className="text-xl">
              We can't wait to hear about your favorite recipe
            </p>
            <button className="btn btn-primary">Lets Go</button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl  mx-auto h-full flex items-center justify-center ">
          {filteredRecipes.map((recipe) => (
            <FavoriteRecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavoriteRecipes;
