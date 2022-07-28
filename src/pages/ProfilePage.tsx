import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { UserState } from "../types/userstate";
import { Profile } from "../types/profile";
import { Friend } from "../types/friend";
import RecipeCard from "../components/RecipeCard";

export default function ProfilePage() {
  const user: UserState = useTypedSelector((state) => state.user);
  const { username } = useParams();
  const [profData, setProfData] = useState<Profile>();

  useEffect(() => {
    const fetchUser = async () => {
      if (user.loginInfo.username === username) {
        setProfData({
          username: user.loginInfo.username,
          first_name: user.loginInfo.first_name,
          last_name: user.loginInfo.last_name,
          email: user.loginInfo.email,
          profile_pic: user.loginInfo.profile_pic,
          friends: user.loginInfo.friends,
          recipe_list: user.loginInfo.recipe_list,
        });
      } else {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.loginInfo.access}`,
          },
        };
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/profile${`/${username}`}`,
            config
          );
          setProfData(data);
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="p-5 flex flex-row">
      <div className="w-1/3">
        {profData ? (
          <h1 style={{ textAlign: "left" }}>
            {profData.username} - {profData.first_name} {profData.last_name}{" "}
          </h1>
        ) : (
          ""
        )}
        {profData ? (
          <img
            src={`http://localhost:8000/static${profData.profile_pic}`} // remove localhost
            alt="user profile img"
            className="w-1/2 rounded-full"
          />
        ) : (
          ""
        )}
        <h2 className="mt-5"> Friends </h2>
        <div className="flex flex-row">
          {profData?.friends
            ? profData.friends.map((friend, i) => {
                /// once this is bigger is will need to select a set number of random friends
                return (
                  <div key={`friend ${i}`}>
                    <a href={`/${friend.username}`}>
                      <img
                        src={`http://localhost:8000/static${friend.profile_pic}`} // remove localhost
                        alt="user profile img"
                        style={{ margin: "5px" }}
                        className="h-20 w-20 rounded-full"
                      />
                    </a>
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <div>
        <h3>Recipes</h3>
        <div className="flex flex-row">
          {profData
            ? profData.recipe_list.map((recipe, i) => {
                return <RecipeCard recipe={recipe} key={i} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
