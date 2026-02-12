import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PriorityBadge = ({ priority = "Low", className }) => {
  // 1. Normalisasi input (Case Insensitive)
  const normalizedPriority = priority?.toLowerCase() || "low";

  // 2. Mapping Style STRICT sesuai config tailwind Anda.
  // Teknik "Expensive Look": Gunakan opacity (/10 untuk bg, /20 untuk border)
  // agar warnanya turunan langsung dari warna utama.
  const styles = {
    high: "bg-status-erorr/10 text-status-erorr border-status-erorr/20 hover:bg-status-erorr/20",
    medium: "bg-status-proses/10 text-status-proses border-status-proses/20 hover:bg-status-proses/20",
    low: "bg-status-info/10 text-status-info border-status-info/20 hover:bg-status-info/20",

    // Fallback menggunakan warna gray standar Anda
    default: "bg-app-gray/10 text-app-gray border-app-gray/20 hover:bg-app-gray/20",
  };

  // Pilih style, fallback ke default jika typo
  const activeStyle = styles[normalizedPriority] || styles.default;

  return (
    <Badge
      variant="outline"
      className={cn(
        // Base Layout
        "px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider border transition-colors cursor-default",
        // Active Color Style (Strict Theme)
        activeStyle,
        // Override Class
        className
      )}
    >
      {priority}
    </Badge>
  );
};

export default PriorityBadge;
