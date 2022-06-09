import React, { FC } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { selectUser } from "../redux/store";
import { useSelector } from "react-redux";

const Header: FC = () => {
  const auth = useAuth();
  const user = useSelector(selectUser);

  return (
    <header className="shadow flex">
      <div className="w-8/12">
        <h1 className="text-left p-5 text-xl"> Fermenter </h1>
      </div>
      <div>
        <nav>
          <ul className="flex">
            <li className="p-5">
              {auth ? (
                <p
                  onClick={(e) => {
                    console.log("logout");
                  }}
                >
                  {" "}
                  Logout{" "}
                </p>
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
