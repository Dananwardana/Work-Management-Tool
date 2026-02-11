import React from "react";
import DashboardHeader from "@/components/fragments/dashboardPage/DashboardHeader";
import { StatsGrid } from "@/components/fragments/dashboardPage/StatsGrid";
import { TaskSection } from "@/components/fragments/dashboardPage/TaskSection";
import { AnalyticsChart } from "@/components/fragments/dashboardPage/AnalyticsChart";
import { ProjectProgressSide } from "@/components/fragments/dashboardPage/ProjectProgressSide";
import { CalendarWidget } from "@/components/fragments/dashboardPage/CalendarWidget";

const Dashboard = () => {
    return (
        <div>
            {/* 1. Header Section (Konsisten) */}
            <DashboardHeader />

            {/* 2. Main Grid: Left Content (Grow) | Right Sidebar (Fixed 320px) */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8 items-start">
                {/* --- Kolom Kiri (Utama) --- */}
                <div className="flex flex-col gap-6">
                    {/* Stats Row */}
                    <StatsGrid />

                    {/* Mid Row: Task & Calendar */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <TaskSection />
                        <CalendarWidget />
                    </div>

                    {/* Bottom Row: Analytics */}
                    <div className="h-75">
                        <AnalyticsChart />
                    </div>
                </div>

                {/* --- Kolom Kanan (Side Panel) --- */}
                <aside className="w-full">
                    <ProjectProgressSide />
                </aside>
            </div>
        </div>
    );
};

export default Dashboard;
