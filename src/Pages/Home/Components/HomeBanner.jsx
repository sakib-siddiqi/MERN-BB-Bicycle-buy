import React from "react";
import { Container } from "react-bootstrap";
import ButtonB from "../../../Shared/Components/Buttons/ButtonB";
const HomeBanner = () => {
  return (
    <header id="home-header" className="">
      <Container className="v-center align-items-center align-items-md-end vh-100">
        <h1 className="display-1 fw-bold text-white mb-3">Bicycle Buy</h1>
        <ButtonB className="px-5">B.B Tour</ButtonB>
      </Container>
    </header>
  );
};

export default HomeBanner;
