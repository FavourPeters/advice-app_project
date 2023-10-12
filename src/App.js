import React from "react";
import "./index.css";
import Desk_divider from "./images/pattern-divider-desktop.svg";
import Next from "./nextAd";

const url = "	https://api.adviceslip.com/advice";

const App = () => {
  //fetch advice using API
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // VARs
      const number = data.slip.id;
      const output = data.slip.advice;

      document.getElementById(
        "advice-no"
      ).innerHTML = `<p>ADVICE #${number}</p>`;

      document.getElementById("advice").innerHTML = `"${output}."`;
    })
    .catch((err) => {
      if (err) {
        const errMessage = document.getElementById("errorMessage");

        errMessage.classList.remove("hidden");
      }
    });
  //JSX
  return (
    <div className="relative text-white cont text-center mt-52 h-fit py-10 px-8">
      <div
        id="advice-no"
        className="advice-num"
        style={{ color: "hsl(150, 100%, 66%)" }}
      ></div>
      <div id="advice" className="m-5 advice w-fit h-fit mx-auto"></div>
      <div id="errorMessage" className="m-5 advice w-fit h-fit mx-auto hidden">
        "bad network...motivate yourself."
      </div>
      <img src={Desk_divider} alt="divider" className="pb-3" />
      <Next />
    </div>
  );
};

export default App;
