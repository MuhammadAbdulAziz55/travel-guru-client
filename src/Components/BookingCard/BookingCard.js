import React, { useState } from "react";
import { ReactDatePicker } from "react-datepicker";

const BookingCard = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg px-6 py-8">
        <h2 className="text-2xl font-medium mb-6">Book Your Next Trip</h2>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="destination"
          >
            Destination
          </label>
          <input
            className="border border-gray-400 rounded-lg py-2 px-4 w-full"
            id="destination"
            type="text"
            placeholder="Where do you want to go?"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="start-date"
          >
            Start Date
          </label>
          <ReactDatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="border border-gray-400 rounded-lg py-2 px-4 w-full"
            placeholderText="Select start date"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="end-date"
          >
            End Date
          </label>
          <ReactDatePicker
            id="end-date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
            className="border border-gray-400 rounded-lg py-2 px-4 w-full"
            placeholderText="Select end date"
          />
        </div>
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={!destination || !startDate || !endDate}
        >
          Book Now
        </button>
      </div>
    </>
  );
};

export default BookingCard;
