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
    <div className="grid grid-cols-tweet grid-rows-4 border-l-2 border-r-2 border-b-2 border-white">
            <div className=" row-start-1 row-end-5">
              <i className="fas fa-user fa-2x m-4"></i>
            </div>
            <div className=" col-span-4"><div className="flex h-full text-center">
              <h1 className="h-3/6 my-auto">Ernesto Mercado</h1>
            </div></div>
            <div className="col-span-4 row-span-2"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, consequatur asperiores expedita provident qui deleniti. Ad harum facilis dolorum iure, corrupti itaque aperiam unde? Dicta cupiditate corporis dolorum quod iste.</p></div>
            <div className="col-span-4">
              <div className="flex my-2">
                <div className="flex flex-1 items-center">
                  <a href="" className="mr-2">
                   <i className="far fa-comment fa-2x"></i>
                  </a>
                  <h1>11</h1>
                </div>
                 <div className="flex flex-1 items-center">
                  <a href="" className="mr-2">
                   <i className="fas fa-retweet fa-2x"></i>
                  </a>
                  <h1>11</h1>
                </div>
                 <div className="flex flex-1 items-center">
                  <a href="" className="mr-2">
                   <i className="far fa-heart fa-2x"></i>
                  </a>
                  <h1>11</h1>
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
