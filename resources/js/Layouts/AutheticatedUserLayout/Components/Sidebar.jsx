import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function Sidebar() {
    const { url } = usePage();

    const isUrlActive = (href) => url.toString().includes(href);

    return (
        <div className="page-sidebar">
            <ul className="list-unstyled accordion-menu">
                <li className="sidebar-title">Main</li>
                <li>
                    <Link href="/dashboard/user">
                        <i data-feather="home"></i>Dashboard
                    </Link>
                </li>

                <li
                    className={isUrlActive("/transaction") ? "active-page" : ""}
                >
                    <Link href="/dashboard/user/transactions">
                        <i data-feather="inbox"></i>Transactions
                    </Link>
                </li>
                <li className={isUrlActive("/profile") ? "active-page" : ""}>
                    <Link href="/dashboard/user/profile">
                        <i data-feather="inbox"></i>Profile
                    </Link>
                </li>
            </ul>
        </div>
    );
}
