import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="id">
        <div className="card"></div>
      </div>
      <div className="content">
        <div className="info">
          <h3>{props.userName}</h3>
          <p>{"@" + props.userName + " . " + props.createdAt}</p>
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
