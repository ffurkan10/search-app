import React from "react";
import Style from "./style.module.scss";
export default function Divider({ list }) {
  return (
    <div className={Style.Divider} aria-label="Divider">
      {/* <div className="container"> */}
      {/* <div className="divider-container"> */}
      <hr className="hr" />
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
