import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const UsersRow = ({ user }) => {
    return (
        <TableRow className="border-b border-white hover:bg-[#D5E5F5]">
            <TableCell className="p-0">
                <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr_120px] gap-4 items-center px-4 py-3">
                    {/* ID */}
                    <div>{user.id}</div>

                    {/* Nama */}
                    <div>{user.name}</div>

                    {/* Email */}
                    <div className="underline">{user.email}</div>

                    {/* Role */}
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="p-0 h-auto hover:bg-transparent justify-start">
                                    {user.role}
                                    <ChevronDown className="w-4 h-4 ml-2" />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuItem>Project Manager</DropdownMenuItem>
                                <DropdownMenuItem>Team Member</DropdownMenuItem>
                                
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Create date */}
                    <div>{user.createDate}</div>

                    {/* Action */}
                    <div className="flex gap-2">
                        <Button variant="link" className="p-0 text-blue-600">
                            Edit
                        </Button>
                        <Button variant="link" className="p-0 text-red-600">
                            Delete
                        </Button>
                    </div>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default UsersRow;
