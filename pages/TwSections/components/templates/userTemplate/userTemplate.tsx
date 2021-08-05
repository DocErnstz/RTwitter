import React from "react";

const UserSchema: React.FC = (props) => {
  return (
    <div className="container-row">
      <div className="card">
        <img src="images/logos/node.Png" alt="" />
      </div>
      <div className="info">
        <h3>{props.userName} </h3>
        <p>{"@" + props.userName}</p>
      </div>
      <div className="btn-outline">Follow</div>
    </div>
  );
};

export default UserSchema;
