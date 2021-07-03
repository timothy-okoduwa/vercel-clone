import React, { useState, useEffect, useRef } from "react";
import "./HeaderScreen.css";

const HeaderScreen = () => {
  const textcolor = useRef();
  const textcolor1 = useRef();
  const textcolor2 = useRef();
  const [counter, setCounter] = useState(0);
  const mycolor = ["blue", "black", "black"];
  const mycolor1 = ["black", "tomato", "black"];
  const mycolor2 = ["black", "black", "purple"];
  useEffect(() => {
    textcolor.current.style.color = mycolor[counter % mycolor.length];
    textcolor.current.style.transition = "all 350ms";
    textcolor1.current.style.color = mycolor1[counter % mycolor.length];
    textcolor1.current.style.transition = "all 350ms";
    textcolor2.current.style.color = mycolor2[counter % mycolor.length];
    textcolor2.current.style.transition = "all 350ms";
  }, [counter]);
  useEffect(() => {
    setInterval(() => {
      setCounter((el) => el + 1);
    }, 3000);
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        {/* <div>{counter}</div> */}
        <div className="text1" ref={textcolor}>
          Develope.
        </div>
        <div className="text2" ref={textcolor1}>
          Preview.
        </div>
        <div className="text3" ref={textcolor2}>
          Ship.
        </div>
        <div className="buttons">
          <div className="start">Start Deploying</div>
          <div className="get">Get a Demo</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderScreen;
