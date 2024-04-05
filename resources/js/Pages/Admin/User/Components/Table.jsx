import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

import { Link, router } from "@inertiajs/react";

const Example = (props) => {
    const { data } = props;

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
                accessorKey: "roles.0.name",
                header: "Role",
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

                <button
                    onClick={() => {
                        router.delete(
                            route("user.destroy", {
                                id: row.original.id,
                            })
                        );
                    }}
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
