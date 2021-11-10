import React from "react";

const PageHeader = ({ children, gradient, className }) => {
  return (
    <header
      id="page-header"
      className={`as-10 center py-5 ${className}`}
      style={{ background: `linear-gradient(45deg,${gradient})` }}
    >
      {children}
    </header>
  );
};

export default PageHeader;
