import React, { useState } from "react";
import OptionsBar from "./components/optionsBar/optionsBar";
import InfoBar from "./components/infoBar/infoBar";
import UserBar from "./components/userBar/userBar";
import { useAuth } from "../../context/AuthContext";

const userMain: React.FC = () => {
  const { userI } = useAuth();

  return (
    <>
      <div className="flex-bars">
        <OptionsBar user={userI} />
        <UserBar />
        <InfoBar />
      </div>
    </>
  );
};
export default userMain;
