import React from "react";
import Style from "./style.module.scss";
import cn from "classnames";
import Button from "../button";
import { useEffect } from "react";

const Input = ({
  results,
  icons,
  type = "text",
  value,
  placeholder,
  onChange,
  label,
  isform,
  handleSearch,
  error,
}) => {
  const handlerOnChange = (e) => {
    onChange?.(e);
  };

  useEffect(() => {}, [error]);

  return (
    <div
      className={cn(
        Style.input,
        isform && Style.isForm,
        results && Style.results
      )}
    >
      {icons && <div className={Style.icon}>{icons}</div>}
      {!!label && <label className={!!error && Style.hasError}>{label}</label>}
      <input
        type={type}
        className={cn(Style.input, !!error && Style.errorInput)}
        value={value}
        onChange={
          handleSearch ? handleSearch : (e) => handlerOnChange(e.target.value)
        }
        placeholder={placeholder}
      />
      {results && <Button>Search</Button>}
    </div>
  );
};

export default Input;
