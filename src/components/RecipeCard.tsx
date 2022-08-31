import React, { FC } from "react";
import { Recipe } from "../types/recipe";

const RecipeCard: FC<{
  recipe: Recipe;
}> = ({ recipe }) => {
  return (
    <div
      className="p-5 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded"
      style={{
        height: "40vh",
        width: "48%",
        margin: "1%",
      }}
    >
      <div className="pl-3 bg-zinc-200 rounded-md h-full drop-shadow-md">
        <div>
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
        </div>

        <div>
          <h2>
            <strong>{recipe.title}</strong>
          </h2>
          <div style={{ textAlign: "left" }}>
            <h5>-{recipe.catagory}</h5>
            <p>{recipe.description}</p>
            <div className="mt-3 text-black underline">
              <a href={`recipe/${recipe.id}`}> View Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
