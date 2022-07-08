import React, { FC } from "react";
import { Recipe } from "../types/recipe";

const RecipeCard: FC<{
  recipe: Recipe;
}> = ({ recipe }) => {
  return (
    <div
      className="p-5 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded"
      style={{
        color: "white",
        width: "30vw",
        margin: "1%",
      }}
    >
      {recipe.recipe_images.length > 0 ? (
        <img
          src={`http://localhost:8000/static${recipe.recipe_images[0].img}`}
          alt="uploaded recipe"
          width="100px"
          style={{ float: "left", margin: "5px" }}
        />
      ) : (
        ""
      )}{" "}
      <div className="pl-3">
        <h2>
          <strong>{recipe.title}</strong>
        </h2>
        <h5>-{recipe.catagory}</h5>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};
export default RecipeCard;
