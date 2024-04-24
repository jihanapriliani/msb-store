import React from "react";

import { useState } from "react";
import { Link } from "@inertiajs/react";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import "../../../assets/authenticated-layout/plugins/bootstrap/css/bootstrap.min.css";
import "../../../assets/authenticated-layout/css/main.min.css";
import "../../../assets/authenticated-layout/css/custom.css";

export default function AuthenticatedLayout({ user, header, children }) {
    return (
        <div className="page-container">
            <Header></Header>

            <Sidebar></Sidebar>

            <div className="page-content">
                <div className="main-wrapper">{children}</div>
            </div>
        </div>
    );
}
