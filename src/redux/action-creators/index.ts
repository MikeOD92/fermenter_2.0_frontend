import { ActionType } from "../actions-types";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { AnyAction } from "@reduxjs/toolkit";
import { LoginInfo } from "../../types/loginInfo";
// import { UserState } from "../../types/userstate";

export const login = (
  username: string,
  password: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const { data } = await axios.post("http://localhost:8000/api/login", {
      username: username,
      password: password,
    });
    localStorage.setItem("loginInfo", JSON.stringify(data));
    dispatch({
      type: ActionType.LOGIN,
      payload: data,
    });
  };
};

export const verify = (
  user: LoginInfo
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/token/verify/",
        {
          token: user.access,
        }
      );
      await console.log(data);
      if (data.status === 200) {
        dispatch({
          type: ActionType.VERIFY,
          payload: { verify: true },
        });
      } else {
        dispatch({
          type: ActionType.VERIFY,
          payload: { verify: false },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
};
