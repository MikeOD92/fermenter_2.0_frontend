import { ActionType } from "../actions-types";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { UserState } from "../../types/userstate";
// import { UserState } from "../../types/userstate";

export const login = (
  username: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.LOGIN_REQUEST,
    });
    try {
      const { data } = await axios.post("http://localhost:8000/api/login", {
        username: username,
        password: password,
      });
      localStorage.setItem("loginInfo", JSON.stringify(data));
      dispatch({
        type: ActionType.LOGIN_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      console.error(err);
      dispatch({
        type: ActionType.LOGIN_FAIL,
        payload: err.message,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<Action>) => {
    localStorage.removeItem("loginInfo");
    dispatch({
      type: ActionType.LOGOUT,
    });
  };
};

export const verify = (
  user: UserState
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.VERIFY_REQUEST,
    });
    try {
      await axios.post("http://localhost:8000/api/token/verify/", {
        token: user.loginInfo.access,
      });
      dispatch({
        type: ActionType.VERIFY_SUCCESS,
        payload: true,
      });
    } catch (err) {
      dispatch({
        type: ActionType.VERIFY_FAIL,
        payload: false,
      });
    }
  };
};
