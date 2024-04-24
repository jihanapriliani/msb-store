import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";
import React, { useState, useEffect } from "react";

import { Link, router } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { route } from "ziggy-js";

export default function Show(props) {
    const { transaction } = props;

    console.log(transaction);

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, [transaction]);

    const totalSpent = (transaction) =>
        transaction.transaction_details.reduce((accumulator, detail) => {
            return accumulator + detail.amount * detail.actual_price;
        }, 0);

    return (
        <AuthenticatedUserLayout>
            <ToastContainer />

            <div className="mb-5 flex justify-between items-center">
                {" "}
                <div className="flex gap-2">
                    <h1 className="text-3xl block">
                        Pesanan {transaction.code}
                    </h1>
                    <span className="text-white bg-yellow-500 px-2 py-1 rounded-xl">
                        {transaction.status}
                    </span>
                </div>
            </div>

            <div className="py-8 px-6 bg-white rounded-xl mb-5 text-lg">
                <p className="text-xl font-medium mb-6">Progress Pesanan</p>

                <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse ">
                    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
                        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                            1
                        </span>
                        <span>
                            <h3 class="font-medium leading-tight">
                                Waktu Pemesanan
                            </h3>
                            <p class="text-sm">
                                {" "}
                                {new Date(
                                    transaction.created_at
                                ).toLocaleDateString()}
                            </p>
                        </span>
                    </li>
                    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            2
                        </span>
                        <span>
                            <h3 class="font-medium leading-tight">
                                Waktu Pembayaran
                            </h3>
                            <p class="text-sm">
                                {new Date(
                                    transaction.processed_at
                                ).toLocaleDateString()}{" "}
                            </p>
                        </span>
                    </li>
                    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            3
                        </span>
                        <span>
                            <h3 class="font-medium leading-tight">
                                Waktu Penggiriman
                            </h3>
                            <p class="text-sm">
                                {new Date(
                                    transaction.shipped_at
                                ).toLocaleDateString()}
                            </p>
                        </span>
                    </li>

                    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                            4
                        </span>
                        <span>
                            <h3 class="font-medium leading-tight">
                                Pesanan Diterima
                            </h3>
                            <p class="text-sm">Estimasi 3 - 5 Hari</p>
                        </span>
                    </li>
                </ol>
            </div>

            <div className="card p-4">
                <h3 className="text-xl font-medium">Alamat Pengiriman</h3>
                <p>
                    {transaction.user_address.address},{" "}
                    {transaction.user_address.zipcode}.
                </p>
            </div>

            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="card table-widget">
                        <div className="card-body">
                            <h5 className="text-xl font-medium px-6">
                                Rincian Barang
                            </h5>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Item</th>
                                            <th scope="col">Qty</th>
                                            <th
                                                scope="col"
                                                className="text-center"
                                            >
                                                Harga
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-end"
                                            >
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transaction.transaction_details.map(
                                            (detail, index) => (
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="flex"
                                                    >
                                                        <img
                                                            className="rounded-xl object-cover"
                                                            style={{
                                                                width: "75px",
                                                                height: "75px",
                                                            }}
                                                            src="https://plus.unsplash.com/premium_photo-1677009540642-3fa90a20a88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                            alt="Card image cap"
                                                        />

                                                        <p className="text-lg font-medium">
                                                            {
                                                                detail.product
                                                                    .name
                                                            }
                                                        </p>
                                                    </th>
                                                    <td>{detail.amount}</td>
                                                    <td className="text-center">
                                                        Rp{" "}
                                                        {detail.actual_price.toLocaleString()}
                                                    </td>
                                                    <td className="text-end">
                                                        Rp{" "}
                                                        {(
                                                            detail.amount *
                                                            detail.actual_price
                                                        ).toLocaleString()}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-6 text-end">
                                <p className="text-lg font-semibold">
                                    Subtotal Barang : Rp{" "}
                                    {totalSpent(transaction).toLocaleString()}
                                </p>
                                <p className="text-lg font-semibold">
                                    Subtotal Pengiriman : Rp{" "}
                                    {transaction.shipping_cost.toLocaleString()}
                                </p>

                                <br />

                                <p className="text-xl font-semibold">
                                    Total Pesanan : Rp{" "}
                                    {(
                                        totalSpent(transaction) +
                                        transaction.shipping_cost
                                    ).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {transaction.status === "unpaid" && (
                <div className="bg-white rounded-xl p-4 flex gap-2 justify-end">
                    <button className="btn btn-danger w-60">
                        Batalkan Pesanan
                    </button>
                    <Link
                        href={route("checkout")}
                        method="post"
                        data={{
                            transaction_id: transaction.id,
                            total_price:
                                totalSpent(transaction) +
                                transaction.shipping_cost,
                        }}
                        className="btn btn-primary w-60"
                    >
                        Bayar Sekarang
                    </Link>
                </div>
            )}

            {transaction.status === "shipped" && (
                <div className="bg-white rounded-xl p-4 flex gap-2 justify-end">
                    <button className="btn btn-danger w-60">
                        Pesanan Belum Diterima
                    </button>
                    <button className="btn btn-primary w-60">
                        Pesanan Selesai
                    </button>
                </div>
            )}
        </AuthenticatedUserLayout>
    );
}
