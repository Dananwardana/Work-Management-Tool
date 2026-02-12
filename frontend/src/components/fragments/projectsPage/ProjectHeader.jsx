import React from "react";
import BaseHeaderPage from "@/components/fragments/global/BaseHeaderPage";
import { BaseButton } from "@/components/fragments/global/BaseButton"; //
import { Input } from "@/components/ui/input";
import { Search, Plus, SlidersHorizontal } from "lucide-react";

const ProjectHeader = () => {
    return (
        <BaseHeaderPage
            title="Projects"
            description="Manage and track all your projects in one place"
            actions={
                <>
                    {" "}
                    {/* 2. Filter Button */}
                    <button className="h-11 w-11 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-app-gray hover:text-brand-deep hover:border-brand-primary/30 transition-all shadow-sm">
                        <SlidersHorizontal className="h-5 w-5" />
                    </button>
                    {/* 3. Add New Button */}
                    <BaseButton
                        variant="secondary"
                        className="h-11 px-6 rounded-xl text-sm gap-2"
                    >
                        <Plus className="h-4 w-4" />
                        Add New
                    </BaseButton>
                </>
            }
        />
    );
};

export default ProjectHeader;
