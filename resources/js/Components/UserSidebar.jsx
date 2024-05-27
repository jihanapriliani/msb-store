import React from "react";

import { Sidebar } from "flowbite-react";
import { Link, usePage } from "@inertiajs/react";

import { HiUser, HiMap, HiCash, HiLogout } from "react-icons/hi";

export default function UserSidebar() {
    const { url } = usePage();

    const isActive = (href) => url.toString().includes(href);

    console.log(isActive("/user-settings"));

    return (
        <Sidebar
            aria-label="Default sidebar example"
            className="w-80"
            style={{ backgroundColor: "white" }}
        >
            <Sidebar.Items>
                <Sidebar.ItemGroup className="">
                    <img
                        src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                        alt=""
                    />
                    <Sidebar.Item href="#" className="text-2xl ">
                        <Link
                            href="/user-settings"
                            className={`flex items-center justify-start gap-3 ${
                                isActive("/user-settings")
                                    ? ".active-user-sidebar"
                                    : "text-gray-600"
                            }`}
                        >
                            <HiUser className="ml-2 h-7 w-7 text-gray-500" />
                            <p className="text-gray-600">Profil</p>
                        </Link>
                    </Sidebar.Item>

                    <Sidebar.Item href="#" className="text-2xl ">
                        <Link
                            href="/user-transaction"
                            className={`flex items-center justify-start gap-3 ${
                                isActive("/user-settings")
                                    ? ".active-user-sidebar"
                                    : "text-gray-600"
                            }`}
                        >
                            <HiCash className="ml-2 h-7 w-7 text-gray-500" />
                            <p className="text-gray-600">Pembelian</p>
                        </Link>
                    </Sidebar.Item>

                    <Sidebar.Item href="#" className="text-2xl ">
                        <Link
                            href="/user-address"
                            className={`flex items-center justify-start gap-3 ${
                                isActive("/user-settings")
                                    ? ".active-user-sidebar"
                                    : "text-gray-600"
                            }`}
                        >
                            <HiMap className="ml-2 h-7 w-7 text-gray-500" />
                            <p className="text-gray-600"> Alamat</p>
                        </Link>
                    </Sidebar.Item>

                    <Sidebar.Item href="#" className="text-2xl ">
                        <Link
                            href="/logout"
                            className={`flex items-center justify-start gap-3 ${
                                isActive("/logout")
                                    ? ".active-user-sidebar"
                                    : "text-gray-600"
                            }`}
                        >
                            <HiLockClosed className="ml-2 h-7 w-7 text-gray-500" />
                            <p className="text-gray-600"> Logout</p>
                        </Link>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
