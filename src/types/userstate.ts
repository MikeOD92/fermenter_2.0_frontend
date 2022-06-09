import { LoginInfo } from "./loginInfo";
import { VerifiedStatus } from "./VerifiedStatus";
export class UserState {
  loading: Boolean;
  loginInfo: LoginInfo;
  verified: VerifiedStatus;

  constructor(
    loading = false,
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
    },
    verified = {
      verify: null,
    }
  ) {
    this.loading = loading;
    this.loginInfo = loginInfo;
    this.verified = verified;
  }
}
