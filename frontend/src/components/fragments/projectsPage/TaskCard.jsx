import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Pencil, Trash2, Calendar } from "lucide-react";
// Pastikan path import ini sesuai dengan struktur foldermu
import PriorityBadge from "@/components/fragments/global/PriorityBadge";

const TaskCard = ({ task }) => {
    return (
        <Card className="w-full bg-white border border-slate-200/60 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer rounded-lg">
            {/* Header: Priority Badge & Action Menu */}
            <CardHeader className="p-4 pb-0 flex flex-row items-start justify-between space-y-0">
                <PriorityBadge priority={task.priority} />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-app-gray/50 hover:text-brand-deep -mr-2"
                        >
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="w-32 border-slate-100 shadow-xl"
                    >
                        <DropdownMenuItem className="text-brand-deep cursor-pointer focus:bg-brand-secondary/20">
                            <Pencil className="mr-2 h-3.5 w-3.5" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-status-erorr focus:text-status-erorr focus:bg-status-erorr/10 cursor-pointer">
                            <Trash2 className="mr-2 h-3.5 w-3.5" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-4 flex flex-col gap-3">
                {/* Title */}
                <h4 className="font-sans text-brand-deep font-semibold text-sm leading-relaxed line-clamp-3 group-hover:text-brand-components transition-colors">
                    {task.title}
                </h4>

                {/* Footer: Date & Assignees (Tanpa Border Garis) */}
                <div className="flex items-center justify-between mt-2">
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-app-gray/70 text-[11px] font-medium bg-slate-50 px-2 py-1 rounded-md">
                        <Calendar className="w-3 h-3" />
                        <span>{task.date || "No Date"}</span>
                    </div>

                    {/* Avatar Stack */}
                    <div className="flex -space-x-2 pl-2">
                        {task.assignees?.map((user, index) => (
                            <Avatar
                                key={index}
                                className="w-6 h-6 ring-2 ring-white cursor-pointer hover:z-10 transition-transform hover:scale-110"
                            >
                                <AvatarImage
                                    src={user.src}
                                    className="object-cover"
                                />
                                <AvatarFallback className="bg-brand-secondary text-[8px] text-brand-components font-extrabold">
                                    {user.name?.substring(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
