import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { UserState } from "../types/userstate";
import { Profile } from "../types/profile";
import { Friend } from "../types/friend";

export default function Friends() {
  const user: UserState = useTypedSelector((state) => state.user);
  const [friendList, setFriendList] = useState<Array<Friend>>();

  useEffect(() => {
    const fetch = async () => {
      let friendData = [];
      for (let x of user.loginInfo.friends) {
        try {
          const friend = await axios.get(
            `http://localhost:8000/api/users/${x}`,
            {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${user.loginInfo.access}`,
              },
            }
          );
          friendData.push(friend.data);
        } catch (err) {
          console.error(err);
        }
      }
      setFriendList(friendData);
    };
    fetch();
  }, []);

  const friends = user.loginInfo.friends;
  console.log(friends);

  return (
    <div>
      Friends
      {friendList
        ? friendList.map((friend) => {
            return <h2>{friend.username}</h2>;
          })
        : ""}
    </div>
  );
}
