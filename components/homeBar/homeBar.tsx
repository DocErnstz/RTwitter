import React, { useState } from "react";
import Post from "../templates/tweetTemplate/tweetTemplate";
import { useAuth } from "../../context/AuthContext";
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
    console.log(e.target.scrollHeight);
  };

  return (
       <div className="flex flex-col flex-1 lg:flex-initial lg:w-5/12" id="HomeBar">
          <div className="flex border-l-2 border-r-2 border-gray-200 h-16">
            <h1 className="text-xl my-auto mx-2">Home</h1>
          </div>
          <form onSubmit={onSubmit} className="grid grid-cols-profileAd w-full grid-rows-tweetAd border-gray-200 border-2" id="tweetForm">
            <div className="row-start-1 row-end-3 mb-auto mx-auto mt-2"><i className="fas fa-user fa-2x"></i></div>
            <div className="col-span-2 row-span-1"><textarea onInput={autoGrow}  onChange={handleChange} name="" id="tweetArea" className="h-32 w-full resize-none outline-none overflow-hidden mt-2 text-xl font-medium">Whats Happenning</textarea></div>
            <div className="col-span-2">
              <div className="flex justify-end w-11/12 my-auto">
                <button className="rounded-full bg-blue-300 p-4  w-2/6 group hover:bg-blue-900 transition-colors btnAnim"><input type="submit" className="text-white  bg-transparent group-hover:text-xl cursor-pointer group-hover:text-black font-medium transition-all" value="Tweet" /></button>
              </div>
            </div>
          </form>
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

export default HomeBar;
