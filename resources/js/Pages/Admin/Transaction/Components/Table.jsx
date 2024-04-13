import { useMemo } from "react";

import { Box } from "@mantine/core";
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
                header: "Berat (KG)",
            },

            {
                accessorKey: "status",
                header: "Status",
                Cell: ({ cell }) => (
                    <Box
                        sx={(theme) => ({
                            backgroundColor:
                                cell.getValue() === "canceled"
                                    ? theme.colors.red[7]
                                    : cell.getValue() === "unpaid"
                                    ? theme.colors.gray[6]
                                    : cell.getValue() === "rejected"
                                    ? theme.colors.red[9]
                                    : cell.getValue() === "processed"
                                    ? theme.colors.yellow[7]
                                    : cell.getValue() === "shipped"
                                    ? theme.colors.blue[7]
                                    : theme.colors.green[7],
                            borderRadius: "4px",
                            color: "#fff",
                            maxWidth: "10ch",

                            textAlign: "center",
                            padding: "4px",
                        })}
                    >
                        {cell.getValue()}
                    </Box>
                ),
            },

            {
                accessorKey: "delivery_code",
                header: "No Resi",
            },

            {
                accessorKey: "shipping_cost",
                header: "Biaya Kirim",
                Cell: ({ cell }) => (
                    <Box
                        sx={(theme) => ({
                            fontSize: "1rem",
                            fontWeight: "500",
                        })}
                    >
                        {cell
                            .getValue()
                            ?.toLocaleString?.("en-US", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                            })
                            .replace("IDR", "Rp")}
                    </Box>
                ),
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
