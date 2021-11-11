import React from "react";

const DashTitle = ({ children, className, text, bg, ...rest }) => {
  return (
    <header
      {...rest}
      className={`py-5 center ${className}`}
      style={{ background: bg }}
    >
      <h4 className={`text-${text} fw-md bg-glass p-2 rounded-3 shadow-sm`}>
        {children}
      </h4>
    </header>
  );
};

export default DashTitle;
