import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Pastikan utils shadcn ada, atau hapus jika tidak pakai

export const CalendarWidget = () => {
  // Data dummy untuk Januari 2026 (Tanggal 1 hari Kamis)
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Array tanggal: null = padding hari kosong sebelum tanggal 1
  // Januari 2026 dimulai hari Kamis (index 4)
  const calendarDays = [
    null, null, null, null,
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, null
  ];

  // Simulasi hari ini & event
  const activeDay = 12; // Ceritanya hari ini tgl 12
  const eventDays = [5, 12, 24, 28]; // Tanggal yg ada titik merah/biru

  return (
    <div className="bg-brand-secondary rounded-4xl p-6 h-full min-h-70 flex flex-col relative overflow-hidden shadow-sm">
      {/* Decorative Blur (Optional aesthetic) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

      {/* Header Bulan */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <h3 className="text-brand-deep text-xl font-bold tracking-tight">January 2026</h3>
        <div className="flex gap-1">
          <button className="p-1 hover:bg-white/20 rounded-full transition-colors text-brand-deep">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1 hover:bg-white/20 rounded-full transition-colors text-brand-deep">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Nama Hari */}
      <div className="grid grid-cols-7 mb-2 text-center">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-[11px] font-bold text-brand-deep/50 uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>

      {/* Grid Tanggal */}
      <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center flex-1 items-start">
        {calendarDays.map((date, index) => {
          if (!date) return <div key={index}></div>;

          const isToday = date === activeDay;
          const hasEvent = eventDays.includes(date);

          return (
            <div key={index} className="flex flex-col items-center justify-center relative cursor-pointer group">
              <div
                className={cn(
                  "w-8 h-8 flex items-center justify-center text-sm font-semibold rounded-full transition-all duration-200",
                  isToday
                    ? "bg-brand-deep text-white shadow-lg scale-110"
                    : "text-brand-deep hover:bg-white/40"
                )}
              >
                {date}
              </div>

              {/* Event Dot Indicator */}
              {hasEvent && !isToday && (
                <div className="w-1 h-1 bg-brand-deep rounded-full mt-1"></div>
              )}
              {hasEvent && isToday && (
                <div className="w-1 h-1 bg-white rounded-full mt-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
