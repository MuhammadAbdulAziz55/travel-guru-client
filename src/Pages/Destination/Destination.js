import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/Search/SearchBar";
import SearchHotelsInfo from "../../Components/Search/SearchHotelsInfo";

const Destination = () => {
  return (
    <div className="bg-white">
      <Navbar />

      <SearchHotelsInfo />
    </div>
  );
};

export default Destination;
