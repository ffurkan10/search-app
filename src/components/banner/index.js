import React from "react";
import Style from "./style.module.scss";

const Banner = ({ text, image }) => {
  return (
    <div className="container">
      <div className={Style.banner}>
        <div className={Style.image}>
          <img src={image} alt="logo" />
        </div>
        <div className={Style.text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
