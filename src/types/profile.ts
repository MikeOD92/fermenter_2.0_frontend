import { Friend } from "./friend";
import { Recipe } from "./recipe";

export class Profile {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: string;
  friends: Array<Friend>;
  recipe_list: Array<Recipe>;

  constructor(
    username = "",
    first_name = "",
    last_name = "",
    email = "",
    profile_pic = "",
    friends = [],
    recipe_list = []
  ) {
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.profile_pic = profile_pic;
    this.friends = friends;
    this.recipe_list = recipe_list;
  }
}
