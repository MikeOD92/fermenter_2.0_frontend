import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { UserState } from "../types/userstate";
import { Profile } from "../types/profile";
import RecipeCard from "../components/RecipeCard";
export default function ProfilePage() {
  const user: UserState = useTypedSelector((state) => state.user);
  const { username } = useParams();
  const [userProf, setUserProf] = useState<Profile>();

  useEffect(() => {
    const fetchUser = async () => {
      if (user.loginInfo.username === username) {
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/myprofile`,
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${user.loginInfo.access}`,
              },
            }
          );
          setUserProf(data);
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchUser();
  }, [user, username]);

  return (
    <div className="p-5 flex flex-row">
      <div className="w-1/3">
        {userProf ? (
          <h1 style={{ textAlign: "left" }}>
            {userProf.username} - {userProf.first_name} {userProf.last_name}{" "}
          </h1>
        ) : (
          ""
        )}
        {userProf ? (
          <img
            src={`http://localhost:8000/static${userProf.profile_pic}`} // this is weird and will be changed when we move to an S3 Bucket
            alt="user profile img"
            className="w-1/2 rounded-full"
          />
        ) : (
          ""
        )}
        <h2 className="mt-5"> Friends </h2>
        {userProf
          ? userProf.friends.map((friend) => {
              return (
                <h1>
                  {friend.first_name} {friend.last_name}
                </h1>
              );
            })
          : ""}
      </div>

      <div>
        <h3>Recipes</h3>
        <div className="flex flex-row">
          {userProf
            ? userProf.recipe_list.map((recipe) => {
                return <RecipeCard recipe={recipe} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
