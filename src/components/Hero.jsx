import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 py-20 md:py-32 
     text-white bg-[url("/src/assets/heroImage.png")] bg-cover bg-center bg-no-repeat h-screen '
    >
      <h1 className="font-playfair text-3xl  md:text-5xl md:text-[56px]  font-bold md:font-extrabold max-w-xl mt-20">
        Your Gateway to Comfort <p className="text-amber-500">and</p>Convenience
      </h1>
      <p className="text-gray-200 text-lg md:text-xl font-bold ">
        Book now and get the best prices
      </p>

      {/* Booking form */}
      <form
        className=" bg-gray/60 backdrop-blur-md border  border-white/10 rounded-4xl shadow-2xl shadow-black/50
       text-white  w-full max-w-3xl px-6 py-4 mt-12 flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto"
      >
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-sm  ">
            <img src={assets.locationIcon} alt="location" className="h-4" />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none "
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2 font-bold">
            <img src={assets.calenderIcon} alt="calendar" className="h-4" />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 font-bold">
            <img src={assets.calenderIcon} alt="calendar" className="h-4" />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center font-bold">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={10}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm  outline-none max-w-16"
            placeholder="0"
          />
        </div>

        <button
          className="flex items-center justify-center gap-1 rounded-full font-bold mt-5 bg-[#c39b62] hover:bg-[#b0884e] active:scale-[0.98] py-3 px-4
         text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
        >
          <img src={assets.searchIcon} alt="search" className="h-4" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
