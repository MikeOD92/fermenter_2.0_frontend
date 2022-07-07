export class RecipeImage {
  id: number;
  img: string;
  recipe: number;

  constructor(id = 0, img = "", recipe = 0) {
    this.id = id;
    this.img = img;
    this.recipe = recipe;
  }
}
