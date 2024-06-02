import React from "react";

import { useState } from "react";
import { Link } from "@inertiajs/react";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import "../../../assets/authenticated-layout/plugins/bootstrap/css/bootstrap.min.css";
import "../../../assets/authenticated-layout/css/main.min.css";
import "../../../assets/authenticated-layout/css/custom.css";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthenticatedLayout({ user, header, children }) {
    const { flash } = usePage().props;
    console.log(flash);

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
    }, [flash]);
    return (
        <div className="page-container">
            <ToastContainer />

            <Header></Header>

            <Sidebar></Sidebar>

            <div className="page-content">
                <div className="main-wrapper">{children}</div>
            </div>
        </div>
    );
}
