import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useEffect } from "react";

import { Link, router } from "@inertiajs/react";

import Table from "./Components/Table";

import { usePage } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index(props) {
    const { products } = props;

    const { flash } = usePage().props;

    console.log(flash);

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, [flash]);

    return (
        <AuthenticatedLayout>
            <ToastContainer />
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen Produk</h1>

                <div>
                    <Link
                        href={route("product.create")}
                        className="bg-blue-600 text-white p-3 rounded-xl"
                    >
                        Tambah Data
                    </Link>
                </div>
            </div>
            <Table data={products}></Table>
        </AuthenticatedLayout>
    );
}
