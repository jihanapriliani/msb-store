import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {
    const { url } = usePage();

    const isUrlActive = (href) => url.toString().includes(href);

    return (
        <div className="page-sidebar">
            <ul className="list-unstyled accordion-menu">
                <li className="sidebar-title">Main</li>
                <li className={isUrlActive("/dashboard") ? "active-page" : ""}>
                    <Link href="/dashboard">
                        <i data-feather="home"></i>Dashboard
                    </Link>
                </li>
                <li className="sidebar-title">Data Masters</li>
                <li className={isUrlActive("/category") ? "active-page" : ""}>
                    <Link href="/dashboard/admin/category">
                        <i data-feather="inbox"></i>Categories
                    </Link>
                </li>
                <li className={isUrlActive("/product") ? "active-page" : ""}>
                    <Link href="/dashboard/admin/product">
                        <i data-feather="inbox"></i>Products
                    </Link>
                </li>
                <li
                    className={isUrlActive("/transaction") ? "active-page" : ""}
                >
                    <Link href="/dashboard/admin/transaction">
                        <i data-feather="calendar"></i>Transactions
                    </Link>
                </li>
                <li className={isUrlActive("/user") ? "active-page" : ""}>
                    <Link href="/dashboard/admin/user">
                        <i data-feather="user"></i>Users
                    </Link>
                </li>
            </ul>
        </div>
    );
}
