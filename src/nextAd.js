import React from "react";
import "./index.css";
import Dice from "./images/icon-dice.svg";

const nextAd = () => {
  //Reload
  const reload = () => {
    return window.location.reload();
  };
  return (
    <div className="w-full flex justify-center" onClick={reload}>
      <div className="shape grid place-content-center">
        <img src={Dice} alt="dice" />
      </div>
    </div>
  );
};

export default nextAd;
