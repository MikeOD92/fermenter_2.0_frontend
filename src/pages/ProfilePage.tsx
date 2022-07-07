import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { UserState } from "../types/userstate";
import { Profile } from "../types/profile";

export default function ProfilePage() {
  const user: UserState = useTypedSelector((state) => state.user);
  const { username } = useParams();
  const [userProf, setUserProf] = useState<Profile>();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.loginInfo.access}`,
    },
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (user.loginInfo.username === username) {
        try {
          const { data } = await axios.get(
            `http://localhost:8000/api/myprofile`,
            config
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
    <div className="p-5">
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
          style={{ borderRadius: "50%", padding: "15px" }}
          width="250px"
        />
      ) : (
        ""
      )}
      <div>
        <h3>Recipes</h3>
        <div className="flex flex-row">
          {userProf
            ? userProf.recipe_list.map((recipe) => {
                return (
                  <div
                    className="p-5"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.4)",
                      color: "white",
                      width: "25vw",
                      margin: "1%",
                    }}
                  >
                    {recipe.recipe_images.length > 0 ? (
                      <img
                        src={`http://localhost:8000/static${recipe.recipe_images[0].img}`}
                        alt="uploaded recipe"
                        width="100px"
                        style={{ float: "left" }}
                      />
                    ) : (
                      ""
                    )}{" "}
                    <h2>
                      <strong>{recipe.title}</strong>
                    </h2>
                    <h5>-{recipe.catagory}</h5>
                    <p>{recipe.description}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}
