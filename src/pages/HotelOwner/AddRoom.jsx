import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Title from "../../components/Title";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: "",
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });
  return (
    <form className="w-full max-w-full mx-auto p-6 sm:p-8 bg-white border border-gray-200 shadow-xl rounded-3xl">
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subtitle="Add a new room to your hotel inventory with all the essential details, including room category, 
        nightly price, capacity, facilities, and photos. Keep your listings accurate to deliver a seamless booking experience."
      />

      <div className="mt-12 space-y-8">
        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <p className="text-base font-medium uppercase tracking-[0.18em] text-gray-500">
                Gallery
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">
                Upload room images
              </h2>
            </div>
            <p className="text-base text-gray-500 max-w-sm">
              Add up to four photos for a polished room listing.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Object.keys(images).map((key) => (
              <label
                htmlFor={`roomImages${key}`}
                key={key}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 transition hover:border-gray-300"
              >
                <img
                  className="h-40 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-105"
                  src={
                    images[key]
                      ? URL.createObjectURL(images[key])
                      : assets.uploadArea
                  }
                  alt=""
                />
                <input
                  type="file"
                  accept="image/*"
                  id={`roomImages${key}`}
                  hidden
                  onChange={(e) =>
                    setImages({ ...images, [key]: e.target.files[0] })
                  }
                />
              </label>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="text-base font-medium uppercase tracking-[0.18em] text-gray-500">
                Room Settings
              </p>
              <div>
                <p className="text-base text-gray-600">Room Type</p>
                <select
                  value={inputs.roomType}
                  onChange={(e) =>
                    setInputs({ ...inputs, roomType: e.target.value })
                  }
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-slate-200"
                >
                  <option value="">Select Room Type</option>
                  <option value="Single Bed">Single Bed</option>
                  <option value="Double Bed">Double Bed</option>
                  <option value="Luxury Room">Luxury Room</option>
                  <option value="Family Suite">Family Suite</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-base font-medium uppercase tracking-[0.18em] text-gray-500">
                Pricing
              </p>
              <div>
                <p className="text-base text-gray-600">Price per night(₹)</p>
                <input
                  type="number"
                  placeholder="0"
                  value={inputs.pricePerNight}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      pricePerNight: e.target.value,
                    })
                  }
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <div className="mb-4">
            <p className="text-base font-medium uppercase tracking-[0.18em] text-gray-500">
              Amenities
            </p>
            <p className="text-base text-gray-600">
              Select the features available for this room.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.keys(inputs.amenities).map((amenity, index) => (
              <label
                key={index}
                htmlFor={`amenities${index + 1}`}
                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-700 transition hover:border-gray-300"
              >
                <input
                  type="checkbox"
                  id={`amenities${index + 1}`}
                  checked={inputs.amenities[amenity]}
                  onChange={() =>
                    setInputs({
                      ...inputs,
                      amenities: {
                        ...inputs.amenities,
                        [amenity]: !inputs.amenities[amenity],
                      },
                    })
                  }
                  className="h-5 w-5 rounded border-gray-300 bg-white text-cyan-500 focus:ring-cyan-300"
                />
                <span className="text-base">{amenity}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="pt-4 border-t border-gray-200">
          <button
            className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-10 py-3 text-base font-medium
           text-white shadow-lg shadow-slate-200/30 transition hover:bg-slate-800"
          >
            Add Room
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddRoom;
