import React from "react";
import TaskHeaderCard from "@/components/fragments/tasks/TaskHeaderCard";
import TaskNoteCard from "@/components/fragments/tasks/TaskNoteCard";

const TaskPage = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Page Title */}
            <h2 className="text-3xl font-extrabold text-brand-deep tracking-tight">
                Task
            </h2>

            {/* Main Task Header */}
            <TaskHeaderCard />

            {/* Notes Section */}
            <div className="flex justify-end">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium hover:bg-sky-200 transition">
                    <span className="text-lg">＋</span>
                    Add Notes
                </button>
            </div>

            {/* Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TaskNoteCard />
                <TaskNoteCard />
                <TaskNoteCard />
                <TaskNoteCard />
            </div>
        </div>
    );
};

export default TaskPage;
