import React from "react";

import Navbar from "../../Components/Navbar/Navbar";

import "./Home.css";
import TravelSpot2 from "../../Components/TravelSpot/TravelSpot2";

const Home = () => {
  return (
    <div className="background-img">
      <Navbar />

      <div className="parent">
        <TravelSpot2 className="child" />
      </div>
    </div>
  );
};

export default Home;
