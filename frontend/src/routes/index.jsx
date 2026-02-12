import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Project from "@/pages/Project";
import Users from "@/pages/Users";
import Tasks from "@/pages/Tasks";


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                // Kalau user buka "/", otomatis ke(), Tapi Saat dev, ubah redirect ke dashboard biar gak capek login terus
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "projects",
                element: <Project />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "tasks",
                element: <Tasks />,
            },
        ],
    },
    {
        path: "*",
        element: (
            <div className="flex h-screen items-center justify-center font-bold">
                404 - Nyasar Bos!
            </div>
        ),
    },
]);
