const addToFavorites = (recipeId) => {
  let favoriteRecipes =
    JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
  if (!favoriteRecipes.includes(recipeId)) {
    favoriteRecipes.push(recipeId);
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  } else {
    console.log("Data already exists in Local Storage");
  }
};

const removeFromFavorites = (recipeId) => {
  let favoriteRecipes =
    JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
  if (favoriteRecipes.includes(recipeId)) {
    favoriteRecipes = favoriteRecipes.filter((id) => id !== recipeId);
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  } else {
    console.log("Data does not exist in Local Storage");
  }
};

const getFavoriteRecipes = () => {
  let favoriteRecipes = [];
  const storedData = localStorage.getItem("favoriteRecipes");
  if (storedData) {
    favoriteRecipes = JSON.parse(storedData);
  }
  return favoriteRecipes;
};

const clearFavoriteRecipes = () => {
  localStorage.removeItem("favoriteRecipes");
};

// Reset the "favoriteRecipes" key to an empty array
// localStorage.setItem("favoriteRecipes", "[]");

export {
  addToFavorites,
  removeFromFavorites,
  getFavoriteRecipes,
  clearFavoriteRecipes,
};
