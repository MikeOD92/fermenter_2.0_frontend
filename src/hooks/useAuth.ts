import { useState, useEffect } from "react";
import axios from "axios";
import { selectUser, selectVerification } from "../redux/store";
import { UserState } from "../types/userstate";
import { LoginInfo } from "../types/loginInfo";
import { actionCreators } from "../redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { VerifiedStatus } from "../types/VerifiedStatus";

const useAuth = () => {
  const user: LoginInfo = useSelector(selectUser);
  const verified: VerifiedStatus | null = useSelector(selectVerification);

  const [auth, setAuth] = useState<boolean>();
  const dispatch = useDispatch();

  const { verify } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    console.log("user", user);

    if (user) {
      verify(user);
    }

    if (verified.verify === true) {
      setAuth(true);
    }
    // } else {
    //   console.log("data not provided");
    //   return;
    // }

    // if(user === true)
    // const validate = async () => {
    //   const data = await axios.post("http://localhost:8000/api/token/verify/", {
    //     token: user.access,
    //   });
    //   /// this should probably be set up as a redux action that will be dispatched
    //   if (data.status === 200) {
    //     setAuth(true);
    //   }
    // };
    // if (user !== null) {
    //   validate();
    //   return;
    // } else {
    //   setAuth(false);
    // }
  }, [user, verified, verify]);

  return auth;
};

export default useAuth;
