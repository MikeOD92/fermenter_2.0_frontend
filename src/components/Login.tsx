import React, { useRef, SyntheticEvent } from "react";
import axios from "axios";
import { actionCreators } from "../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../hooks";
// import { login } from "../redux/action-creators";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();

  const loginUser = useRef<HTMLInputElement>(null);
  const loginPass = useRef<HTMLInputElement>(null);

  const { login } = bindActionCreators(actionCreators, dispatch);

  const userLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (loginUser.current !== null && loginPass.current !== null) {
      login(loginUser.current?.value, loginPass.current?.value);
    }
  };
  return (
    <>
      <h2> Sign in </h2>
      <form
        onSubmit={userLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-5">
          <input
            className="mr-3"
            type="text"
            placeholder="username"
            ref={loginUser}
          />
          <input
            className="mr-3"
            type="password"
            placeholder="password"
            ref={loginPass}
          />
        </div>
        <button
          className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          {" "}
          Sign in
        </button>
      </form>
    </>
  );
}
