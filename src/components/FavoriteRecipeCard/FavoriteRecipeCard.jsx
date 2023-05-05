import React from "react";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../utils/localstorage";

function FavoriteRecipeCard({ recipe, handleRemoveFromFavorites }) {
  const { recipeId, recipeName, recipeImage, rating } = recipe;
  return (
    <div className="card md:card-side bg-base-100 shadow-xl w-full">
      <figure>
        <img
          className="w-full  md:w-64 h-64 object-cover rounded-md"
          src={recipeImage}
          alt="Movie"
        />
      </figure>
      <div className="card-body bg-base-200">
        <h2 className="card-title">{recipeName}</h2>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end   ">
          <div className="flex items-center gap-3 flex-col">
            <Link className="w-full" to={`/recipe-details/${recipeId}`}>
              <button className="btn btn-primary normal-case w-full md:w-40">
                View Recipe Details
              </button>
            </Link>
            <div className="w-full">
              <button
                onClick={() => handleRemoveFromFavorites(recipeId)}
                className="btn btn-error normal-case w-full md:w-40"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoriteRecipeCard;
