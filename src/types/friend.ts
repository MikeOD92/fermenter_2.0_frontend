export class Friend {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_pic: string;

  constructor(
    id: 0,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    profile_pic: ""
  ) {
    this.id = id;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.profile_pic = profile_pic;
  }
}
