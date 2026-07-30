import React from "react";
import Title from "../components/Title";
import { userBookingsDummyData } from "../assets/assets";
import { useState } from "react";
import { assets } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userBookingsDummyData);

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-20 px-4 md:px-10 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-4xl bg-white p-8 shadow-xl border border-gray-200">
          <Title
            title="My Bookings"
            subtitle="Your next adventure starts with the perfect place to stay. Browse thousands of trusted hotels, compare prices, and reserve your room in minutes—all with a fast, secure, and hassle-free booking experience."
            align="left"  />

          <div className="mt-10 space-y-6">
            {bookings.map((booking, index) => (
              <div
                key={booking._id}
                className={`grid gap-6 rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md ${index % 2 === 0 ? "ring-1 ring-[#f3f4f6]" : ""} md:grid-cols-[1.4fr_1fr_0.8fr]`}
              >
                <div className="flex flex-col md:flex-row gap-5">
                  <img
                    src={booking.room.images[0]}
                    alt="hotel-img"
                    className="h-40 w-full max-w-xl rounded-3xl object-cover md:w-48"
                  />
                  <div className="flex flex-col justify-between gap-3">
                    <div>
                      <p className="text-2xl font-playfair text-gray-900">
                        {booking.hotel.name}
                        <span className="text-base font-inter text-gray-500">
                          {" "}
                          ({booking.room.roomType})
                        </span>
                      </p>
                      <div className="mt-3 space-y-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <img
                            src={assets.locationIcon}
                            alt="location icon"
                            className="h-4 w-4"
                          />
                          <span>{booking.hotel.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src={assets.guestsIcon}
                            alt="guests icon"
                            className="h-4 w-4"
                          />
                          <span>Guests: {booking.guests}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-base font-semibold text-gray-900">
                      Total: ₹{booking.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium text-gray-900">Check-In</p>
                    <p className="mt-2">
                      {new Date(booking.checkInDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Check-Out</p>
                    <p className="mt-2">
                      {new Date(booking.checkOutDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 w-max">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}
                    ></span>
                    {booking.isPaid ? "Paid" : "Unpaid"}
                  </div>
                  {!booking.isPaid && (
                    <button className="w-full rounded-full bg-[#fbbf24] px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-[#f59e0b] cursor-pointer">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
