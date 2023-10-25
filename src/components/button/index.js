import React from "react";
import Style from "./style.module.scss";
import { Link } from "react-router-dom";
import cn from "classnames";

const Button = ({ children, href, disabled, onClick }) => {
  return (
    <>
      {href ? (
        <Link
          className={cn(Style.button, disabled && Style.disabledButton)}
          to={href}
        >
          <a href={Style.linkHref}>{children}</a>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={cn(Style.button, disabled && Style.disabledButton)}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
