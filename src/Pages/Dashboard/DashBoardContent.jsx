import React from "react";
import { Container } from "react-bootstrap";

const DashBoardContent = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default DashBoardContent;
