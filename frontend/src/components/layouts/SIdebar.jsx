import React from "react";
import {
    LayoutDashboard,
    FolderKanban,
    ClipboardList,
    Users,
    LogOut,
    Command,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export const Sidebar = () => {
    const location = useLocation();

    // Konfigurasi Menu
    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: FolderKanban, label: "Projects", path: "/projects" },
        { icon: ClipboardList, label: "Tasks", path: "/tasks" },
        { icon: Users, label: "Users", path: "/users" },
    ];

    // Helper untuk cek active state
    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <aside className="hidden lg:flex w-64 flex-col text-white py-8 px-6 h-screen sticky top-0 transition-all border-r border-white/5">
            {/* 1. Brand / Logo Area */}
            <div className="mb-10 px-2 flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Command className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold tracking-wide text-white">
                    WorkMate
                </h1>
            </div>

            {/* 2. Navigation Area */}
            <div className="flex-1 flex flex-col gap-2">
                {/* Label Kategori: MENU (Dibuat konsisten dengan GENERAL) */}
                <div className="px-2 mb-2 text-white/50 text-sm font-medium uppercase tracking-wider">
                    Menu
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item, index) => {
                        const active = isActive(item.path);

                        return (
                            <Link to={item.path} key={index} className="block">
                                <div
                                    className={`
                    flex items-center gap-4 px-4 py-3.5 w-full text-left rounded-xl transition-all duration-200 group
                    ${
                        active
                            ? "bg-white/10 text-white font-semibold shadow-inner" // Style Active (Sesuai Request)
                            : "text-white/70 hover:bg-white/5 hover:text-white hover:translate-x-1" // Style Inactive (Sesuai Request + Animasi geser dikit)
                    }
                  `}
                                >
                                    <item.icon
                                        className={`w-6 h-6 transition-colors ${
                                            active
                                                ? "text-white"
                                                : "text-white/70 group-hover:text-white"
                                        }`}
                                    />
                                    <span className="text-lg">
                                        {item.label}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* 3. Footer / Logout Area */}
            <div className="mt-auto pt-8 border-t border-white/10">
                <div className="px-2 mb-4 text-white/50 text-sm font-medium uppercase tracking-wider">
                    General
                </div>

                <button className="flex items-center gap-4 px-4 py-3.5 w-full text-left rounded-xl transition-all duration-200 text-white/70 hover:bg-white/5 hover:text-white hover:translate-x-1 group">
                    <LogOut className="w-6 h-6 text-white/70 group-hover:text-white" />
                    <span className="text-lg">Logout</span>
                </button>
            </div>
        </aside>
    );
};
