import { ActionType } from "../actions-types";
import { Action } from "../actions/index";

export const userReducer = (state: object = {}, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {
        loading: false,
        loginInfo: action.payload,
        verified: { verify: true },
      };
    case ActionType.LOGOUT:
      return {};
    case ActionType.VERIFY:
      return { ...state, verified: action.payload };

    default:
      return state;
  }
};
