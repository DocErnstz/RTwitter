import React, { useState } from "react";
import OptionsBar from "./components/optionsBar/optionsBar";
import InfoBar from "./components/infoBar/infoBar";
import HomeBar from "./components/homeBar/homeBar";
import { useAuth, postData } from "../../context/AuthContext";

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/tweets/getTweets`);
  const { tweets } = await res.json();

  return {
    props: { tweets }, // will be passed to the page component as props
  };
}

const Main: React.FC = (props) => {
  const { userI, setPosts, posts } = useAuth();

  if (posts.length == 0) {
    setPosts(props.tweets);
  }

  return (
    <>
      <div className="flex-bars">
        <OptionsBar user={userI} />
        <HomeBar />
        <InfoBar />
      </div>
    </>
  );
};
export default Main;
