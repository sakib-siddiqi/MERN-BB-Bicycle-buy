import React from "react";
import "./bbtitle.css";
const BBTitle = ({ children, ClassName }) => {
  return <h3 className={`BBTitle fw-bold ${ClassName}`}>{children}</h3>;
};

export default BBTitle;
