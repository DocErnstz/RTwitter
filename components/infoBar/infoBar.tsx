import React from "react";
import { useAuth } from "../../context/AuthContext";
import UserSchema from "../templates/userTemplate/userTemplate";
import { v4 as uuidv4 } from "uuid";

const InfoBar: React.FC = () => {
  const { users } = useAuth();
  const rand = Math.floor(Math.random() * users.length - 3);

  const pickedUsers = users.slice(rand, rand + 3);
  return (
    <div className="flex flex-col hidden lg:block ">
          <div className="flex bg-gray-600 rounded-full p-2 m-4">
            <a href="" className="m-1"><i className="fas fa-search"></i></a>
            <input type="text" placeholder="Search Twitter" className="bg-gray-600 ml-1 outline-none"/>
          </div>
          <div className="flex-1">
            <div className="flex flex-col m-4 rounded-xl text-sm bg-gray-600">
              <div>
                <h1 className="m-4 text-xl">Who to follow</h1>
              </div>
              {pickedUsers.length > 0
          ? pickedUsers.map((element) => (
              <UserSchema userName={element.userName} key={uuidv4()} />
            ))
          : "laoding"}
              
            </div>
          </div>
        </div>
  );
};

export default InfoBar;
