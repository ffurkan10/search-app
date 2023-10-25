import React from "react";
import Style from "./style.module.scss";
import cn from "classnames";

const Card = ({ image, title, desc, isSwiper }) => {
  return (
    <div className={cn(Style.card, isSwiper && Style.swiperCard)}>
      <div className={Style.imageBox}>
        <img src={image} alt="news" />
      </div>
      <div className={Style.text}>
        <p>{title}</p>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Card;
