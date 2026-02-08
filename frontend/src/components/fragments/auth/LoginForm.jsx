import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseButton } from "@/components/ui/BaseButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navigate("/dashboard");
        }, 1500);
    };

    return (
        // FORM CARD:
        <Card className="w-full max-w-100 bg-brand-support/90 backdrop-blur-sm border-white/20 shadow-2xl rounded-[40px] overflow-hidden">
            <CardContent className="p-8 lg:p-10">
                {/* Header */}
                <div className="flex flex-col items-center space-y-1 mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        Hi There!
                    </h1>
                    <p className="text-blue-50/80 text-sm font-medium">
                        Welcome back, please login.
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email */}
                    <div className="space-y-1.5">
                        <Label
                            htmlFor="email"
                            className="text-white font-semibold text-xs uppercase tracking-wider ml-1"
                        >
                            Email
                        </Label>
                        <div className="relative group">
                            <div className="absolute left-0 top-0 h-full w-12 flex items-center justify-center z-10 pointer-events-none">
                                <Mail className="h-5 w-5 text-brand-support" />
                            </div>
                            <Input
                                id="email"
                                type="email"
                                placeholder="your@gmail.com"
                                // Clean Input Style: Putih, rounded besar, tanpa border kasar
                                className="pl-12 h-12 rounded-2xl bg-white border-0 text-brand-deep placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-white/50 shadow-sm transition-all"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-1.5">
                        <Label
                            htmlFor="password"
                            className="text-white font-semibold text-xs uppercase tracking-wider ml-1"
                        >
                            Password
                        </Label>
                        <div className="relative group">
                            <div className="absolute left-0 top-0 h-full w-12 flex items-center justify-center z-10 pointer-events-none">
                                <Lock className="h-5 w-5 text-brand-support" />
                            </div>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="pl-12 pr-12 h-12 rounded-2xl bg-white border-0 text-brand-deep placeholder:text-gray-300 focus-visible:ring-2 focus-visible:ring-white/50 shadow-sm transition-all"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-0 top-0 h-full w-12 flex items-center justify-center text-brand-support hover:text-brand-deep transition-colors focus:outline-none bg-transparent border-none cursor-pointer"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5" />
                                ) : (
                                    <Eye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between pt-1 px-1">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                className="border-white/60 bg-white data-[state=checked]:bg-brand-deep data-[state=checked]:text-white rounded-md w-5 h-5"
                            />
                            <Label
                                htmlFor="remember"
                                className="text-sm text-white/90 font-medium cursor-pointer"
                            >
                                Remember me
                            </Label>
                        </div>
                        <a
                            href="#"
                            className="text-xs font-semibold text-white hover:text-blue-100 transition-colors"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Button */}
                    <BaseButton
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        className="w-full h-12 mt-4 text-sm uppercase tracking-widest shadow-brand-components/30"
                    >
                        LOGIN
                    </BaseButton>
                </form>
            </CardContent>
        </Card>
    );
}
