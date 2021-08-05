import React, { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import { Prisma } from "@prisma/client";

const Form = (props) => {
  const { setterPosts, userI } = useAuth();
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
  const openForm = (e) => {
    const formTweet = document.getElementById("formTweet");
    formTweet.classList.add("hide");
  };

  const autoGrow = (e) => {
    e.target.style.height = "50px";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
    <div id="formTweet" className="formTweet hide">
      <div className="options">
        <div className="cross" onClick={openForm}>
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
      <div className="tweetForm">
        <div className="tweet">
          <div className="profileCard"></div>
          <form action="" onSubmit={onSubmit}>
            <textarea
              onInput={autoGrow}
              rows={30}
              cols={30}
              onChange={handleChange}
              value={String(text)}
            />
            <div className="items">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>

            <input type="submit" className="btn-outline" value="Tweet" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
