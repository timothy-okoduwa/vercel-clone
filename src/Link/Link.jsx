import React from "react";
import "./Link.css";
import s from "./source.png";
const Link = () => {
  return (
    <div className="name">
      <div className="works">WORKS WITH 30+ JAMSTACK FRAMEWORKS</div>
      <div className="while">
        <img src={s} alt="img" />
      </div>
    </div>
  );
};

export default Link;
