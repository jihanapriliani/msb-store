import { Link, router, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, Sidebar } from "flowbite-react";

import { Tabs } from "flowbite-react";
import UserSidebar from "@/Components/UserSidebar";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import InputError from "@/Components/InputError";

export default function Index({ user, addresses }) {
    console.log("ISI DARI DAFTAR USER", addresses);
    return (
        <GuestLayout>
            <main className="container flex justify-center gap-10  my-36">
                <UserSidebar />

                <div className="p-6 w-[100%]">
                    <h3 className="text-4xl">Alamat Saya</h3>
                    <p className="text-xl text-gray-500 mt-4">
                        Kelola informasi alamat anda untuk mengontrol dan
                        memudahkan proses transaksi.
                    </p>

                    <hr className="h-4 my-14 bg-gray-300" />

                    <div className="w-100 flex justify-end">
                        <Link
                            href="/user-address/create"
                            className="bg-red-600 px-5 py-3 rounded-lg"
                        >
                            <p className="text-white text-xl">Tambah Alamat</p>
                        </Link>
                    </div>

                    {addresses.map((address, index) => (
                        <Card className="my-4" key={index}>
                            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                                {address.alias}
                            </h5>

                            <div className="flex justify-between">
                                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                                    {address.address}, {address.province_id},{" "}
                                    {address.city_id}, {address.district_id},{" "}
                                    {address.village_id}, {address.zipcode}.
                                </p>
                                <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
                                    <Link
                                        href={route(
                                            "profile.address.edit",
                                            address.id
                                        )}
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                                    >
                                        <div className="text-left">
                                            <div className="-mt-1 font-sans text-sm font-semibold">
                                                Ubah
                                            </div>
                                        </div>
                                    </Link>

                                    <Link
                                        href={route(
                                            "profile.address.delete",
                                            address.id
                                        )}
                                        method="delete"
                                        as="button"
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                                    >
                                        <div className="text-left">
                                            <div className="-mt-1 font-sans text-sm font-semibold">
                                                Hapus
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </GuestLayout>
    );
}
