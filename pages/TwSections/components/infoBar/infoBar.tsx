import React from "react";
import { useAuth } from "../../../../context/AuthContext";
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
              <div className="flex items-center m-4">
                <i className="fas fa-user fa-2x m-4"></i>
                <div className="flex flex-col text-justify justify-center mx-2">
                  <h1>Ernesto Mercado</h1>
                  <h1>@ernesto19182398</h1>
                </div>
                  <button className="rounded-full px-3 ml-auto font-medium h-10 mr-2 bg-blue-300">Follow</button>
              </div>
              <div className="flex items-center m-4">
                <i className="fas fa-user fa-2x m-4"></i>
                <div className="flex flex-col text-justify justify-center mx-2">
                  <h1>Ernesto Mercado</h1>
                  <h1>@ernesto19182398</h1>
                </div>
                  <button className="rounded-full px-3 ml-auto font-medium h-10 mr-2 bg-blue-300">Follow</button>
              </div>
              <div className="flex items-center m-4">
                <i className="fas fa-user fa-2x m-4"></i>
                <div className="flex flex-col text-justify justify-center mx-2">
                  <h1>Ernesto Mercado</h1>
                  <h1>@ernesto19182398</h1>
                </div>
                  <button className="rounded-full px-3 ml-auto font-medium h-10 mr-2 bg-blue-300">Follow</button>
              </div>
              
            </div>
          </div>
        </div>
  );
};

export default InfoBar;
