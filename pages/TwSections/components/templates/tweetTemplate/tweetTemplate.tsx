import React from "react";

const Post = (props) => {
  const deletefn = (e) => {
    document.getElementById(props.id).classList.toggle("show");
    document.getElementById("point1" + props.id).classList.toggle("fusion1");
    document.getElementById("point3" + props.id).classList.toggle("fusion3");
  };
  return (
    <div className="post">
      <div className="id">
        <div className="card"></div>
      </div>
      <div className="content">
        <div className="info">
          <h3>{props.userName}</h3>
          <p>{"@" + props.userName + " . " + props.createdAt}</p>
          <div className="deleteBtn" onClick={deletefn}>
            <div id={"point1" + props.id} className="point1"></div>
            <div className="point2"></div>
            <div id={"point3" + props.id} className="point3"></div>
          </div>
          <h1 id={props.id}>Delete</h1>
        </div>

        <div className="comment">{props.content}</div>
        <div className="actions">
          <div className="action">
            <div className="card"></div>
            <p>{props.likes}</p>
          </div>
          <div className="action">
            <div className="card"></div>
            <p>{props.retweets}</p>
          </div>
          <div className="action">
            <div className="card"></div>
            <p>{props.hearts}</p>
          </div>
          <div className="action">
            <div className="card"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
