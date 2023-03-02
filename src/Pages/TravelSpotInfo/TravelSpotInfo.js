import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./TravelSpotInfo.css";
import ReactDatePicker from "react-datepicker";
import Navbar from "../../Components/Navbar/Navbar";

const TravelSpotInfo = () => {
  const selectedInfo = useLoaderData();
  const { title, description } = selectedInfo;

  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };
  const handleOriginChange = (e) => {
    setOrigin(e.target.value);
  };

  return (
    <div>
      <Navbar />

      {/* Travel Spot info start*/}
      <div className="grid  grid-cols-1 md:grid-cols-[2fr_1fr] mx-[15%] mt-16 ">
        <div className="text-white  ">
          <h1 className="text-7xl text-pink-700 font-bold ">{title}</h1>
          <p className="text-pink-700 font-semibold pt-4 ">{description}</p>
        </div>
        {/* Travel Spot info end*/}

        {/* Booking card section start*/}
        <div className="bg-white shadow-lg rounded-lg p-4 w-96 lg:ml-20">
          <h2 className="text-2xl font-medium mb-6 text-center">
            Book Your Next Trip
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-sm font-bold mb-2"
              htmlFor="origin"
            >
              Origin
            </label>
            <input
              className="booking placeholder: italic placeholder:text-black font-bold border border-gray-100 bg-gray-200 rounded-lg py-2 px-4 w-full "
              id="destination"
              type="text"
              value={origin}
              onChange={handleOriginChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 font-bold mb-2 text-sm"
              htmlFor="destination"
            >
              Destination
            </label>
            <input
              className="booking placeholder: italic placeholder:text-black border border-gray-100 bg-gray-200 rounded-lg py-2 px-4 w-full font-bold"
              id="destination"
              type="text"
              value={destination}
              onChange={handleDestinationChange}
            />
          </div>
          <div className="flex">
            <div className="mb-6 pr-4">
              <label
                className="block text-gray-500 font-bold mb-2 text-sm"
                htmlFor="start-date"
              >
                From
              </label>
              {/* <ReactDatePicker
              showIcon
              id="start-date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className="border border-gray-100 bg-gray-100 rounded-lg py-2 px-4 w-full"
              placeholderText="Select start date"
            /> */}
              <input
                dateFormat="dd/MM/yyyy"
                type="date"
                className="border border-gray-100 bg-gray-200 rounded-lg py-2 px-3 w-full font-bold"
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-500 font-bold mb-2 text-sm"
                htmlFor="end-date"
              >
                To
              </label>
              {/* <ReactDatePicker
              showIcon
              id="end-date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
              className="border border-gray-100 bg-gray-100 rounded-lg py-2 px-4 w-full"
              placeholderText="Select end date"
            /> */}
              <input
                type="date"
                className="border border-gray-100 bg-gray-200 rounded-lg py-2 px-3 w-full font-bold"
                onChange={(date) => setEndDate(date)}
              />
            </div>
          </div>

          <button
            className="bg-btnBooking text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 w-full cursor-pointer"
            disabled={!destination || !startDate || !endDate}
          >
            Start Booking
          </button>
        </div>
        {/* Booking card section end*/}
      </div>
    </div>
  );
};

export default TravelSpotInfo;
