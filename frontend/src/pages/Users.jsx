import React from "react";
import UsersHeader from "@/components/fragments/users/UsersHeader";
import UsersTable from "@/components/fragments/users/UsersTable";

const Users = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* BAGIAN 1: USERS HEADER */}
            {/* Judul halaman + action (search / add user) */}
            <UsersHeader />

            {/* BAGIAN 2: USERS TABLE */}
            {/* Tabel daftar user */}
            <UsersTable />
        </div>
    );
};

export default Users;
