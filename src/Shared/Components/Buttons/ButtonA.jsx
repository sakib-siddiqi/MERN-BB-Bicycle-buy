import React from "react";
import "./Buttons.css";
const ButtonA = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      id="buttonA"
      className={`px-4 py-2 ls-1 my-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonA;
