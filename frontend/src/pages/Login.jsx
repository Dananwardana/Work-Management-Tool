import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock Login Function (Dummy Data Logic)
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulasi loading network
    setTimeout(() => {
      setIsLoading(false);
      alert("Login berhasil! (Redirecting...)");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-support p-4">
      {/* Main Container dengan Glass Effect & Shadow Halus */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">

        {/* Kolom Kiri: Ilustrasi & Welcome Message (Hidden di Mobile) */}
        <div className="hidden lg:flex flex-col justify-center items-center h-full min-h-[600px] bg-white/10 backdrop-blur-md rounded-[32px] border border-white/20 p-12 shadow-2xl relative overflow-hidden">
            {/* Dekorasi Background Blob */}
            <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-brand-secondary/30 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-64 h-64 bg-brand-primary/30 rounded-full blur-[80px]"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className="w-full max-w-sm aspect-square bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 mb-8">
                     {/* Placeholder Image - Ganti src dengan ilustrasi kantormu */}
                    <img
                        src="https://img.freepik.com/free-vector/office-management-concept-illustration_114360-1497.jpg?t=st=1708600000~exp=1708603600~hmac=fake_token"
                        alt="Workspace Illustration"
                        className="w-full h-full object-contain"
                    />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                    Empower Your Productivity
                </h2>
                <p className="text-brand-secondary/90 text-lg max-w-xs leading-relaxed">
                    Access your professional workspace and manage your projects efficiently.
                </p>
            </div>
        </div>

        {/* Kolom Kanan: Form Login */}
        <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[32px] p-8 lg:p-10">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <h1 className="text-3xl font-bold text-brand-deep tracking-tight">
              Hi There!
            </h1>
            <p className="text-brand-support text-sm font-medium">
              Welcome back to your dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">

            {/* Email Input Group */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand-deep font-semibold">Email</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-brand-support group-focus-within:text-brand-components transition-colors" />
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:border-brand-components focus:ring-brand-components/20 rounded-xl transition-all"
                  required
                />
              </div>
            </div>

            {/* Password Input Group */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-brand-deep font-semibold">Password</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-brand-support group-focus-within:text-brand-components transition-colors" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="pl-10 pr-10 h-12 bg-slate-50 border-slate-200 focus:border-brand-components focus:ring-brand-components/20 rounded-xl transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-brand-support hover:text-brand-deep transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Options: Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-brand-support data-[state=checked]:bg-brand-components data-[state=checked]:border-brand-components" />
                <Label htmlFor="remember" className="text-sm text-slate-500 font-normal cursor-pointer">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm font-semibold text-brand-components hover:text-brand-deep hover:underline transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                className="w-full h-12 text-lg font-bold bg-brand-deep hover:bg-brand-components text-white shadow-lg shadow-brand-deep/20 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "LOGIN"}
            </Button>
          </form>

        </Card>
      </div>
    </div>
  );
}
