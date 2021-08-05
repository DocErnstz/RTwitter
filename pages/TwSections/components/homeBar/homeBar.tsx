import React, { useState } from "react";
import Post from "../templates/tweetTemplate/tweetTemplate";
import { useAuth } from "../../../../context/AuthContext";
import { Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const HomeBar: React.FC = (props) => {
  const { posts, setterPosts, userI } = useAuth();
  const [text, settext] = useState<String>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    settext(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tweetForm: Prisma.TweetCreateInput = {
      userName: String(userI.userName),
      content: String(text),
      likes: 0,
      retweets: 0,
      hearts: 0,
    };
    setterPosts(tweetForm);
    settext("");
  };

  const autoGrow = (e) => {
    e.target.style.height = "50px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="main">
      <div className="header">
        <h3>Home</h3>
      </div>
      <div className="tweet">
        <div className="card"></div>
        <form action="" onSubmit={onSubmit}>
          <textarea
            onInput={autoGrow}
            rows={30}
            cols={30}
            onChange={handleChange}
            value={String(text)}
          />

          <input type="submit" className="btn-outline" value="Tweet" />
        </form>
      </div>
      <div className="posts">
        {posts.length > 0
          ? posts.map((element) => (
              <Post
                userName={element.userName}
                content={element.content}
                likes={element.likes}
                retweets={element.retweets}
                hearts={element.hearts}
                createdAt={element.createdAt}
                id={uuidv4()}
                key={uuidv4()}
              />
            ))
          : "laoding"}
      </div>
    </div>
  );
};

export default HomeBar;
