import React from "react";
import coxsbazar from "../../assets/images/cox's bazar.png";
import sreemongol from "../../assets/images/Sreemongol.png";
import sundorbon from "../../assets/images/sundorbon.png";
import sajek from "../../assets/images/Sajek.png";

import "./TravelSpot.css";
const TravelSpot = () => {
  return (
    <div className="grid grid-cols-4 gap-0 mx-20">
      <div className="image-wrapper  ">
        <img className="image" src={coxsbazar} alt="" />
        <h2 className="image-text text-center">COX'S BAZAR</h2>
      </div>
      <div className="image-wrapper  ">
        <img className="image" src={sreemongol} alt="" />
        <h2 className="image-text text-center">SREEMONGOL</h2>
      </div>
      <div className="image-wrapper  ">
        <img className="image" src={sundorbon} alt="" />
        <h2 className="image-text text-center">SUNDORBON</h2>
      </div>
      <div className="image-wrapper ">
        <img className="image" src={sajek} alt="" />
        <h2 className="image-text text-center">SAJEK</h2>
      </div>
    </div>
  );
};

export default TravelSpot;
