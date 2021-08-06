import React, { useState } from "react";
import OptionsBar from "./components/optionsBar/optionsBar";
import InfoBar from "./components/infoBar/infoBar";
import HomeBar from "./components/homeBar/homeBar";
import Form from "./components/form/formTweet";
import { useAuth, postData } from "../../context/AuthContext";

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/tweets/getTweets`);
  const resUser = await fetch(`http://localhost:3000/api/users/getUsers`);
  const { tweets } = await res.json();
  const { users } = await resUser.json();

  return {
    props: { users, tweets }, // will be passed to the page component as props
  };
}

const Main: React.FC = (props) => {
  const { userI, setPosts, posts, setUsers } = useAuth();

  if (posts.length == 0) {
    setPosts(props.tweets);
  }
  setUsers(props.users);

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
