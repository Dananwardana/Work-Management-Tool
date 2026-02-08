import React from "react";
import {
    Menu,
    LayoutDashboard,
    FolderKanban,
    ClipboardList,
    Users,
    LogOut,
    Command,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

export const MobileSidebar = () => {
    const location = useLocation();

    // Konfigurasi Menu (Sama dengan Desktop)
    const menuItems = [
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: FolderKanban, label: "Projects", path: "/projects" },
        { icon: ClipboardList, label: "Tasks", path: "/tasks" },
        { icon: Users, label: "Users", path: "/users" },
    ];

    // Helper Active State
    const isActive = (path) => location.pathname.startsWith(path);

    return (
        <Sheet>
            {/* Tombol Trigger (Hamburger) */}
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden mr-2 text-gray-500 hover:text-brand-deep"
                >
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>

            {/* Isi Sidebar (Drawer) */}
            {/* Menggunakan bg-brand-support agar warnanya konsisten dengan tema */}
            <SheetContent
                side="left"
                className="bg-brand-support border-none text-white w-72 p-0 shadow-2xl"
            >
                <div className="flex flex-col h-full py-8 px-6">
                    {/* 1. Brand / Logo Area */}
                    <div className="mb-10 px-2 flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm shadow-sm ring-1 ring-white/10">
                            <Command className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-wide text-white">
                            WorkMate
                        </h1>
                    </div>

                    {/* 2. Navigation Area */}
                    <div className="flex-1 flex flex-col gap-2">
                        {/* Label Kategori */}
                        <div className="px-2 mb-2 text-white/50 text-sm font-medium uppercase tracking-wider">
                            Menu
                        </div>

                        <nav className="space-y-2">
                            {menuItems.map((item, index) => {
                                const active = isActive(item.path);

                                return (
                                    <Link
                                        to={item.path}
                                        key={index}
                                        className="block"
                                    >
                                        <div
                                            className={`
                        flex items-center gap-4 px-4 py-3.5 w-full text-left rounded-xl transition-all duration-200 group
                        ${
                            active
                                ? "bg-white/10 text-white font-semibold shadow-inner ring-1 ring-white/5"
                                : "text-white/70 hover:bg-white/5 hover:text-white"
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

                        <button className="flex items-center gap-4 px-4 py-3.5 w-full text-left rounded-xl transition-all duration-200 text-white/70 hover:bg-white/5 hover:text-white group">
                            <LogOut className="w-6 h-6 text-white/70 group-hover:text-white" />
                            <span className="text-lg">Logout</span>
                        </button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};
