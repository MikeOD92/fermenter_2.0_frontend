import { Friend } from "./friend";
import { Recipe } from "./recipe";

export class LoginInfo {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_pic: string;
  refresh: string;
  access: string;
  token: string;
  friends: Array<Friend>;
  recipe_list: Array<Recipe>;

  constructor(
    id = 0,
    username = "",
    first_name = "",
    last_name = "",
    email = "",
    password = "",
    profile_pic = "",
    refresh = "",
    access = "",
    token = "",
    friends = [],
    recipe_list = []
  ) {
    this.id = id;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.profile_pic = profile_pic;
    this.refresh = refresh;
    this.access = access;
    this.token = token;
    this.friends = friends;
    this.recipe_list = recipe_list;
  }
}
