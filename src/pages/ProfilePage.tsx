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
  const [userProf, setUserProf] = useState<Profile>();
  const [friendList, setFriendList] = useState<Array<Friend>>([]);

  useEffect(() => {
    const fetchUser = async () => {
      if (user.loginInfo.username === username) {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.loginInfo.access}`,
          },
        };
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/myprofile`,
            config
          );
          setUserProf(data);
          let friendData = [];

          for (let x in data.friends) {
            try {
              const friend = await axios.get(
                `http://localhost:8000/api/users/${data.friends[x]}`,
                config
              );
              friendData.push(friend.data);
            } catch (err) {
              console.error(err);
            }
          }
          setFriendList(friendData);
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
        {userProf ? (
          <h1 style={{ textAlign: "left" }}>
            {userProf.username} - {userProf.first_name} {userProf.last_name}{" "}
          </h1>
        ) : (
          ""
        )}
        {userProf ? (
          <img
            src={`http://localhost:8000/static${userProf.profile_pic}`} // remove localhost
            alt="user profile img"
            className="w-1/2 rounded-full"
          />
        ) : (
          ""
        )}
        <h2 className="mt-5"> Friends </h2>
        <div className="flex flex-row">
          {friendList
            ? friendList.map((friend, i) => {
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
          {userProf
            ? userProf.recipe_list.map((recipe, i) => {
                return <RecipeCard recipe={recipe} key={i} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
