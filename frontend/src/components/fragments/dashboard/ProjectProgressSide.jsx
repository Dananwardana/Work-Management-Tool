import React, { useState } from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { BaseButton } from "@/components/ui/BaseButton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// 1. DATA PROJECT STATUS (3 Segmen)
const progressData = [
    { name: "Completed", value: 45, color: "#021024" }, // Brand Deep (Navy)
    { name: "In Progress", value: 35, color: "#052659" }, // Brand Primary (Blue)
    { name: "Pending", value: 20, color: "#c1e8ff" }, // Slate-200 (Gray)
];

// 2. DATA LIST PROJECT
const projects = [
    {
        title: "Manajemen Workflow",
        sub: "Internal System",
        img: "MW",
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Website Builder",
        sub: "Maintenance",
        img: "WB",
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "Strategic Alliance",
        sub: "Partnership",
        img: "SA",
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Mobile App Dev",
        sub: "Client Request",
        img: "MA",
        color: "bg-green-50 text-green-600",
    },
];

export const ProjectProgressSide = () => {
    // STATE: Untuk menyimpan data segmen yang sedang di-hover
    const [hoveredData, setHoveredData] = useState(null);

    return (
        <div className="space-y-6">
            {/* CARD 1: GAUGE CHART */}
            <Card className="bg-white rounded-[30px] shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.05)] overflow-visible relative group">
                <CardContent className="p-8 pb-10 text-center relative z-10">
                    {/* Header Card */}
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold text-brand-deep">
                            Project Progress
                        </h3>
                        <button className="text-gray-400 hover:text-brand-deep transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chart Area */}
                    <div className="h-40 relative flex justify-center items-center mt-4">
                        {/* NEW: STATIC TOP TOOLTIP AREA */}
                        {/* Muncul di atas chart, posisi dikunci (absolute top-0) */}
                        <div className="absolute -top-2 left-0 w-full flex justify-center z-20 pointer-events-none h-8 items-center">
                            <div
                                className={`transition-all duration-300 transform ${
                                    hoveredData
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-2"
                                }`}
                            >
                                {hoveredData && (
                                    <div className="bg-brand-deep text-white px-3 py-1.5 rounded-lg shadow-xl flex items-center gap-2 text-xs font-semibold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                        {hoveredData.name}: {hoveredData.value}%
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Chart */}
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={progressData}
                                    cx="50%"
                                    cy="100%" // Setengah lingkaran bawah
                                    startAngle={180}
                                    endAngle={0}
                                    innerRadius={65}
                                    outerRadius={85}
                                    paddingAngle={5} // Jarak antar segmen (Clean Look)
                                    cornerRadius={6} // Ujung membulat (Modern Look)
                                    dataKey="value"
                                    stroke="none"
                                    // Event Handler untuk State Tooltip
                                    onMouseEnter={(_, index) =>
                                        setHoveredData(progressData[index])
                                    }
                                    onMouseLeave={() => setHoveredData(null)}
                                >
                                    {progressData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.color}
                                            // Efek visual pada Bar saat di hover
                                            className={`transition-all duration-300 cursor-pointer ${
                                                hoveredData?.name === entry.name
                                                    ? "opacity-100"
                                                    : "opacity-100 hover:opacity-80"
                                            }`}
                                            stroke={
                                                hoveredData?.name === entry.name
                                                    ? "#fff"
                                                    : "none"
                                            }
                                            strokeWidth={
                                                hoveredData?.name === entry.name
                                                    ? 2
                                                    : 0
                                            }
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Center Text Overlay */}
                        <div className="absolute bottom-0 text-center pointer-events-none">
                            <div className="text-4xl font-extrabold text-brand-deep tracking-tight">
                                45%
                            </div>
                            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">
                                Project Ended
                            </div>
                        </div>
                    </div>

                    {/* Legend (3 Items) */}
                    <div className="flex justify-center gap-3 mt-8 flex-wrap">
                        {progressData.map((item, idx) => (
                            <div
                                key={idx}
                                // Highlight legend jika chart di hover
                                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border transition-colors duration-300 ${
                                    hoveredData?.name === item.name
                                        ? "bg-gray-100 border-gray-200"
                                        : "bg-gray-50 border-gray-100"
                                }`}
                            >
                                <div
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-[10px] font-semibold text-gray-600">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* BUTTON: CREATE PROJECT */}
            <BaseButton
                className="w-full py-4 shadow-brand-components/20 group"
                variant="primary"
            >
                <div className="flex items-center gap-3">
                    {/* Icon Container */}
                    <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                        <Plus className="w-5 h-5 text-white" />
                    </div>

                    {/* Text Label */}
                    <span className="text-base font-semibold tracking-wide">
                        Create New Project
                    </span>
                </div>
            </BaseButton>

            {/* CARD 2: PROJECTS LIST (TIDAK DISENTUH) */}
            <div className="bg-white rounded-[30px] p-6 border border-gray-100/50 shadow-sm">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <h3 className="text-lg font-bold text-brand-deep">
                            Recent Projects
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                            You have 12 active projects
                        </p>
                    </div>
                    <span className="text-xs font-bold text-brand-primary hover:text-brand-deep cursor-pointer transition-colors px-3 py-1 bg-brand-support/10 rounded-full">
                        See All
                    </span>
                </div>

                <div className="space-y-1">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-all duration-200 cursor-pointer group border border-transparent hover:border-gray-100"
                        >
                            <Avatar
                                className={`w-11 h-11 rounded-xl ${p.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                            >
                                <AvatarFallback className="font-bold text-xs rounded-xl bg-transparent">
                                    {p.img}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-brand-deep truncate group-hover:text-brand-primary transition-colors">
                                    {p.title}
                                </p>
                                <p className="text-[11px] text-gray-400 font-medium truncate group-hover:text-gray-500">
                                    {p.sub}
                                </p>
                            </div>

                            <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                                <MoreHorizontal className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
