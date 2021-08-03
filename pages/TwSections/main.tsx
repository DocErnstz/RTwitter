import React, { useState } from "react";
import OptionsBar from "./components/optionsBar/optionsBar";
import InfoBar from "./components/infoBar/infoBar";
import HomeBar from "./components/homeBar/homeBar";
import { useAuth } from "../../context/AuthContext";

const Main: React.FC = () => {
  const { userI } = useAuth();

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
