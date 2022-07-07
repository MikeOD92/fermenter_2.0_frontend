import { useState, useEffect } from "react";
import axios from "axios";
import { useTypedSelector } from "./useTypedSelector";
import { UserState } from "../types/userstate";
import { actionCreators } from "../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const user: UserState = useTypedSelector((state) => state.user);
  const { verify } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const validate = async () => {
      verify(user);
    };
    if (user.loginInfo.access !== "") {
      validate();
      // setAuth(true);
      return;
    } else {
      // setAuth(false);
    }
  }, []);
};

export default useAuth;
