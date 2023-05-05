import React, { useEffect, useState } from "react";
import {
  getFavoriteRecipes,
  removeFromFavorites,
} from "../../utils/localstorage";
import { Link, useLoaderData } from "react-router-dom";
import FavoriteRecipeCard from "../../components/FavoriteRecipeCard/FavoriteRecipeCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const MyFavoriteRecipes = () => {
  const recipes = useLoaderData();
  const [filteredRecipe, setFilteredRecipe] = useState([]);
  const favoriteRecipes = getFavoriteRecipes();

  useEffect(() => {
    const getFilteredRecipes = () => {
      const filteredRecipes = [];
      for (const id of favoriteRecipes) {
        const recipesForId = recipes.filter((recipe) => recipe.recipeId === id);
        filteredRecipes.push(...recipesForId);
      }
      setFilteredRecipe(filteredRecipes);
    };
    getFilteredRecipes();
  }, [favoriteRecipes]);

  const handleRemoveFromFavorites = (recipeId) => {
    removeFromFavorites(recipeId);
  };

  return (
    <div>
      <SectionHeader title=" Favorite Recipe will Show here" />
      {filteredRecipe.length === 0 ? (
        <div className="flex justify-center items-center flex-col my-5 ">
          <h2 className="font-bold text-2xl mt-5">
            hmm... It looks like you haven't entered your favorite recipe yet
          </h2>
          <div className="flex gap-2 items-center justify-center flex-col md:flex-row my-5">
            <p className="text-xl text-center">
              We can't wait to hear about your favorite recipe
            </p>
            <Link to="/recipes">
              <button className="btn btn-primary">Lets Go</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl  mx-auto h-full flex items-center justify-center flex-col gap-2 ">
          {filteredRecipe.map((recipe) => (
            <FavoriteRecipeCard
              key={recipe.recipeId}
              recipe={recipe}
              handleRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavoriteRecipes;
