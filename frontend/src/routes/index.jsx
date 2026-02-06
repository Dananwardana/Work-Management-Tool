import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import MainLayout from "@/components/layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />, // Halaman login berdiri sendiri (Tanpa Sidebar)
  },
  {
    path: "/",
    element: <MainLayout />, // Semua di bawah ini akan punya Sidebar & Navbar
    children: [
      {
        index: true, // Kalau user buka "/", otomatis ke
        element: <Navigate to="/login" replace />,
      },
      {
        path: "dashboard",
        element: <div className="text-2xl font-bold">Halo, Ini Dashboard Performa</div>,
      },
      {
        path: "projects",
        element: <div className="text-2xl font-bold">Halo, Ini Daftar Project</div>,
      },
    ],
  },
  {
    path: "*", // Jika ngetik asal di URL
    element: <div className="flex h-screen items-center justify-center font-bold">404 - Nyasar Bos!</div>,
  },
]);
