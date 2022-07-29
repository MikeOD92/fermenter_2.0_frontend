import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { UserState } from "../types/userstate";
import { Recipe } from "../types/recipe";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  const user: UserState = useTypedSelector((state) => state.user);

  useEffect(() => {
    const fetch = async () => {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.loginInfo.access}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:8000/api/recipes/${id}`,
        config
      );
      setRecipe(data);
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="m-7">
        <div className="mb-7">
          <h1>{recipe ? recipe.title : ""}</h1>
          <p> By: {recipe ? recipe.author : ""}</p>
          <p>{recipe ? recipe.catagory : ""}</p>
        </div>

        <div className="flex flex-row">
          <div className="flex-column">
            {recipe?.recipe_images[0] ? (
              <img
                src={`http://localhost:8000/static/${recipe.recipe_images[0].img}`}
                className="w-1/5"
                alt="user uploaded img of recipe"
              />
            ) : (
              ""
            )}
            {recipe?.recipe_images
              ? recipe.recipe_images.map((recipe) => {
                  return (
                    <img
                      src={`http://localhost:8000/static/${recipe.img}`}
                      className="w-1/4 mt-2"
                      alt="user uploaded img of recipe"
                    />
                  );
                })
              : ""}
          </div>

          <div className="w-4/5 m-10 text-left">
            <h2> Description</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {recipe ? recipe.description : ""}
            </p>
            <h2> Ingredients</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {" "}
              {recipe ? recipe.ingredients : ""}
            </p>
            <h2> Method</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {" "}
              {recipe ? recipe.method : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
