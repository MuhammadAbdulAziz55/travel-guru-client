import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Main;
