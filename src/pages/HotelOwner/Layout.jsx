import React from "react";
import Navbar from "../../components/HotelOwner/Navbar";
import Sidebar from "../../components/HotelOwner/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 h-full overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-4 pt-10 md:px-10 h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
