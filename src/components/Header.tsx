import React, { FC } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { UserState } from "../types/userstate";
import { actionCreators } from "../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const Header: FC = () => {
  const dispatch = useDispatch();
  useAuth();

  const user: UserState = useTypedSelector((state) => state.user);
  const { logout } = bindActionCreators(actionCreators, dispatch);

  return (
    <header className="shadow flex">
      <div className="w-8/12">
        <h1 className="text-left p-5 text-xl"> Fermenter </h1>
      </div>
      <div>
        <nav>
          <ul className="flex">
            <li className="p-5">
              {user?.verified ? (
                <p onClick={(e) => logout()}> Logout </p>
              ) : (
                <Link to="/login">Log in </Link>
              )}
            </li>
            <li className="p-5">
              <Link to="/">Feed</Link>{" "}
            </li>
            <li className="p-5"> Profile </li>
            <li className="p-5"> Friends</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
