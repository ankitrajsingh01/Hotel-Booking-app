import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/react";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between px-4 md:px-8 border-b 
    border-gray-300 py-3 bg-white transition-all duration-300"
    >
      <Link to="/">
        <span className="font-black text-gray-700 text-xl md:text-5xl tracking-tight">
          STAY<span className="text-[#FFCF00]">NXT</span>
        </span>
      </Link>
      <UserButton />
    </div>
  );
};

export default Navbar;
