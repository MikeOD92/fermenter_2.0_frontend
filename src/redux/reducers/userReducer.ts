import { LoginInfo } from "../../types/loginInfo";
import { ActionType } from "../actions-types";
import { Action } from "../actions/index";

interface UserState {
  loading: boolean;
  error: string | null;
  loginInfo: LoginInfo;
  verified: boolean;
}

let loginInfo = localStorage.getItem("loginInfo")
  ? localStorage.getItem("loginInfo")
  : null;

const initialState = {
  loading: false,
  error: null,
  loginInfo:
    loginInfo !== null
      ? JSON.parse(loginInfo)
      : {
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
  verified: false,
};

export const userReducer = (
  state: UserState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return {
        loading: true,
        error: null,
        loginInfo: {},
        verified: false,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        loading: false,
        error: null,
        loginInfo: action.payload,
        verified: true,
      };
    case ActionType.LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
        loginInfo: {},
        verified: false,
      };
    case ActionType.LOGOUT:
      return {
        loading: false,
        error: null,
        loginInfo: {},
        verified: false,
      };
    case ActionType.VERIFY_REQUEST:
      return {
        loading: true,
        error: null,
        loginInfo: loginInfo ? JSON.parse(loginInfo) : {},
        verified: false,
      };
    case ActionType.VERIFY_SUCCESS:
      return {
        loading: true,
        error: null,
        loginInfo: loginInfo ? JSON.parse(loginInfo) : {},
        verified: true,
      };
    case ActionType.VERIFY_FAIL:
      return {
        loading: true,
        error: null,
        loginInfo: {},
        verified: false,
      };
    default:
      return state;
  }
};
