import React from "react";
import { cn } from "@/lib/utils";

const BasePageHeader = ({ title, description, actions, className }) => {
    return (
        <div
            className={cn(
                // Layout Container: Flex Column (Mobile) -> Row (Desktop)
                "flex flex-col md:flex-row md:items-center justify-between gap-4",
                // Default Margin Bottom (Ambil yang mb-8 agar lega bila ada actions)
                "mb-8",
                className,
            )}
        >
            {/* --- Left Section: Title & Description --- */}
            <div>
                <h2 className="text-3xl font-extrabold text-brand-deep tracking-tight">
                    {title}
                </h2>

                {/* Render Description hanya jika props-nya ada */}
                {description && (
                    <p className="text-app-gray text-sm mt-1 font-medium">
                        {description}
                    </p>
                )}
            </div>

            {/* --- Right Section: Actions --- */}
            {/* Wrapper ini memastikan items di kanan selalu rapi (gap-3) */}
            {actions && (
                <div className="flex items-center gap-3 w-full md:w-auto">
                    {actions}
                </div>
            )}
        </div>
    );
};

export default BasePageHeader;
