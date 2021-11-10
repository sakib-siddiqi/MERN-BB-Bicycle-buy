import React from "react";

const PageHeader = ({ children, gradient, className }) => {
  return (
    <div
      id="page-header"
      className={`center py-5  ${className}`}
      style={{ background: `linear-gradient(45deg,${gradient})` }}
    >
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default PageHeader;
