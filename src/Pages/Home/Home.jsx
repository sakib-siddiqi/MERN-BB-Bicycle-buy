import React from "react";
import Page from "../../Shared/Page/Page";
import HomeBanner from "./Components/HomeBanner";
import HomeOverview from "./Components/HomeOverview";
import HomeReview from "./Components/HomeReview";
import HomeShop from "./Components/HomeShop";
import "./home.css";
const Home = () => {
  return (
    <Page>
      <HomeBanner />
      <HomeOverview />
      <HomeShop />
      <HomeReview />
    </Page>
  );
};

export default Home;
