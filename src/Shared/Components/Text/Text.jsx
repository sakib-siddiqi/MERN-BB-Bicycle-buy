import React from "react";

const Text = ({ children, className, ...rest }) => {
  return (
    <p {...rest} className={`text-secondary lh-base ${className}`}>
      {children}
    </p>
  );
};

export default Text;
