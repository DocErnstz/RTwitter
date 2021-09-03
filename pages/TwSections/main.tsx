import React, { useState, useEffect } from "react";
import OptionsBar from "../../components/optionsBar/optionsBar";
import InfoBar from "../../components/infoBar/infoBar";
import HomeBar from "../../components/homeBar/homeBar";
import Form from "../../components/form/formTweet";
import { useAuth, postData, UserData } from "../../context/AuthContext";
import Cookies from "cookies";
import jwt from "jsonwebtoken";

export async function getServerSideProps({ req, res }) {
  const resTweets = await fetch(`http://localhost:3000/api/tweets/getTweets`);
  const resUser = await fetch(`http://localhost:3000/api/users/getUsers`);
  const { tweets } = await resTweets.json();
  const { users } = await resUser.json();
  const cookies = new Cookies(req, res);
  const decodedData = jwt.decode(cookies.get("auth_token"));

  return {
    props: { users, tweets, decodedData }, // will be passed to the page component as props
  };
}

interface SubUser {
  email: String
  id: String
  name: String
}

interface MainProps{
  users: UserData[]
  tweets: postData[]
  decodedData: SubUser
}

const Main: React.FC<MainProps> = (props: MainProps) => {
  const { userI, setPosts, posts, setUsers, setUserI } = useAuth();

  useEffect(() => {
    if (posts.length == 0) {
      setPosts(props.tweets);
    }

    setUsers(props.users);
    const userData: UserData = {
      createdAt: userI.createdAt,
      email: props.decodedData.email,
      id: props.decodedData.id,
      password: userI.password,
      userName: props.decodedData.name,
      token: userI.token,
    };

    setUserI(userData);
  }, []);

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
