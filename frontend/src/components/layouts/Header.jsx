import React from "react";
import { Search, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MobileSidebar } from "./MobileSidebar";

export const Header = () => {
    return (
        <header className="flex items-center justify-between px-4 py-4 lg:px-8 lg:py-5 h-full bg-white">
            {/* --- BAGIAN KIRI: Mobile Menu & Search --- */}
            <div className="flex items-center gap-3 lg:gap-8 flex-1">
                {/* 1. Mobile Trigger */}
                <div className="lg:hidden">
                    <MobileSidebar />
                </div>

                {/* 2. Search Bar (Super Clean Style) */}
                <div className="relative w-full max-w-md hidden sm:block">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Search className="w-5 h-5" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm font-medium text-gray-700 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-brand-primary/10 focus:shadow-sm transition-all duration-200 outline-none"
                    />
                </div>
                {/* Search Icon Only untuk Mobile (Optional, agar hemat tempat) */}
                <button className="sm:hidden p-2 text-gray-500 bg-gray-50 rounded-full">
                    <Search className="w-5 h-5" />
                </button>
            </div>

            {/* --- BAGIAN KANAN: Actions & Profile --- */}
            <div className="flex items-center gap-3 lg:gap-6">
                {/* 2. Divider Vertical (Pemisah Halus) */}
                <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

                {/* 3. User Profile (Bug Fix: Sekarang Muncul di Mobile) */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    {/* Text Profile (Hidden di Mobile, Muncul di Desktop) */}
                    <div className="hidden md:flex flex-col text-right">
                        <span className="text-sm font-bold text-gray-700 group-hover:text-brand-deep transition-colors">
                            Inii Dodii
                        </span>
                        <span className="text-xs text-gray-500 font-medium">
                            Team Member
                        </span>
                    </div>

                    {/* Avatar Wrapper */}
                    <div className="relative">
                        <Avatar className="w-9 h-9 lg:w-10 lg:h-10 border-2 border-white shadow-sm group-hover:scale-105 transition-transform">
                            <AvatarImage
                                src="https://ui-avatars.com/api/?name=Inii+Dodii&background=0D8ABC&color=fff"
                                alt="User"
                            />
                            <AvatarFallback>DW</AvatarFallback>
                        </Avatar>
                        {/* Status Online Indicator */}
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>
            </div>
        </header>
    );
};
