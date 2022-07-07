import { RecipeImage } from "./recipeImg";

export class Recipe {
  id: number;
  title: string;
  user: number;
  catagory: string;
  description: string;
  ingredients: string;
  method: string;
  comments: Array<Comment>;
  recipe_images: Array<RecipeImage>;

  constructor(
    id = 0,
    title = "",
    user = 0,
    catagory = "",
    description = "",
    ingredients = "",
    method = "",
    comments = [],
    recipe_images = []
  ) {
    this.id = id;
    this.title = title;
    this.user = user;
    this.catagory = catagory;
    this.description = description;
    this.ingredients = ingredients;
    this.method = method;
    this.comments = comments;
    this.recipe_images = recipe_images;
  }
}
