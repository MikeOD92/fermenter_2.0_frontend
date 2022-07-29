import React, { useEffect, useState } from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";

import { UserState } from "../types/userstate";

export default function Friends() {
  const user: UserState = useTypedSelector((state) => state.user);

  const friends = user.loginInfo.friends;
  // console.log(friends);

  return (
    <div>
      Friends
      {friends
        ? friends.map((friend) => {
            return (
              <div>
                <img
                  className="h-20 w-20 rounded-full"
                  src={`http://localhost:8000/static${friend.profile_pic}`}
                  alt="user profile"
                />
                <div>
                  <h2>{friend.username}</h2>
                </div>
                <div>
                  <h4>{friend.email}</h4>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
