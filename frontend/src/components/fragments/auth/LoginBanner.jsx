import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginBanner() {
  return (
    <div className="flex flex-col items-center gap-4">

      {/* Image Container Card */}
      <Card className="w-full aspect-square max-w-90 bg-white rounded-[40px] border-0 shadow-2xl overflow-hidden flex items-center justify-center">
        <CardContent className=" flex items-center justify-center w-full h-full">
          {/* Ilustrasi */}
          <img
            src="https://png.pngtree.com/png-clipart/20221021/original/pngtree-financial-management-isolated-cartoon-vector-illustrations-png-image_8710638.png"
            alt="Professional workspace illustration"
            className="w-full h-full object-contain"
          />
        </CardContent>
      </Card>

      {/* Text Description */}
      <div className="text-center space-y-2 max-w-sm">
        <h2 className="text-2xl font-bold text-brand-deep tracking-tight">
          Empower Your Productivity
        </h2>
        <p className="text-brand-components text-md font-medium leading-relaxed opacity-90">
          Access your professional workspace and manage your projects with our streamlined tools.
        </p>
      </div>
    </div>
  );
}
