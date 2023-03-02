import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const center = { lat: 48.8584, lng: 2.2945 };

const SearchHotelsInfo = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    fetch("https://travel-guru-server-mu-ten.vercel.app/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data));
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  return (
    <div className="mx-[15%] mt-10">
      <h3 className="text-center text-green-800">{hotels.title}</h3>

      {/* .........hotel info section start......... */}
      <div className="flex">
        <div className=" basis-[58%] mr-20">
          {/* image part */}
          {hotels.map((hotel) => {
            return (
              <div className="flex mb-8">
                <div className="mr-4">
                  <img className="w-60" src={hotel.img} alt="hotel" />
                </div>
                <div>
                  <div className="text-lg font-semibold pb-2">
                    {hotel.room_title}
                  </div>
                  <p className="text-sm text-gray-600">{hotel.room_Info}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* .........hotel info section end......... */}

        {/* map section start */}
        <div className="basis-2/5 ">
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{
              width: "350px",
              height: "465px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      {/* map section end */}
    </div>
  );
};

export default SearchHotelsInfo;
