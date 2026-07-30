import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);
  return (
    <div className="min-h-screen w-full overflow-hidden rounded-[28px] border border-slate-200/80 bg-linear-to-br from-slate-50 via-white to-indigo-50/70 p-4 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.35)] md:p-6 lg:p-8">
      <div className="w-full overflow-hidden rounded-3xl border border-indigo-100/80 bg-white/80 p-4 shadow-sm backdrop-blur md:p-6">
        <Title
          align="left"
          font="bold"
          title="Dashboard"
          subtitle="Stay updated with your latest hotel bookings, monitor reservation progress, and access all booking details in one place."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/*  --------- Total Bookings------ */}
          <div className="flex items-center gap-4 rounded-2xl border border-sky-100 bg-linear-to-r from-sky-500 to-blue-600 p-5 text-white shadow-lg shadow-sky-200/70">
            <div className="rounded-xl bg-white p-3">
              <img src={assets.totalBookingIcon} alt="" className="h-10 w-10" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">
                Total Bookings
              </p>
              <p className="mt-1 text-2xl font-semibold">
                {dashboardData.totalBookings}
              </p>
            </div>
          </div>
          {/* ------------ Total Revenue--------- */}
          <div className="flex items-center gap-4 rounded-2xl border border-violet-100  bg-linear-to-r from-violet-500 to-fuchsia-600 p-5 text-white shadow-lg shadow-violet-200/70">
            <div className="rounded-xl bg-white p-3">
              <img src={assets.totalRevenueIcon} alt="" className="h-10 w-10" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-100">
                Total Revenue
              </p>
              <p className="mt-1 text-2xl font-semibold">
                ₹{dashboardData.totalRevenue}
              </p>
            </div>
          </div>
        </div>

        {/* --------------Recent Bookings-------------- */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-800">
              Recent Bookings
            </h2>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
              Live activity
            </span>
          </div>
          <div className="max-h-105 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="max-h-105 overflow-y-auto overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                      User Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">
                      Room Name
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                      Total Amount
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-slate-700">
                      Payment Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
                  {dashboardData.bookings.map((item, index) => (
                    <tr key={index} className="transition hover:bg-slate-50">
                      <td className="px-4 py-3">{item.user.username}</td>

                      <td className="px-4 py-3">{item.room.roomType}</td>

                      <td className="px-4 py-3 text-center font-semibold text-slate-800">
                        ₹{item.totalPrice}
                      </td>

                      <td className="px-4 py-3">
                        <button
                          className={`mx-auto flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold ${item.isPaid ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
                        >
                          {item.isPaid ? "Completed" : "Pending"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
