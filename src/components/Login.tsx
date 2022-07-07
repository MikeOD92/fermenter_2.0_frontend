import React, { useRef, SyntheticEvent, useEffect } from "react";
import { actionCreators } from "../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserState } from "../types/userstate";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loginUser = useRef<HTMLInputElement>(null);
  const loginPass = useRef<HTMLInputElement>(null);

  const { login } = bindActionCreators(actionCreators, dispatch);
  const user: UserState = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (user.verified === true) {
      navigate("/");
    }
  }, [user.verified]);

  const userLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    if (loginUser.current !== null && loginPass.current !== null) {
      try {
        login(loginUser.current?.value, loginPass.current?.value);
      } catch (err) {
        console.error(err);
      }
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
        {user.error ? (
          <p style={{ color: "red" }}>
            {" "}
            No account was found with these credentials
          </p>
        ) : (
          ""
        )}
      </form>
    </>
  );
}
