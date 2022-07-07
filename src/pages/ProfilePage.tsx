import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { UserState } from "../types/userstate";
import { Profile } from "../types/Profile";

export default function ProfilePage() {
  // const user: UserState = useTypedSelector((state) => state.user);
  //   const { id } = useParams();
  const [userProf, setUserProf] = useState<Profile>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`localhost:8000/api/myprofile`);
        setUserProf(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {userProf ? userProf.username : ""}
      {userProf ? (
        <img
          src={userProf.profile_pic}
          alt="user profile img"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        ""
      )}
      <h1>
        {userProf ? userProf.first_name : ""}{" "}
        {userProf ? userProf.last_name : ""}
      </h1>
    </div>
  );
}
