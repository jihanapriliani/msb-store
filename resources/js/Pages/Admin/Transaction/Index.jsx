import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useEffect } from "react";

import { usePage } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Table from "./Components/Table";

export default function Index(props) {
    const { transactions } = props;

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, []);

    return (
        <AuthenticatedLayout>
            <ToastContainer />
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Riwayat Transaksi</h1>
            </div>
            <Table data={transactions}></Table>
        </AuthenticatedLayout>
    );
}
