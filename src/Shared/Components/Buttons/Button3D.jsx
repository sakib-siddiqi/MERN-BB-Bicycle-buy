import React from "react";

const Button3D = ({ children, className, ...rest }) => {
  return (
    <button
      {...rest}
      id="button3D"
      className={`px-3 py-1 ls-1 my-btn ${className}`}
    >
      {children}
    </button>
  );
};

export default Button3D;
