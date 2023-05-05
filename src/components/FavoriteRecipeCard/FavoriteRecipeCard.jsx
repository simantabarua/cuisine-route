import React from "react";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../../utils/localstorage";

function FavoriteRecipeCard({ recipe }) {
  const handleRemoveFromFavorites = () => {
    removeFromFavorites(recipeId);
  };
  const { recipeId, recipeName, recipeImage, rating } = recipe;
  return (
    <div className="card card-side bg-base-100 shadow-xl w-full">
      <figure>
        <img className="w-64 rounded-md" src={recipeImage} alt="Movie" />
      </figure>
      <div className="card-body bg-base-200">
        <h2 className="card-title">{recipeName}</h2>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/recipe-details/${recipeId}`}>
            <button className="btn btn-primary  normal-case ">
              View Recipe Details
            </button>
          </Link>
          <button onClick={handleRemoveFromFavorites} className="btn btn-error">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteRecipeCard;
