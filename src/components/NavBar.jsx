import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      <Link to="/">
        <span className="text-xl font-semibold tracking-widest lg:text-2xl xl:text-3xl 2xl:text-4xl text-newblue">
          SPACETAGRAM
        </span>
      </Link>
      <Link to="/Today">
        <span className="text-xs font-medium md:text-base lg:text-xl 2xl:text-2xl hover:text-newblue">
          Today's APOD
        </span>
      </Link>
    </div>
  );
};

export default NavBar;
