import React from "react";
import Post from "../templates/tweetTemplate/tweetTemplate";
import { useAuth } from "../../../../context/AuthContext";
import { v4 as uuidv4 } from "uuid";

const UserBar: React.FC = (props) => {
  const { posts } = useAuth();
  const Filter = (e) => {
    e.target.classNameList.add("selected");
  };
  return (
    <div className="flex flex-col  flex-1 lg:flex-initial lg:w-5/12 border-white border-l-2  border-r-2" id="UserBar">
             <div className="flex">
               <div className="p-4"><i className="fas fa-arrow-left"></i></div>
               <div className="flex flex-col flex-1">
                 <h3 className="text-gray-600">{props.user.userName}</h3>
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
               <h2 className="text-gray-600">{props.user.userName}</h2>
               <p className="text-gray-600">{"@" + props.user.userName + "467"}</p>
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
             <div className="grid grid-cols-tweet grid-rows-4 border-t-2 border-white">
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
           <div className="grid grid-cols-tweet grid-rows-4 border-t-2 border-white">
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
        </div>
  );
};

export default UserBar;
