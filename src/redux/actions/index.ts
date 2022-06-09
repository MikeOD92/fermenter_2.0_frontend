import { ActionType } from "../actions-types";

interface LoginAction {
  type: ActionType.LOGIN;
  payload: {};
}
interface LogoutAction {
  type: ActionType.LOGOUT;
}
interface VerifyAction {
  type: ActionType.VERIFY;
  payload: {};
}

export type Action = LoginAction | LogoutAction | VerifyAction;
