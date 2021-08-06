import React from "react";
import { useAuth } from "../../../../../context/AuthContext";

const Post = (props) => {
  const { setPosts, posts } = useAuth();
  const openfn = (e) => {
    document.getElementById(props.id).classList.toggle("show");
    document.getElementById("point1" + props.id).classList.toggle("fusion1");
    document.getElementById("point3" + props.id).classList.toggle("fusion3");
  };
  const deletefn = async (e) => {
    const response = await fetch(
      `http://localhost:3000/api/tweets/deleteTweet/${props.id}`,
      {
        method: "PATCH",
      }
    );

    const newTweets = await response.json();
    console.log(newTweets);
    setPosts(newTweets.tweets);
  };
  const action = async (e) => {
    console.log(e.target.id);
    const response = await fetch(
      `http://localhost:3000/api/tweets/actionTweet/${props.id}`,
      {
        method: "PUT",
        body: JSON.stringify({ updateProp: e.target.id }),
      }
    );

    const newTweets = await response.json();
    setPosts(newTweets.tweets);
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
          <div className="deleteBtn" onClick={openfn}>
            <div id={"point1" + props.id} className="point1"></div>
            <div className="point2"></div>
            <div id={"point3" + props.id} className="point3"></div>
          </div>
          <h1 id={props.id} onClick={deletefn}>
            Delete
          </h1>
        </div>

        <div className="comment">{props.content}</div>
        <div className="actions">
          <div className="action">
            <div className="card" id="likes" onClick={action}></div>
            <p>{props.likes == 0 ? "" : props.likes}</p>
          </div>
          <div className="action">
            <div className="card" id="retweets" onClick={action}></div>
            <p>{props.retweets == 0 ? "" : props.retweets}</p>
          </div>
          <div className="action">
            <div className="card" id="hearts" onClick={action}></div>
            <p>{props.hearts == 0 ? "" : props.hearts}</p>
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
