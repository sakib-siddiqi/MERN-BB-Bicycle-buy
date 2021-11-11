import React from "react";
import { Container } from "react-bootstrap";
import ButtonB from "../../../Shared/Components/Buttons/ButtonB";
const HomeBanner = () => {
  return (
    <header id="home-header">
      <Container className="center flex-column vh-min-100">
        <h1 className="display-1 fw-bold text-white mb-4">Bicycle Buy</h1>
        <ButtonB className="px-5">B.B Tour</ButtonB>
      </Container>
    </header>
  );
};

export default HomeBanner;
