import React from "react";

const ButtonC = ({ className, children, ...rest }) => {
  return (
    <button
      {...rest}
      id="buttonC"
      className={`px-4 py-2 ls-1 my-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonC;
