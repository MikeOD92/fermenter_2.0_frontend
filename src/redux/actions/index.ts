import {
  loginAction,
  loginActionSuccess,
  loginActionFail,
  logoutAction,
  verifyAction,
  verifyActionSuccess,
  verifyActionFail,
} from "./loginActions";

export type Action =
  | loginAction
  | loginActionFail
  | loginActionSuccess
  | logoutAction
  | verifyAction
  | verifyActionSuccess
  | verifyActionFail;
