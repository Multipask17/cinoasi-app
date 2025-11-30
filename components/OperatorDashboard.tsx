import React, { useState } from "react";
import { Booking, Event } from "../types";
import {
  LucideSparkles,
  LucidePlus,
  LucideCheckCircle,
  LucideXCircle,
} from "lucide-react";

interface OperatorDashboardProps {
  bookings: Booking[];
  events: Event[];
}

const OperatorDashboard: React.FC<OperatorDashboardProps> = ({
  bookings,
  events,
}) => {
  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">
            Prenotazioni in Attesa
          </p>
          <p className="text-3xl font-bold text-amber-500 mt-2">
            {bookings.filter((b) => b.status === "PENDING").length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">
            Cani in Asilo Oggi
          </p>
          <p className="text-3xl font-bold text-emerald-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-sm font-medium">Eventi Attivi</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {events.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Booking Requests */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-800">Richieste Recenti</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        booking.serviceType === "DAYCARE"
                          ? "bg-emerald-100 text-emerald-700"
                          : booking.serviceType === "LESSON"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {booking.serviceType}
                    </span>
                    <span className="text-sm text-slate-500">
                      {booking.date}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 mt-1">
                    Cane ID: {booking.dogId}
                  </p>
                  {booking.taxiRequested && (
                    <p className="text-xs text-amber-600 font-semibold mt-0.5">
                      🚕 Taxi Richiesto
                    </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  {booking.status === "PENDING" ? (
                    <>
                      <button
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                        title="Rifiuta"
                      >
                        <LucideXCircle size={20} />
                      </button>
                      <button
                        className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-full"
                        title="Accetta"
                      >
                        <LucideCheckCircle size={20} />
                      </button>
                    </>
                  ) : (
                    <span className="text-xs font-bold text-slate-400 px-2 py-1 bg-slate-100 rounded">
                      {booking.status}
                    </span>
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

export default OperatorDashboard;
