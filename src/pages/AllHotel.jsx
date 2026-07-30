import React from "react";
import { facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const AllHotel = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-black mt-10 ">All Hotels</h1>
          <p className="text-gray-600 mt-2">
            Browse our handpicked stays for your next trip.
          </p>
        </div>

        {roomsDummyData.map((room, index) => {
          const hotel = room.hotel;
          const isEven = index % 2 === 0;

          return (
            <div
              key={room._id}
              className={`flex flex-col lg:flex-row ${
                isEven ? "" : "lg:flex-row-reverse"
              } bg-white rounded-4xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full`}
            >
              <div className="relative w-full lg:w-[48%] min-h-65 lg:min-h-full overflow-hidden">
                <img
                  src={room.images[0]}
                  alt="hotel-img"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="w-full lg:w-[52%] p-8 sm:p-10 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#c5a880]">
                        Featured stay
                      </p>
                      <h2 className="text-2xl font-semibold text-gray-800">
                        {hotel?.name}
                      </h2>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-700">
                      <img src={assets.starIconFilled} alt="star icon" />
                      <span>{hotel?.rating}</span>
                      <p className="ml-2 ">{hotel?.reviews} reviews</p>
                    </div>
                  </div>
                  <div>
                    <img src={assets.locationIcon} alt="location icon" className="inline-block mr-2" />
                    <span className="text-gray-600">{hotel?.address}</span>
                  </div>

                   {/* Room Amenities */}
                  <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                   {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70 ">
                        <img src={facilityIcons[amenity]} alt={amenity} className="w-5 h-5" />
                        <p className="text-xs text-gray-600">{amenity}</p>
                      </div>
                    ))}
                    
                  </div>
                  
                </div>

                {/* Price and View Details Button */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-6">
                  <p className="text-xl font-semibold text-gray-800">
                    ₹{room.pricePerNight}
                    <span className="text-sm font-semibold text-gray-500">
                      {" "}
                      /NIGHT
                    </span>
                  </p>
                  <button onClick={() => {
                    navigate(`/hotels/${room._id}`);
                    scrollTo(0, 0);
                  }} className="bg-[#c99F5B] hover:bg-[#b89566] text-white px-5 py-2.5 rounded-full shadow-sm hover:shadow 
                     transition-all duration-300 font-semibold text-xs sm:text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllHotel;
