import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

import { Link, router } from "@inertiajs/react";

import Table from "./Components/Table";

export default function Index(props) {
    const { transactions } = props;

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Riwayat Transaksi</h1>
            </div>
            <Table data={transactions}></Table>
        </AuthenticatedLayout>
    );
}
