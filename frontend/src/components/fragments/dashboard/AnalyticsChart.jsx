import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from "recharts";

const data = [
  { name: "S", value: 30 },
  { name: "M", value: 45 },
  { name: "T", value: 65 },
  { name: "W", value: 85 },
  { name: "T", value: 60 },
  { name: "F", value: 45 },
  { name: "S", value: 55 },
];

// Custom Tooltip Component agar lebih bersih
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-brand-deep text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl border border-white/10">
        {payload[0].value}% Progress
      </div>
    );
  }
  return null;
};

export const AnalyticsChart = () => {
  return (
    <div className="bg-white rounded-4xl p-6 shadow-sm h-full flex flex-col border border-gray-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-brand-deep">Project Analytic</h3>
        <select className="bg-gray-50 border-none text-xs font-bold text-gray-500 rounded-lg px-2 py-1 outline-none cursor-pointer hover:bg-gray-100">
           <option>Weekly</option>
           <option>Monthly</option>
        </select>
      </div>

      {/* Chart Area */}
      <div className="flex-1 w-full min-h-50">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            {/* Grid Horizontal Tipis */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />

            <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
                dy={10}
            />

            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />

            <Bar dataKey="value" radius={[20, 20, 20, 20]} barSize={28}>
                 {data.map((entry, index) => (
                    // Logic: Bar tertinggi warnanya Biru Gelap, sisanya Biru Muda/Abu
                    <Cell
                        key={`cell-${index}`}
                        fill={entry.value > 60 ? '#052659' : '#C1E8FF'}
                        className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    />
                 ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
