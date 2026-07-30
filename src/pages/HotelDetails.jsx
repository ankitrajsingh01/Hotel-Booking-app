import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  roomCommonData,
  roomsDummyData,
  assets,
  facilityIcons,
} from "../assets/assets";

const HotelDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");
  const [selectedRooms, setSelectedRooms] = useState("1 Room");

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    if (room) {
      setRoom(room);
      setMainImage(room.images[0]);
    }
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Check availability", {
      checkIn,
      checkOut,
      guests,
      selectedRooms,
    });
  };

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="text-center text-gray-600">
          <p className="text-xl font-semibold">Loading hotel details...</p>
          <p className="mt-2 text-sm">
            Please wait while we load the room information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* HotelDetails */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair font-semibold">
          {room.hotel.name} <span>({room.roomType})</span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20% OFF
        </p>
      </div>
      {/* Room Rating */}
      <div className="flex items-center gap-1 mt-2">
        <img src={assets.starIconFilled} alt="star icon" />
        <span>{room.hotel?.rating}</span>
        <p className="ml-2">{room.hotel?.reviews} reviews</p>
      </div>
      {/* Room Address */}
      <div className="flex items-center gap-1 mt-2">
        <img
          src={assets.locationIcon}
          alt="location icon"
          className="inline-block mr-2"
        />
        <span className="text-gray-600">{room.hotel?.address}</span>
      </div>

      {/* Room Images */}
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-1/2">
          <img
            src={mainImage}
            alt="Room Image"
            className="w-full object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images.length > 1 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                key={index}
                src={image}
                alt="Room Image"
                className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image ? "outline-3 outline-green-500" : ""}`}
              />
            ))}
        </div>
      </div>

      {/* Room Amenities */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {room.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
              >
                <img
                  src={facilityIcons[amenity]}
                  alt={amenity}
                  className="w-5 h-5"
                />
                <p className="text-xs text-gray-600">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl font-bold">₹{room.pricePerNight}/NIGHT</p>
      </div>

      <div className="mt-10 space-y-4">
        {roomCommonData.map((spec, index) => (
          <div key={index} className="flex items-center gap-2">
            <img
              src={spec.icon}
              alt={`${spec.title}`}
              className="w-6.5 h-6.5"
            />
            <div>
              <p className="text-green-500">{spec.title}</p>
              <p className="text-gray-500">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left content */}
      <div className="mt-16 bg-[#eaeaea] flex items-center justify-center p-6 md:p-12 lg:p-20 rounded-4xl">
        <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="flex flex-col items-start text-left max-w-xl">
            <div className="border border-neutral-300 rounded-full px-4 py-1.5 bg-transparent mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                Plan Your Stay
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.1] tracking-tight">
              Embark on{" "}
              <span className="text-[#c29a5a]">
                Your <br className="hidden md:inline" /> Bespoke
              </span>{" "}
              Experience
            </h1>
            <p className="text-neutral-600 text-sm md:text-base mt-6 leading-relaxed">
              Discover your perfect retreat. Select your dates, choose your
              suite, and secure your exclusive experience at The Mist luxury
              hotel.
            </p>
          </div>

          {/* Form Section */}

          <div className="bg-white rounded-4xl shadow-xl p-8 md:p-10 w-full max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-8 tracking-tight">
              Check <span className="text-[#c29a5a]">Availability</span>
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-neutral-800 mb-2">
                  Check In:
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full rounded-full border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#c29a5a]/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-800 mb-2">
                  Check Out:
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full rounded-full border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#c29a5a]/20"
                  required
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">
                    Guests:
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full rounded-full border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#c29a5a]/20"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-800 mb-2">
                    Select Room:
                  </label>
                  <select
                    value={selectedRooms}
                    onChange={(e) => setSelectedRooms(e.target.value)}
                    className="w-full rounded-full border border-neutral-200 px-4 py-3 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#c29a5a]/20"
                  >
                    <option>1 Room</option>
                    <option>2 Rooms</option>
                    <option>3 Rooms</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#c29a5a] py-4 px-6 text-white font-bold transition hover:bg-[#b0884b] cursor-pointer"
              >
                Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
