import React from "react";
import Carousel from "./pageComp/Carousel";
import InfoCards from "./pageComp/InfoCards";

const Home = () => {
  return (
    <div className="home-container">
      <Carousel />
      <InfoCards />
    </div>
  );
};

export default Home;
