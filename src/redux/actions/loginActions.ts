import { LoginInfo } from "../../types/loginInfo";
import { ActionType } from "../actions-types";

export interface loginAction {
  type: ActionType.LOGIN_REQUEST;
}
export interface loginActionSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: LoginInfo;
}
export interface loginActionFail {
  type: ActionType.LOGIN_FAIL;
  payload: "";
}
export interface logoutAction {
  type: ActionType.LOGOUT;
}
export interface verifyAction {
  type: ActionType.VERIFY_REQUEST;
}
export interface verifyActionSuccess {
  type: ActionType.VERIFY_SUCCESS;
  payload: boolean;
}
export interface verifyActionFail {
  type: ActionType.VERIFY_FAIL;
  payload: boolean;
}
