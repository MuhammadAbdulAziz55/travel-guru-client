import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";

const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <>
      <Navbar />
      <div className="flex  justify-center items-center align-middle">
        <button onClick={handleLogOut} className="login ">
          Log out
        </button>
      </div>
    </>
  );
};

export default LogOut;
