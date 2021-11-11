import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Page = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Page;
