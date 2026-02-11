import {
    Table,
    TableBody,
} from "@/components/ui/table";

import UsersRow from "./UsersRow";
import { usersData } from "./usersData";

const UsersTable = () => {
    return (
        <div className="bg-white rounded-4xl p-6 flex-1">
            {/* Header tabel dengan background biru */}
            <div className="bg-white text-black font-medium rounded-t-4xl">
                <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr_120px] gap-4 font-medium px-4 py-3">
                    <div>ID</div>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Role</div>
                    <div>Create date</div>
                    <div>Action</div>
                </div>
            </div>

            {/* Container tabel */}
            <div className="bg-[#E8F1FA] rounded-b-4xl overflow-hidden">
                <Table>
                    {/* Body tabel */}
                    <TableBody>
                        {usersData.map((user) => (
                            <UsersRow key={user.id} user={user} />
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default UsersTable;
