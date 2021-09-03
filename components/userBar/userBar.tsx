import React from "react";
import Post from "../templates/tweetTemplate/tweetTemplate";
import { useAuth } from "../../context/AuthContext";
import { v4 as uuidv4 } from "uuid";
import { UserData } from "../../context/AuthContext";


interface UserProps{
  user: UserData
}

const UserBar: React.FC<UserProps> = ({ user }: UserProps) => {
  const { posts } = useAuth();
  const Filter = (e) => {
    e.target.classNameList.add("selected");
  };
  return (
    <div className="flex flex-col  flex-1 lg:flex-initial lg:w-5/12 border-white border-l-2  border-r-2" id="UserBar">
             <div className="flex">
               <div className="p-4"><i className="fas fa-arrow-left"></i></div>
               <div className="flex flex-col flex-1">
                 <h3 className="text-gray-600">{user.userName}</h3>
                  <p className="text-gray-600">99 Tweets</p>
               </div>
             </div>
             <div className="flex items-end h-56 bg-gray-600">
               <div className="border-black flex items-center justify-center border-8 w-32 h-32 ml-4 -mb-12 rounded-full">
                 <i className="fas fa-user fa-5x mx-auto mt-4"></i>
               </div>
               
             </div>
             <div className="ml-auto">
               <button className="rounded-full border-white text-white border-2 p-2 m-2 font-mono font-medium">Edit Profile</button>
             </div>
             <div className="w-11/12   mx-auto">
              <div className="flex-column">
               <h2 className="text-gray-600">{user.userName}</h2>
               <p className="text-gray-600">{"@" + user.userName + "467"}</p>
             </div>
             <p>on my way to become a SWE</p>
             <div className="flex ">
               <div className="flex items-center">
                 <i className="fas fa-map-marker-alt fa-2x"></i>
                 <h3 className="p-3">Argentina</h3>
               </div>
               <div className="flex items-center">
                 <i className="far fa-calendar fa-2x"></i>
                 <h3 className="p-3">1 June</h3>
               </div>
             </div>
             </div>
             <div className="flex text-center" id="TweetSections">
               <div className="flex-grow p-3 relative text-white ">Tweet</div>
              <div className="flex-grow p-3 relative text-white">Replies</div>
                <div className="flex-grow p-3 relative text-white">Media</div>
                <div className="flex-grow p-3 relative text-white">Likes</div>
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
