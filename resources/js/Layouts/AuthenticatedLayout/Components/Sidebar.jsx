import React from "react";

import { Link } from "@inertiajs/react";

export default function Sidebar() {
    return (
        <div className="page-sidebar">
            <ul className="list-unstyled accordion-menu">
                <li className="sidebar-title">Main</li>
                <li className="active-page">
                    <Link href="/dashboard">
                        <i data-feather="home"></i>Dashboard
                    </Link>
                </li>
                <li className="sidebar-title">Data Masters</li>
                <li>
                    <Link href="/category">
                        <i data-feather="inbox"></i>Categories
                    </Link>
                </li>
                <li>
                    <Link href="/product">
                        <i data-feather="inbox"></i>Products
                    </Link>
                </li>
                <li>
                    <Link href="/transaction">
                        <i data-feather="calendar"></i>Transactions
                    </Link>
                </li>
                <li>
                    <Link href="/user">
                        <i data-feather="user"></i>Users
                    </Link>
                </li>
            </ul>
        </div>
    );
}
