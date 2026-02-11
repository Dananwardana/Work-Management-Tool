import React from "react";
import { StatsGrid } from "@/components/fragments/dashboard/StatsGrid";
import { TaskSection } from "@/components/fragments/dashboard/TaskSection";
import { AnalyticsChart } from "@/components/fragments/dashboard/AnalyticsChart";
import { ProjectProgressSide } from "@/components/fragments/dashboard/ProjectProgressSide";
import { CalendarWidget } from "@/components/fragments/dashboard/CalendarWidget";

const Dashboard = () => {
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-3xl font-extrabold text-brand-deep tracking-tight">
                    Dashboard
                </h2>
            </div>

            {/* Main Grid: Left Content (Grow) | Right Sidebar (Fixed 320px) */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">
                {/* Kolom Kiri (Utama) */}
                <div className="flex flex-col gap-6">
                    {/* 1. Stats Row */}
                    <StatsGrid />

                    {/* 2. Mid Row: Task & Calendar */}
                    <div className="grid grid-cols-6 lg:grid-cols-2 gap-6">
                        <TaskSection />

                        {/* Component Calendar yang Baru */}
                        <CalendarWidget />
                    </div>

                    {/* 3. Bottom Row: Analytics */}
                    <div className="h-75">
                        <AnalyticsChart />
                    </div>
                </div>

                {/* Kolom Kanan (Side Panel) */}
                <aside className="w-full">
                    <ProjectProgressSide />
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;
