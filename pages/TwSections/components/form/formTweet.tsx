import React, { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import { Prisma } from "@prisma/client";

const Form = (props) => {
  const { setterPosts, userI } = useAuth();
  const [text, settext] = useState<String>("");
  console.log(userI.userName);

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
    closeForm();
  };
  const closeForm = () => {
    const formTweet = document.getElementById("modal");
    formTweet.classList.add("ModalHide");
  };

  const autoGrow = (e) => {
    e.target.style.height = "50px";
    e.target.style.height = e.target.scrollHeight + "px";
  };
  return (
   <div id="modal" className="bg-gray-700 fixed w-96 left-96 ModalHide rounded-2xl transition-all">
         <button className="flex p-5" id="crossDelete" onClick={closeForm}>
            <i className="fas fa-times fa-2x"></i>
         </button>
        <form onSubmit={onSubmit} className="grid grid-cols-profileAd grid-rows-tweetAd rounded-2xl" id="tweetForm">
         
            <div className="row-start-1 row-end-3 mb-auto"> <i className="fas fa-user fa-2x m-4"></i></div>
            <div className="col-span-2 row-span-1"><textarea onInput={autoGrow} name="" id="tweetArea" className="h-32 w-full resize-none outline-none overflow-hidden mt-2 bg-gray-700 text-xl font-medium">Whats Happening</textarea></div>
            <div className="col-span-2">
              <div className="flex justify-end w-11/12 my-auto">
                <button className="rounded-full bg-blue-300 p-4  w-2/6 group hover:bg-blue-900 transition-colors"><input type="submit" className="text-white group-hover:text-xl bg-transparent cursor-pointer group-hover:text-black font-medium transition-all" value="Tweet"/></button>
              </div>
            </div>
          </form>
      </div>
  );
};

export default Form;
