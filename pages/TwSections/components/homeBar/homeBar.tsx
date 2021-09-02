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
     <div className="flex flex-col flex-1 lg:flex-initial lg:w-5/12" id="HomeBar">
          <div className="flex border-l-2 border-r-2 border-gray-200 h-16">
            <h1 className="text-xl my-auto mx-2">Home</h1>
          </div>
          <div className="grid grid-cols-profileAd grid-rows-tweetAd border-gray-200 border-2" id="tweetForm">
            <div className="row-start-1 row-end-3"><i className="fas fa-user fa-2x m-4"></i></div>
            <div className="col-span-2 row-span-1"><textarea onInput={autoGrow} name="" id="tweetArea" className="h-14 w-full resize-none outline-none overflow-hidden mt-2 text-xl font-medium" value="Hello World"></textarea></div>
            <div className="col-span-2">
              <div className="flex justify-end w-11/12 my-auto">
                <button className="rounded-full bg-blue-300 p-4  w-2/6 group hover:bg-blue-900 transition-colors"><h1 className="text-white group-hover:text-xl group-hover:text-black font-medium transition-all">Tweet</h1></button>
              </div>
            </div>
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

export default HomeBar;
