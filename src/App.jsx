import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About.jsx";
import Fotter from "./components/Fotter";
import AllHotel from "./pages/AllHotel";
import HotelDetails from "./pages/HotelDetails";
import MyBookings from "./pages/MyBookings";
import HotelReg from "./components/HotelReg";
import Layout from "./pages/HotelOwner/Layout";
import DashBoard from "./pages/HotelOwner/DashBoard";
import AddRoom from "./pages/HotelOwner/AddRoom";
import ListRoom from "./pages/HotelOwner/ListRoom";
const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <HotelReg />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<AllHotel />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/owner/*" element={<Layout />}>
            <Route index element={<DashBoard />} />
            <Route path="add-room" element={<AddRoom />} />
            <Route path="list-room" element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      <Fotter />
    </div>
  );
};

export default App;
