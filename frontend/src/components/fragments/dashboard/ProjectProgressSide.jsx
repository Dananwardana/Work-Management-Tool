import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// 1. DATA PROJECT STATUS (3 Segmen)
const progressData = [
  { name: "Completed", value: 45, color: "#052659" },   // Brand Deep (Navy)
  { name: "In Progress", value: 35, color: "#3b82f6" }, // Brand Primary (Blue)
  { name: "Pending", value: 20, color: "#e2e8f0" },     // Slate-200 (Gray)
];

// 2. DATA LIST PROJECT
const projects = [
  { title: "Manajemen Workflow", sub: "Internal System", img: "MW", color: "bg-blue-50 text-blue-600" },
  { title: "Website Builder", sub: "Maintenance", img: "WB", color: "bg-orange-50 text-orange-600" },
  { title: "Strategic Alliance", sub: "Partnership", img: "SA", color: "bg-purple-50 text-purple-600" },
  { title: "Mobile App Dev", sub: "Client Request", img: "MA", color: "bg-green-50 text-green-600" },
];

export const ProjectProgressSide = () => {
  return (
    <div className="space-y-6">

      {/* --- CARD 1: GAUGE CHART --- */}
      <Card className="bg-white border-none rounded-[30px] shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.05)] overflow-visible relative group">
        <CardContent className="p-8 pb-10 text-center relative z-10">

          {/* Header Card */}
          <div className="flex justify-between items-center mb-2">
             <h3 className="text-lg font-bold text-brand-deep">Project Progress</h3>
             <button className="text-gray-400 hover:text-brand-deep transition-colors">
                <MoreHorizontal className="w-5 h-5" />
             </button>
          </div>

          {/* Chart Area */}
          <div className="h-40 relative flex justify-center items-center mt-2">
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
                >
                  {progressData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                    />
                  ))}
                </Pie>
                <Tooltip
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    itemStyle={{ color: '#052659', fontWeight: 600, fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Center Text Overlay */}
            <div className="absolute bottom-0 text-center pointer-events-none">
               <div className="text-4xl font-extrabold text-brand-deep tracking-tight">45%</div>
               <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">Project Ended</div>
            </div>
          </div>

          {/* Legend (3 Items) */}
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
             {progressData.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[10px] font-semibold text-gray-600">{item.name}</span>
                 </div>
             ))}
          </div>

        </CardContent>
      </Card>


      {/* --- BUTTON: CREATE PROJECT --- */}
      <Button className="w-full bg-brand-deep hover:bg-brand-deep/90 text-white rounded-[24px] py-7 shadow-xl shadow-brand-deep/20 group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/20 transition-all duration-300">
                <Plus className="w-5 h-5 text-white" />
            </div>
            <span className="text-base font-semibold tracking-wide">Create New Project</span>
          </div>
      </Button>


      {/* --- CARD 2: PROJECTS LIST --- */}
      <div className="bg-white rounded-[30px] p-6 border border-gray-100/50 shadow-sm">
        <div className="flex justify-between items-end mb-6">
             <div>
                <h3 className="text-lg font-bold text-brand-deep">Recent Projects</h3>
                <p className="text-xs text-gray-400 mt-1">You have 12 active projects</p>
             </div>
             <span className="text-xs font-bold text-brand-primary hover:text-brand-deep cursor-pointer transition-colors px-3 py-1 bg-brand-support/10 rounded-full">See All</span>
        </div>

        <div className="space-y-1">
           {projects.map((p, i) => (
             <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-all duration-200 cursor-pointer group border border-transparent hover:border-gray-100">
                <Avatar className={`w-11 h-11 rounded-xl ${p.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <AvatarFallback className="font-bold text-xs rounded-xl bg-transparent">{p.img}</AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-brand-deep truncate group-hover:text-brand-primary transition-colors">{p.title}</p>
                    <p className="text-[11px] text-gray-400 font-medium truncate group-hover:text-gray-500">{p.sub}</p>
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
