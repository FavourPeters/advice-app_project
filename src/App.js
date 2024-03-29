import React from "react";
import "./index.css";
import Desk_divider from "./images/pattern-divider-desktop.svg";
import Next from "./nextAd";
import Dropdown from "./dropdown";
import { useState, useEffect } from "react";

//External API
const url = "	https://api.adviceslip.com/advice";

const App = () => {
  const [advice, setAdvice] = useState("");

  //fetch advice using API
  fetch(url);
  // Now using Async/Await
  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      // VARs
      const number = data.slip.id;
      const output = data.slip.advice;

      document.getElementById(
        "advice-no"
      ).innerHTML = `<p>ADVICE #${number}</p>`;
      //useState function
      setAdvice((document.getElementById("advice").innerHTML = `"${output}."`));
      if (!resp.ok) {
        throw new Error("Failed to fetch Advice");
      }
      //copyText
      const copybtn = document.querySelector(".copybtn");

      copybtn.addEventListener("click", () => {
        navigator.clipboard.writeText(output);

        const drop = document.querySelector(".c-text_dropdown");
        drop.classList.remove("hidden");
        setTimeout(() => {
          drop.classList.add("hidden");
        }, 10000);
      });
    } catch (error) {
      if (error) {
        const errMessage = document.getElementById("errorMessage");

        setAdvice(errMessage.classList.remove("hidden"));
      }
    }
  };
  useEffect(() => {
    fetchData();

    //Formerly the then/catch methods
    // .then((resp) => resp.json())
    // .then((data) => {
    //   // VARs
    //   const number = data.slip.id;
    //   const output = data.slip.advice;

    //   document.getElementById(
    //     "advice-no"
    //   ).innerHTML = `<p>ADVICE #${number}</p>`;
    //   //useState function
    //   setAdvice(
    //     (document.getElementById("advice").innerHTML = `"${output}."`)
    //   );

    //   //copyText
    //   const copybtn = document.querySelector(".copybtn");

    //   copybtn.addEventListener("click", () => {
    //     navigator.clipboard.writeText(output);

    //     const drop = document.querySelector(".c-text_dropdown");
    //     drop.classList.remove("hidden");
    //     setTimeout(() => {
    //       drop.classList.add("hidden");
    //     }, 10000);
    //   });
    // })
    // .catch((err) => {
    //   if (err) {
    //     const errMessage = document.getElementById("errorMessage");

    //     setAdvice(errMessage.classList.remove("hidden"));
    //   }
    // });
  }, []);

  const handleClick = () => {
    fetchData();
  };

  //JSX
  return (
    <div className="center">
      <div className="relative text-white cont text-center h-fit py-10 px-8">
        <Dropdown />
        <div
          //inline styling
          id="advice-no"
          className="advice-num"
          style={{ color: "hsl(150, 100%, 66%)" }}
        ></div>
        <div id="advice" className="m-5 advice w-fit h-fit mx-auto">
          {advice}
        </div>
        <div
          id="errorMessage"
          className="m-5 advice w-fit h-fit mx-auto hidden"
        >
          "bad network...motivate yourself."
        </div>
        <img src={Desk_divider} alt="divider" className="pb-3" />
        <button className="copybtn px-2 font-semibold" type="button">
          copy
        </button>
        <Next handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
