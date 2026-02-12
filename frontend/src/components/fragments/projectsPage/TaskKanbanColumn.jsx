import React from "react";
import TaskCard from "./TaskCard";
import { cn } from "@/lib/utils";

const KanbanColumn = ({ title, tasks, variant = "todo" }) => {

    // LOGIC WARNA & VISUAL HIERARCHY
    const styleConfig = {
        todo: {
            // Light Context
            container: "bg-brand-secondary border-brand-secondary",
            headerText: "text-brand-deep",
            indicator: "bg-status-info",
            badge: "bg-white/60 text-brand-deep shadow-sm",

            // RESTORED: Scrollbar Gelap Transparan
            scrollbar: "scrollbar-thumb-brand-deep/10 hover:scrollbar-thumb-brand-deep/20",

            // RESTORED: Ring Color Specific
            hoverRing: "hover:ring-brand-secondary",

            // Card Logic (KEPT): Putih Solid + Shadow Standar
            cardWrapper: "opacity-100 shadow-none",
        },
        inprogress: {
            // Medium Dark Context
            container: "bg-brand-components border-brand-components",
            headerText: "text-white",
            indicator: "bg-status-proses",
            badge: "bg-white/10 text-white ring-1 ring-white/10",

            // RESTORED: Scrollbar Putih Transparan
            scrollbar: "scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20",

            // RESTORED: Ring Color Specific
            hoverRing: "hover:ring-brand-components",

            // Card Logic (KEPT): Glow Tipis
            cardWrapper: "opacity-95 hover:opacity-100 shadow-none ring-1 ring-white/10",
        },
        done: {
            // Deep Dark Context
            container: "bg-brand-deep border-brand-deep",
            headerText: "text-white/90",
            indicator: "bg-status-done",
            badge: "bg-status-done/20 text-status-done ring-1 ring-status-done/20",

            // RESTORED: Scrollbar Putih Sangat Tipis
            scrollbar: "scrollbar-thumb-white/5 hover:scrollbar-thumb-white/10",

            // RESTORED: Ring Color Specific
            hoverRing: "hover:ring-brand-deep",

            // Card Logic (KEPT): Redup (85%) -> Terang saat hover
            cardWrapper: "opacity-90 hover:opacity-100 shadow-none grayscale-[0.3] hover:grayscale-0",
        },
    };

    const styles = styleConfig[variant];

    return (
        <div
            className={cn(
                // Layout Dasar
                "flex flex-col w-full h-full rounded-2xl transition-all duration-300 border relative overflow-hidden",
                // Warna Container
                styles.container,

                // --- RESTORED: INTERACTION POLISH (SUPER CLEAN) ---
                // Hover column memberikan outline focus dengan jarak (offset) agar "mahal"
                "group/column hover:ring-2 hover:ring-offset-2 hover:ring-offset-app-bg transition-shadow ease-out",
                // Warna ring spesifik berdasarkan varian
                styles.hoverRing
            )}
        >
            {/* Background Gradient Halus (KEPT) */}
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

            {/* --- HEADER --- */}
            <div className="flex items-center justify-between mb-2 p-5 pb-2 relative z-10">
                <div className="flex items-center gap-3">
                    {/* Indicator Dot */}
                    <div className="relative flex h-2.5 w-2.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.indicator}`}></span>
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${styles.indicator}`}></span>
                    </div>

                    <h3 className={`font-sans font-bold text-sm tracking-wide ${styles.headerText}`}>
                        {title}
                    </h3>
                </div>

                {/* Count Badge */}
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md backdrop-blur-md ${styles.badge}`}>
                    {tasks.length}
                </span>
            </div>

            {/* --- TASK LIST AREA --- */}
            <div
                className={cn(
                    "flex flex-col gap-3 overflow-y-auto px-4 pb-4 pt-1 h-full min-h-37.5 relative z-10",
                    // RESTORED: Base Scrollbar Style
                    "scrollbar-thin scrollbar-track-transparent rounded-b-2xl",
                    // Adaptive Scrollbar Color
                    styles.scrollbar,
                )}
            >
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={cn(
                            // Transisi Dasar
                            "transform transition-all duration-300 ease-out",
                            // Style Injeksi dari Config (Opacity, dll) - KEPT
                            styles.cardWrapper,
                            // HOVER EFFECT (KEPT):
                            // 1. Translate Y (Naik) agar tidak nabrak samping
                            "hover:-translate-y-1",
                            // 2. Ring focus saat hover kartu
                            variant !== "todo" && "hover:ring-1 hover:ring-white/30 rounded-xl",
                        )}
                    >
                        {/* Wrapper div (KEPT) */}
                        <div className="rounded-xl overflow-hidden">
                            <TaskCard task={task} />
                        </div>
                    </div>
                ))}

                {/* --- EMPTY STATE (KEPT) --- */}
                {tasks.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-40 text-center select-none opacity-50">
                        <div className={`p-4 rounded-full mb-3 border-2 border-dashed ${variant === "todo" ? "border-brand-deep/20 bg-brand-deep/5" : "border-white/10 bg-white/5"}`}>
                            <div className={`w-5 h-5 ${variant === "todo" ? "bg-brand-deep/20" : "bg-white/20"} rounded-sm`} />
                        </div>
                        <p className={`text-xs font-medium tracking-wide ${variant === "todo" ? "text-brand-deep" : "text-white"}`}>
                            No Tasks
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KanbanColumn;
