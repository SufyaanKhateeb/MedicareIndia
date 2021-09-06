import React from "react";
import Carousel from "./pageComp/Carousel";
import DataCard from "../DataCard";

const Home = () => {
  return (
    <div className="home-container">
      <Carousel />
      {/* <div style={{margin:"1% 2%"}}>
        <DataCard />
      </div> */}
    </div>
  );
};

export default Home;
