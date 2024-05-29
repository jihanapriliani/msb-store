import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useEffect } from "react";

import { Link, usePage } from "@inertiajs/react";

import Table from "./Components/Table";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Swal from "sweetalert2";

export default function Index(props) {
    const { users } = props;

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }

        if (flash.error) {
            toast.error(flash.error, {
                position: "top-right",
            });

            flash.error = null;
        }
    }, [users]);

    return (
        <AuthenticatedLayout>
            <ToastContainer />
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen User</h1>

                <div>
                    <Link
                        href={route("user.create")}
                        className="bg-blue-600 text-white p-3 rounded-xl"
                    >
                        Tambah Data
                    </Link>
                </div>
            </div>
            <Table data={users}></Table>
        </AuthenticatedLayout>
    );
}
