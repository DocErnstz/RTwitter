import React from "react";
import Post from "../tweetTemplate/tweetTemplate";

const HomeBar: React.FC = () => {
  return (
    <div className="main">
      <div className="header">
        <h3>Home</h3>
      </div>
      <div className="tweet">
        <div className="card"></div>
        <textarea rows={30} cols={30}>
          Hello world
        </textarea>
        <div className="options">
          <div className="icons"></div>
          <a className="btn-outline">Tweet</a>
        </div>
      </div>
      <div className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default HomeBar;
