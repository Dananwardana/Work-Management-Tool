import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const UsersHeader = () => {
    return (
        <div className="flex items-center justify-between">
            {/* Judul halaman */}
            <h1 className="text-4xl font-bold text-gray-900">Users</h1>

            {/* Tombol tambah user */}
            <Button className="h-auto px-6 py-3 rounded-full bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100">
                <Plus className="w-5 h-5 mr-2" />
                Add New
            </Button>
        </div>
    );
};

export default UsersHeader;
