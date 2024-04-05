import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

import { Link, router } from "@inertiajs/react";

const Example = (props) => {
    const { data } = props;

    console.log(data);

    const columns = useMemo(
        () => [
            {
                accessorKey: "code",
                header: "No Transaksi",
            },
            {
                accessorKey: "user.fullname",
                header: "User",
            },
            {
                accessorKey: "user_address.address",
                header: "Alamat",
            },

            {
                accessorKey: "total_weight",
                header: "Berat",
            },

            {
                accessorKey: "delivery_code",
                header: "No Resi",
            },
            {
                accessorKey: "shipping_cost",
                header: "Ongkir",
            },

            {
                accessorKey: "status",
                header: "Status",
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
                    className="text-white bg-yellow-500 p-1 px-2 rounded-lg text-center"
                    href={route("transaction.edit", row.original.id)}
                >
                    Update
                </Link>

                <Link
                    className="text-white bg-blue-500 p-1 px-2 rounded-lg"
                    href={route("transaction.show", row.original.id)}
                >
                    Detail
                </Link>
            </div>
        ),
    });

    return <MantineReactTable table={table} />;
};

export default Example;
