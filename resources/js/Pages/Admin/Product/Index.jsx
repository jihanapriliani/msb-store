import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

import { Link } from "@inertiajs/react";

import Table from "./Components/Table";

export default function Index(props) {
    const { products } = props;

    return (
        <AuthenticatedLayout>
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
