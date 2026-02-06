import React from "react";
import LoginBanner from "@/components/fragments/auth/LoginBanner";
import LoginForm from "@/components/fragments/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden font-sans">

      {/* Kolom Kiri: Ilustrasi Area (Background Biru) */}
      <div className="relative hidden lg:flex flex-col items-center justify-center bg-brand-primary p-12 rounded-r-[60px]">
        {/* Dekorasi Background Blur (Opsional, agar tidak flat) */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-components/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-components/20 rounded-full blur-[100px]" />

        {/* Konten Kiri */}
        <div className="relative z-10 w-full max-w-lg">
          <LoginBanner />
        </div>
      </div>

      {/* Kolom Kanan: Area Form (Background Putih) */}
      <div className="flex items-center justify-center bg-white p-4 lg:p-12 relative">
         {/* Form Component (Card Biru akan ada di dalam sini) */}
         <LoginForm />
      </div>

    </div>
  );
}
