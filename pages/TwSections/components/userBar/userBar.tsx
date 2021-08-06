import React from "react";
import Post from "../templates/tweetTemplate/tweetTemplate";
import { useAuth } from "../../../../context/AuthContext";
import { v4 as uuidv4 } from "uuid";

const UserBar: React.FC = () => {
  const { posts } = useAuth();
  const Filter = (e) => {
    e.target.classList.add("selected");
  };
  return (
    <div className="userMain">
      <div className="nav">
        <div className="back">
          <div className="triangle"></div>
        </div>
        <div className="info">
          <h3>Exukasu</h3>
          <p>63 Tweets</p>
        </div>
      </div>
      <div className="backgroundProfile"></div>
      <div className="profileInfo">
        <div className="row-1">
          <div className="card"></div>
          <div className="btn-outline">Edit Profile</div>
        </div>
        <div className="row-2">
          <div className="names">
            <h3>Exukasu</h3>
            <p>@ernesto145789</p>
          </div>
        </div>
        <div className="row-3">
          <p>Actually Working</p>
        </div>
        <div className="row-4">
          <div className="spacetime">
            <div className="space">
              <div className="card"></div>
              <p>Argentina</p>
            </div>
            <div className="time">
              <div className="card"></div>
              <p>Joined July 2020</p>
            </div>
          </div>
        </div>
        <div className="row-5">
          <div className="followersInfo">
            <div className="following">
              <p>12</p>
              <p>Following</p>
            </div>
            <div className="followers">
              <p>5</p>
              <p>Followers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sections">
        <p onClick={Filter}>Tweets</p>
        <p onClick={Filter}>Tweets and replies</p>
        <p onClick={Filter}>Media</p>
        <p onClick={Filter}>Likes</p>
      </div>
      {posts.length > 0
        ? posts.map((element) => (
            <Post
              userName={element.userName}
              content={element.content}
              likes={element.likes}
              retweets={element.retweets}
              hearts={element.hearts}
              createdAt={element.createdAt}
              id={element.id}
              key={uuidv4()}
            />
          ))
        : "laoding"}
    </div>
  );
};

export default UserBar;
