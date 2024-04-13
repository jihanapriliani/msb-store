import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Box } from "@mantine/core";

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
                    route("product.destroy", {
                        id: row.original.id,
                    })
                );
            }
        });
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: "name",
                header: "Nama",
            },
            {
                accessorKey: "price",
                header: "Harga",
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

            {
                accessorKey: "category.display_name",
                header: "Kategori",
            },
            {
                accessorKey: "stock",
                header: "Stok",
                Cell: ({ cell }) => (
                    <Box
                        sx={(theme) => ({
                            color:
                                cell.getValue() < 20
                                    ? theme.colors.red[9]
                                    : cell.getValue() >= 20 &&
                                      cell.getValue() < 50
                                    ? theme.colors.yellow[9]
                                    : theme.colors.green[9],
                            fontSize: "1rem",
                            fontWeight: "600",
                        })}
                    >
                        {cell.getValue()}
                    </Box>
                ),
            },
            {
                accessorKey: "unit_weight",
                header: "Berat Barang (KG)",
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data,
        createDisplayMode: "modal", //default ('row', and 'custom' are also available)
        editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
        positionActionsColumn: "last",
        enableRowActions: true,
        renderRowActions: ({ row }) => (
            <div
                className="flex items-center justify-center
            gap-2"
            >
                <Link
                    className="text-white bg-yellow-500 p-1 px-2 rounded-lg"
                    href={route("product.edit", row.original.id)}
                >
                    Edit
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
