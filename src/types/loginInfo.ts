export class LoginInfo {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_pic: string;
  refresh: string;
  access: string;
  token: string;
  //   friends = Array;
  constructor(
    username = "",
    first_name = "",
    last_name = "",
    email = "",
    password = "",
    profile_pic = "",
    refresh = "",
    access = "",
    token = ""
  ) {
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.profile_pic = profile_pic;
    this.refresh = refresh;
    this.access = access;
    this.token = token;
  }
}
