import { LoginInfo } from "./loginInfo";
export class UserState {
  loading: Boolean;
  error: string | null;
  loginInfo: LoginInfo;
  verified: Boolean;

  constructor(
    loading = false,
    error = null,
    loginInfo = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      profile_pic: "",
      refresh: "",
      access: "",
      token: "",
      friends: [],
      recipe_list: [],
    },
    verified = false
  ) {
    this.loading = loading;
    this.error = error;
    this.loginInfo = loginInfo;
    this.verified = verified;
  }
}
