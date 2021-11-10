import React from "react";
import { Container } from "react-bootstrap";

const Section = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={`my-5 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
