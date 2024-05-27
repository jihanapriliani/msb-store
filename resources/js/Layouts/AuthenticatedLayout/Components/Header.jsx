import { Link } from "@inertiajs/react";
import React from "react";

import { HiLogout } from "react-icons/hi";

export default function Header() {
    return (
        <div className="page-header">
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                <div className="" id="navbarNav">
                    <ul className="navbar-nav" id="leftNav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="sidebar-toggle"
                                href="#"
                            >
                                <i data-feather="arrow-left"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <a className="navbar-brand" href="index.html"></a>
                </div>
                <div className="" id="headerNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link search-dropdown"
                                href="#"
                                id="searchDropDown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i data-feather="search"></i>
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end dropdown-lg search-drop-menu"
                                aria-labelledby="searchDropDown"
                            >
                                <form>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Type something.."
                                        aria-label="Search"
                                    />
                                </form>
                                <h6 className="dropdown-header">
                                    Recent Searches
                                </h6>
                                <a className="dropdown-item" href="#">
                                    charts
                                </a>
                                <a className="dropdown-item" href="#">
                                    new orders
                                </a>
                                <a className="dropdown-item" href="#">
                                    file manager
                                </a>
                                <a className="dropdown-item" href="#">
                                    new users
                                </a>
                            </div>
                        </li>

                        <li>
                            <Link
                                href="/logout"
                                className="flex h-12 px-3 justify-center gap-1   rounded-lg bg-[#5483b1]"
                            >
                                <p className="text-white">Logout</p>
                                <HiLogout className="h-7 w-7 text-white" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
