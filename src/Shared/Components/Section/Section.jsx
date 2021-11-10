import React from "react";
import { Container } from "react-bootstrap";

const Section = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={`${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
