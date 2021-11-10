import React from "react";
import Page from "../../Shared/Page/Page";
import HomeBanner from "./Components/HomeBanner";
import HomeOverview from "./Components/HomeOverview";
import "./home.css";
const Home = () => {
  return (
    <Page>
      <HomeBanner />
      <HomeOverview />
    </Page>
  );
};

export default Home;
