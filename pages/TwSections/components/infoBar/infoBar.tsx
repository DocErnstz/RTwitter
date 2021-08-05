import React from "react";
import { useAuth } from "../../../../context/AuthContext";
import UserSchema from "../templates/userTemplate/userTemplate";
import { v4 as uuidv4 } from "uuid";

const InfoBar: React.FC = () => {
  const { users } = useAuth();
  const rand = Math.floor(Math.random() * users.length - 3);

  const pickedUsers = users.slice(rand, rand + 3);
  return (
    <div className="rightbar">
      <div className="searchbar container-row">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="users container-col">
        <h2>Who to follow</h2>
        {pickedUsers.length > 0
          ? pickedUsers.map((element) => (
              <UserSchema userName={element.userName} key={uuidv4()} />
            ))
          : "laoding"}
      </div>
    </div>
  );
};

export default InfoBar;
