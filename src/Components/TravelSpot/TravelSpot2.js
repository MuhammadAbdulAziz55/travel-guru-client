import React, { useEffect, useState } from "react";
import coxsbazar from "../../assets/images/cox's bazar.png";
import sreemongol from "../../assets/images/Sreemongol.png";
import sundorbon from "../../assets/images/sundorbon.png";
import sajek from "../../assets/images/Sajek.png";
import "./TravelSpot2.css";
import { Link } from "react-router-dom";
const TravelSpot2 = () => {
  const [travelSpots, setTravelSpots] = useState([]);
  useEffect(() => {
    fetch("https://travel-guru-server-mu-ten.vercel.app/travel-spot")
      .then((res) => res.json())
      .then((data) => setTravelSpots(data));
  }, []);

  return (
    <div className="travel-section">
      <h1>Most Beautiful Travel Spot</h1>

      <div className="container">
        {travelSpots.map((tSpot) => {
          return (
            <Link to={`/travel-details-info/${tSpot.id}`}>
              <div key={tSpot.id}>
                <div className="travel-items">
                  <div className="image-wrapper">
                    <img className="image" src={tSpot.img} alt="" />
                    <h2 className="image-text text-center">{tSpot.name}</h2>
                  </div>
                </div>

                {/* 
                <div className="travel-items  ">
                  <div className="image-wrapper">
                    <img className="image" src={sreemongol} alt="" />
                    <h2 className="image-text text-center">SREEMONGOL</h2>
                  </div>
                </div>

                <div className="travel-items  ">
                  <div className="image-wrapper">
                    <img className="image" src={sundorbon} alt="" />
                    <h2 className="image-text text-center">SUNDORBON</h2>
                  </div>
                </div>

                <div className="travel-items ">
                  <div className="image-wrapper">
                    <img className="image" src={sajek} alt="" />
                    <h2 className="image-text text-center">SAJEK</h2>
                  </div>
                </div> */}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TravelSpot2;
