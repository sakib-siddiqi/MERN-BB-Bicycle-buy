import React from "react";

const ButtonB = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      id="buttonB"
      className={`px-4 py-2 ls-1 my-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonB;
