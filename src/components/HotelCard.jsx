import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  const navigate = useNavigate();

  return (
    <Link
      to={`/hotels/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
    >
      <img src={room.images?.[0] || room.image?.[0]} alt={room.hotel?.name || "Hotel room"} />
      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
          Best Seller
        </p>
      )}

      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel?.name}
          </p>
          <div className="flex items-center gap-1">
            <img src={assets.starIconFilled} alt="star icon" />
            <span>{room.hotel?.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <img src={assets.locationIcon} alt="location icon" />
          <span>{room.hotel?.address}</span>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">₹{room.pricePerNight}</span>/NIGHT
          </p>
          <button
            onClick={(event) => {
              event.preventDefault();
              navigate(`/hotels/${room._id}`);
              scrollTo(0, 0);
            }}
            className="bg-amber-300 px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-amber-300 rounded-full transition-all cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;