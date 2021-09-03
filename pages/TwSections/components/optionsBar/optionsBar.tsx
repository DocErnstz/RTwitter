import React from "react";
import Link from "next/link";
import { useAuth } from "../../../../context/AuthContext";

const OptionsBar: React.FC = (props) => {
   const { logout } = useAuth();

   const ClearCookies = (e) => {
     logout();
   }
  
  const openForm = (e) => {
    const formTweet = document.getElementById("modal");
    formTweet.classList.remove("ModalHide");
  };

  return (
    <div className="flex flex-col lg:w-72 lg:flex-initial mr-4 h-screen sticky top-0 left-0">
          <div className="flex-initial mx-auto lg:ml-2 my-4 ">
            <a href=""><i className="fab fa-twitter fa-2x"></i></a>
          </div>
          
          <div className="flex-initial lg:flex-1 lg:ml-2 mb-12 items-center lg:items-start flex flex-col gap-4 ">
            <div className="flex-initial lg:flex-1 flex gap-4 rounded-full buttonHover transition-all	items-center">
              <a href="" className="flex-initial w-8 btnAnim">
               <Link href="/TwSections/main"><i className="fas fa-home fa-2x"></i></Link> 
              </a>
              <h1 className="text-xl hidden lg:block">Home</h1>
            </div>
            <div className="flex-1 flex gap-4 items-center buttonHover transition-all	 rounded-full">
              <a href="" className="flex-initial w-8 btnAnim">
              <i className="fas fa-hashtag fa-2x"></i>
            </a>
              <h1 className="text-xl hidden lg:block ">Explore</h1>
            </div>
            <div className="flex-1 flex gap-4 items-center buttonHover transition-all	 rounded-full">
              <a href="" className="flex-initial w-8 btnAnim"><i className="far fa-bell fa-2x"></i></a>
              <h1 className="text-xl hidden lg:block ">Notifications</h1>
            </div>
            <div className="flex-1 flex gap-4 items-center buttonHover transition-all	 rounded-full">
              <a href="" className="flex-initial w-8 btnAnim"><i className="far fa-envelope fa-2x"></i></a>
              <h1 className="text-xl hidden lg:block ">Messages</h1>
            </div>
            <div className="flex-1 flex gap-4 items-center buttonHover transition-all	 rounded-full">
              <a href="" className="flex-initial w-8 btnAnim"><i className="far fa-bookmark fa-2x mx-auto"></i></a>
              <h1 className="text-xl hidden lg:block ">Bookmarks</h1>
            </div>
            <div className="flex-1 flex gap-4 items-center buttonHover transition-all	 rounded-full">
              <a href="" className="flex-initial w-8 btnAnim"><i className="fas fa-list fa-2x"></i></a>
              <h1 className="text-xl hidden lg:block ">Lists</h1>
            </div>
            <div className="flex-1 flex gap-4 items-center buttonHover transition-all	 rounded-full">
              <a href="" className="flex-initial w-8 btnAnim"><i className="far fa-user fa-2x"></i></a>
              <h1 className="text-xl hidden lg:block "> <Link href="/TwSections/userMain">Profile</Link></h1>
            </div>
            <div className="flex-1 flex gap-4 items-center buttonHover transition-all	 rounded-full">
              <a href="" className="flex-initial w-8 btnAnim"><i className="far fa-comment-dots fa-2x"></i></a>
              <h1 className="text-xl hidden lg:block ">More</h1>
            </div>
           
          </div>
 
          <button type="button" id="TweetModal" className="relative bg-blue-300 lg:p-6 lg:py-3 lg:w-4/5 my-4 lg:my-0 rounded-full mt-7 cursor-pointer transition-all group btnAnim hover:bg-blue-900" onClick={openForm}>
           
              <h1 className="font-medium hidden lg:block text-white group-hover:text-black group-hover:text-xl transition-all">Tweet</h1>
              <div className="block lg:hidden">
                <i className="fas fa-feather-alt fa-2x"></i>
              </div>
              
            
          </button>
           <button type="button" className="relative bg-blue-300 lg:p-6 lg:py-3 lg:w-4/5 my-4 lg:my-0 rounded-full mt-7 cursor-pointer transition-all btnAnim group hover:bg-blue-900" onClick={ClearCookies}>
           
              <h1 className="font-medium hidden lg:block text-white group-hover:text-black group-hover:text-xl transition-all">Logout</h1>
              <div className="block lg:hidden">
                <i className="fas fa-feather-alt fa-2x"></i>
              </div>
              
            
          </button>
          <div className="flex-1 flex flex-col lg:ml-2 justify-end">
            <div className="grid grid-cols-1 lg:grid-cols-profileAd  grid-rows-2">
              <div className="row-start-1 row-end-3">
                <i className="fas fa-user fa-2x m-4"></i>
              </div>
              <div className="col-span-2 hidden lg:block">{props.user.userName}</div>
              <div className="col-span-2 hidden lg:block">{"@" + props.user.userName + "467"}</div>
            </div>
          </div>
        </div>
  );
};

export default OptionsBar;
