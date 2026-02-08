import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-brand-support font-sans selection:bg-brand-primary/30">
            <Sidebar />

            {/* Main Container: Flex Column dengan GAP untuk pemisah */}
            <main className="flex-1 p-3 lg:p-4 flex flex-col h-screen overflow-hidden gap-3">
                {/* BAGIAN 1: HEADER CARD */}
                {/* Kotak terpisah khusus untuk Header */}
                <div className="bg-white rounded-4xl lg:rounded-[30px] border border-brand-support shadow-sm shrink-0 mr-0 lg:mr-2 mt-2 lg:mt-2 overflow-hidden">
                    <Header />
                </div>

                {/* BAGIAN 2: CONTENT CARD */}
                {/* Kotak terpisah untuk konten utama (Outlet) */}
                <div className="flex-1 bg-white rounded-4xl lg:rounded-[30px] border border-brand-support flex flex-col shadow-2xl overflow-hidden relative mr-0 lg:mr-2 mb-2 lg:mb-2">
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-10 scrollbar-thin scrollbar-thumb-gray-200">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
