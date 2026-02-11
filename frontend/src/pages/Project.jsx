import React from "react";
import ProjectHeader from "@/components/fragments/projectsPage/ProjectHeader";
import TaskKanbanColumn from "@/components/fragments/projectsPage/TaskKanbanColumn";

// Dummy Data
const tasksData = {
    todo: [
        {
            title: "Kick-off meeting dengan client untuk memastikan kesepahaman awal",
            priority: "High",
            assignees: [{ name: "Danan", src: "" }],
        },
        {
            title: "Riset kompetitor dan analisis pasar global",
            priority: "Low",
            assignees: [{ name: "User 3", src: "" }],
        },
    ],
    inprogress: [
        {
            title: "Membuat wireframe halaman dashboard (Low Fidelity)",
            priority: "Medium",
            assignees: [{ name: "User 1", src: "" }],
        },
    ],
    done: [
        {
            title: "Finalisasi kontrak kerjasama fase 1",
            priority: "High",
            assignees: [{ name: "User 4", src: "" }],
        },
        {
            title: "Setup repository Github dan environment",
            priority: "Medium",
            assignees: [{ name: "Dev 1", src: "" }],
        },
        {
            title: "Desain logo dan branding guidelines dasar",
            priority: "Low",
            assignees: [{ name: "User 3", src: "" }],
        },
    ],
};

const ProjectsPage = () => {
    return (
        <div>
            {/* 1. Header Section (Konsisten dengan Dashboard) */}
            <ProjectHeader />

            {/* 2. Kanban Grid Layout (Full Width 3 Kolom) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Kolom To Do */}
                <TaskKanbanColumn
                    title="To Do"
                    tasks={tasksData.todo}
                    variant="todo"
                />

                {/* Kolom In Progress */}
                <TaskKanbanColumn
                    title="In Progress"
                    tasks={tasksData.inprogress}
                    variant="inprogress"
                />

                {/* Kolom Done */}
                <TaskKanbanColumn
                    title="Done"
                    tasks={tasksData.done}
                    variant="done"
                />
            </div>
        </div>
    );
};

export default ProjectsPage;
