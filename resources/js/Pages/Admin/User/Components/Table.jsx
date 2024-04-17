import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

import { Link, router } from "@inertiajs/react";

import Swal from "sweetalert2";

const Example = (props) => {
    const { data } = props;

    const handleDelete = (row) => {
        Swal.fire({
            title: "Yakin ingin menghapus?",
            text: "Aksi berikut tidak bisa mengembalikan data!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "gray",
            confirmButtonText: "Hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(
                    route("user.destroy", {
                        id: row.original.id,
                    })
                );
            }
        });
    };

    console.log(data);

    const columns = useMemo(
        () => [
            {
                accessorKey: "fullname",
                header: "Nama Lengkap",
            },
            {
                accessorKey: "username",
                header: "Username",
            },
            {
                accessorKey: "phone",
                header: "No Telp",
            },

            {
                accessorKey: "email",
                header: "Email",
            },

            {
                accessorFn: (row) => {
                    const verifiedDate = new Date(row.email_verified_at);
                    if (verifiedDate.getTime() === 0) {
                        return "Belum verifikasi";
                    } else {
                        return verifiedDate.toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });
                    }
                },
                header: "Verifikasi Email",
            },
        ],

        []
    );

    const table = useMantineReactTable({
        columns,
        data,
        createDisplayMode: "modal", //default ('row', and 'custom' are also available)
        editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
        enableEditing: true,
        positionActionsColumn: "last",
        enableRowActions: true,
        renderRowActions: ({ row }) => (
            <div
                className="flex items-center justify-center
            gap-2"
            >
                <Link
                    className="text-white bg-yellow-500 p-1 px-2 rounded-lg"
                    href={route("user.edit", row.original.id)}
                >
                    Edit
                </Link>

                <Link
                    className="text-white bg-gray-500 p-1 px-2 rounded-lg"
                    href={route("user.show", row.original.id)}
                >
                    Detail
                </Link>

                <button
                    onClick={() => handleDelete(row)}
                    className="text-white bg-red-500 p-1 px-2 rounded-lg"
                >
                    Delete
                </button>
            </div>
        ),
    });

    return <MantineReactTable table={table} />;
};

export default Example;
