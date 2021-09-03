import React from "react";

const UserSchema: React.FC = (props) => {
  return (
    <div className="flex items-center m-4">
                <i className="fas fa-user fa-2x m-4"></i>
                <div className="flex flex-col text-justify justify-center mx-2">
                  <h1>{props.userName}</h1>
                  <h1>{"@" + props.userName + "467"}</h1>
                </div>
                  <button className="rounded-full px-3 ml-auto font-medium h-10 mr-2 bg-blue-300">Follow</button>
              </div>
  );
};

export default UserSchema;
