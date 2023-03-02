import React, { useContext, useState } from "react";
import logo from "../../assets/logo/logoFinal2.png";
import { FiSearch } from "react-icons/fi";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import SearchHotelsInfo from "../Search/SearchHotelsInfo";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [hotelsInfo, setHotelsInfo] = useState("");

  const handleSearchInput = (event) => {
    const data = event.target.value;
    console.log(data);
    setHotelsInfo(data);
  };

  return (
    <header className="">
      <div>
        {/* logo section */}
        <Link to="/">
          <img
            className="h-12 w-24
          "
            style={{ background: "", color: "#fff" }}
            src={logo}
            alt=""
          />
          {/* <div className="text-3xl text-white">
            Trave<span className="text-red-700">l</span> Guru
          </div> */}
        </Link>
      </div>
      <div className="search-bar ">
        <FiSearch className="text-white mr-2" />
        <input
          type="text"
          placeholder="Search Your Destination..."
          className=""
          onChange={handleSearchInput}
          value={hotelsInfo}
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {user?.uid ? (
            <>
              <Link to="/logout">
                <span className="text-white font-bold">
                  {user?.displayName}
                </span>
              </Link>
              {/* <button onClick={handleLogOut} className="login">
            Log out
          </button> */}
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>

    // <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
    //   <div className="flex items-center flex-shrink-0 text-white mr-6">
    //     <img className="h-8 w-8 mr-2" src="/path/to/logo.png" alt="Logo" />
    //     <span className="font-semibold text-xl tracking-tight">
    //       Company Name
    //     </span>
    //   </div>
    //   <div className="flex-grow flex items-center w-auto">
    //     <div className="w-full">
    //       <div className="relative">
    //         <input
    //           className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
    //           type="search"
    //           name="search"
    //           placeholder="Search"
    //         />
    //         <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
    //           Search
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <a
    //       href="/"
    //       className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
    //     >
    //       Page 1
    //     </a>
    //     <a
    //       href="/"
    //       className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
    //     >
    //       Page 2
    //     </a>
    //     <a
    //       href="/"
    //       className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
    //     >
    //       Page 3
    //     </a>
    //     <a
    //       href="/"
    //       className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4"
    //     >
    //       Page 4
    //     </a>
    //     <button className="inline-block mt-4 lg:mt-0 text-white px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700">
    //       Login
    //     </button>
    //   </div>
    // </nav>
  );
};

export default Navbar;
