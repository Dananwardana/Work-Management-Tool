import React from "react";

export const StatsGrid = () => {
  const stats = [
    {
      label: "Ended Projects",
      value: "15",
      sub: "Increase from all projects",
      variant: "primary" // Highlighted Card
    },
    {
      label: "Running Projects",
      value: "7",
      sub: "Increase from all projects",
      variant: "default"
    },
    {
      label: "Pending Projects",
      value: "3",
      sub: "On Discuss",
      variant: "default"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, idx) => {
        const isPrimary = stat.variant === "primary";

        return (
          <div
            key={idx}
            className={`
              relative overflow-hidden rounded-4xl p-6 transition-all duration-300 hover:-translate-y-1 flex justify-between items-end
              ${
                isPrimary
                  ? "bg-brand-support shadow-xl shadow-brand-support/20 border border-brand-support" // Style Biru (Referensimu)
                  : "bg-white border border-gray-100 shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md" // Style Putih Clean
              }
            `}
          >
            {/* Bagian Teks */}
            <div className="relative z-10">
              <h3
                className={`text-lg font-semibold mb-1 ${
                  isPrimary ? "text-white/90" : "text-brand-deep"
                }`}
              >
                {stat.label}
              </h3>

              <div
                className={`text-5xl font-bold mb-3 tracking-tight ${
                  isPrimary ? "text-white" : "text-brand-deep"
                }`}
              >
                {stat.value}
              </div>

              <p
                className={`text-xs font-medium ${
                  isPrimary ? "text-brand-deep" : "text-gray-400"
                }`}
              >
                {/* Note: Pada card biru, kita pakai text-brand-deep (Navy Gelap)
                   agar sama persis dengan referensi (Dark text on Blue bg)
                */}
                {stat.sub}
              </p>
            </div>

            {/* Bagian Decorative Chart (Warna menyesuaikan background) */}
            <div className={`flex items-end gap-1.5 h-12 pb-1 ${isPrimary ? "opacity-90" : "opacity-50"}`}>
               {/* Bar 1 */}
               <div className={`w-2.5 rounded-t-sm transition-all duration-500 h-6 ${
                   isPrimary ? "bg-brand-deep/20" : "bg-brand-primary"
               }`}></div>
               {/* Bar 2 */}
               <div className={`w-2.5 rounded-t-sm transition-all duration-500 h-10 ${
                   isPrimary ? "bg-brand-deep/40" : "bg-brand-support"
               }`}></div>
               {/* Bar 3 */}
               <div className={`w-2.5 rounded-t-sm transition-all duration-500 h-8 ${
                   isPrimary ? "bg-white" : "bg-brand-deep"
               }`}></div>
            </div>

          </div>
        );
      })}
    </div>
  );
};
