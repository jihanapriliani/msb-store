import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

import { router } from "@inertiajs/react";

const Example = (props) => {
    const { data } = props;

    console.log(data);

    const columns = useMemo(
        () => [
            {
                accessorKey: "name",
                header: "Nama",
            },
            {
                accessorKey: "price",
                header: "Harga",
            },
            {
                accessorKey: "stock",
                header: "Stok",
            },
            {
                accessorKey: "category.display_name",
                header: "Kategori",
            },
            {
                accessorKey: "unit_weight",
                header: "Unit Weight",
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
    });

    return <MantineReactTable table={table} />;
};

export default Example;
