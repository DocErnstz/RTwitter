import React from "react";
import { useAuth } from "../../../context/AuthContext";

const Post = (props) => {
  const { setPosts, posts } = useAuth();
  const openfn = (e) => {
    document.getElementById(props.id).classList.toggle("show");
    document.getElementById("point1" + props.id).classList.toggle("fusion1");
    document.getElementById("point3" + props.id).classList.toggle("fusion3");
  };
  const deletefn = async (e) => {
    const response = await fetch(
      `${window.location.origin}/api/tweets/deleteTweet/${props.id}`,
      {
        method: "PATCH",
      }
    );

    const newTweets = await response.json();
    setPosts(newTweets.tweets);
  };
  const action = async (id: String) => {
    console.log(id);
    const response = await fetch(
      `${window.location.origin}/api/tweets/actionTweet/${props.id}`,
      {
        method: "PUT",
        body: JSON.stringify({ updateProp: id }),
      }
    );

    const newTweets = await response.json();
    setPosts(newTweets.tweets);
  };

  return (
    <div className="flex">
      <div className="flex">
        <i className="fas fa-user fa-2x m-4"></i>
      </div>
      <div className="flex flex-col flex-1">
          <h1 className="h-3/6 my-auto">{props.userName}</h1>
          <p>{props.content}</p>
          <div className="flex my-2">
                <div className="flex flex-1 items-center">
                  <a href="" className="mr-2">
                   <i className="far fa-comment fa-2x"></i>
                  </a>
                  <h1>11</h1>
                </div>
                 <div className="flex flex-1 items-center">
                  <div className="mr-2 rounded-full btnAnim" onClick={() => action("retweets")}>
                   <i className="fas fa-retweet fa-2x" id="retweets"></i>
                  </div>
                  <h1>{props.retweets}</h1>
                </div>
                 <div className="flex flex-1 items-center">
                  <div className="mr-2 rounded-full btnAnim" onClick={() => action("likes")}>
                   <i className="far fa-heart fa-2x" id="likes" ></i>
                  </div>
                  <h1>{props.likes}</h1>
                </div>
                 <div className="flex flex-1 items-center">
                  <a href="" className="mr-2">
                   <i className="fas fa-upload fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
      </div>
 
         
  );
};

export default Post;
