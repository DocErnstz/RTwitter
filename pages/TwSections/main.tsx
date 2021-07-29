import React, { useState } from "react";
import OptionsBar from "./components/optionsBar/optionsBar";
import InfoBar from "./components/infoBar/infoBar";
import HomeBar from "./components/homeBar/homeBar";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex-bars">
        <OptionsBar />
        <HomeBar />
        <InfoBar />
      </div>
    </>
  );
};
export default Main;
