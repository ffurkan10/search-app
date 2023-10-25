import React, { useEffect } from "react";
import Style from "./style.module.scss";

export default function FormErrorMessages({ error }) {
  useEffect(() => {}, [error]);
  return (
    <div className="form-error-messages">
      <ul>
        {error?.type === "required" && (
          <li className="item error">{error.message || "Bu alan zorunlu!"}</li>
        )}
        {error?.type === "minLength" && (
          <li className="item error">
            {error.message || "Geçerli bir değer girdiniz!"}
          </li>
        )}
        {error?.type === "pattern" && (
          <li className="item error">
            {error.message || "Geçerli bir değer girdiniz!"}
          </li>
        )}
        {error?.type === "validate" && (
          <li className="item error">
            {error.message || "Geçerli bir değer girdiniz!"}
          </li>
        )}
      </ul>
    </div>
  );
}
