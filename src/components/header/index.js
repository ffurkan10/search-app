import React from "react";
import Style from "./style.module.scss";
import Button from "../button";
import cn from "classnames";

const Header = () => {
  return (
    <div className={cn("container", Style.header)}>
      <Button href={"/record"}>Add new record</Button>
    </div>
  );
};

export default Header;
