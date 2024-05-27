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
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link notifications-dropdown"
                                href="#"
                                id="notificationsDropDown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                3
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end notif-drop-menu"
                                aria-labelledby="notificationsDropDown"
                            >
                                <h6 className="dropdown-header">
                                    Notifications
                                </h6>
                                <a href="#">
                                    <div className="header-notif">
                                        <div className="notif-image">
                                            <span className="notification-badge bg-info text-white">
                                                <i className="fas fa-bullhorn"></i>
                                            </span>
                                        </div>
                                        <div className="notif-text">
                                            <p className="bold-notif-text">
                                                faucibus dolor in commodo lectus
                                                mattis
                                            </p>
                                            <small>19:00</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="header-notif">
                                        <div className="notif-image">
                                            <span className="notification-badge bg-primary text-white">
                                                <i className="fas fa-bolt"></i>
                                            </span>
                                        </div>
                                        <div className="notif-text">
                                            <p className="bold-notif-text">
                                                faucibus dolor in commodo lectus
                                                mattis
                                            </p>
                                            <small>18:00</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="header-notif">
                                        <div className="notif-image">
                                            <span className="notification-badge bg-success text-white">
                                                <i className="fas fa-at"></i>
                                            </span>
                                        </div>
                                        <div className="notif-text">
                                            <p>
                                                faucibus dolor in commodo lectus
                                                mattis
                                            </p>
                                            <small>yesterday</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="header-notif">
                                        <div className="notif-image">
                                            <span className="notification-badge">
                                                <img
                                                    src="../../assets/images/avatars/profile-image.png"
                                                    alt=""
                                                />
                                            </span>
                                        </div>
                                        <div className="notif-text">
                                            <p>
                                                faucibus dolor in commodo lectus
                                                mattis
                                            </p>
                                            <small>yesterday</small>
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="header-notif">
                                        <div className="notif-image">
                                            <span className="notification-badge">
                                                <img
                                                    src="../../assets/images/avatars/profile-image.png"
                                                    alt=""
                                                />
                                            </span>
                                        </div>
                                        <div className="notif-text">
                                            <p>
                                                faucibus dolor in commodo lectus
                                                mattis
                                            </p>
                                            <small>yesterday</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link profile-dropdown"
                                href="#"
                                id="profileDropDown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="../../assets/images/avatars/profile-image.png"
                                    alt=""
                                />
                            </a>
                            <div
                                className="dropdown-menu dropdown-menu-end profile-drop-menu"
                                aria-labelledby="profileDropDown"
                            >
                                <a className="dropdown-item" href="#">
                                    <i data-feather="user"></i>Profile
                                </a>

                                <a className="dropdown-item" href="#">
                                    <i data-feather="check-circle"></i>Tasks
                                </a>
                                <div className="dropdown-divider"></div>

                                <Link
                                    className="dropdown-item"
                                    href="/logout"
                                    method="post"
                                    as="button"
                                >
                                    <i data-feather="log-out"></i>Logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
