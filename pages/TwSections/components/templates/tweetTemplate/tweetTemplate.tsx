import React from "react";

const Post = (props) => {
  const deletefn = (e) => {
    e.target.classList.toggle("show");

    document.getElementById("point1").classList.toggle("fusion1");
    document.getElementById("point3").classList.toggle("fusion3");
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
          <div className="deleteBtn">
            <div id="point1" className="point1"></div>
            <div className="point2"></div>
            <div id="point3" className="point3"></div>
          </div>
          <h1 onClick={deletefn}>delete</h1>
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
