import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";
import React, { useState, useEffect } from "react";

import { Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { route } from "ziggy-js";

export default function Index(props) {
    const { transactions } = props;

    console.log("isi user", transactions);

    const [searchTerm, setSearchTerm] = useState("");

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, [transactions]);

    const totalSpent = (transaction) =>
        transaction.transaction_details.reduce((accumulator, detail) => {
            return accumulator + detail.amount * detail.actual_price;
        }, 0);

    return (
        <AuthenticatedUserLayout>
            <ToastContainer />
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Pesanan Saya</h1>

                <div>
                    <input
                        type="search"
                        name=""
                        id=""
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="outline-none p-3 mr-7 rounded-xl text-lg text-gray-700"
                        placeholder="search ..."
                    />
                </div>
            </div>

            <div>
                <button className="btn btn-primary">Semua</button>
                <button className="btn btn-secondary">Belum Dibayar</button>
                <button className="btn btn-secondary">Diproses</button>
                <button className="btn btn-secondary">Dikirim</button>
                <button className="btn btn-secondary">Selesai</button>
                <button className="btn btn-secondary">Dibatalkan</button>
            </div>

            <div className="flex flex-wrap justify-evenly mt-6">
                {transactions.transactions.map((transaction, index) => (
                    <div
                        className="p-5 shadow-sm rounded-2xl w-full bg-white"
                        key={index}
                    >
                        <div className="flex gap-4 flex-col">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <h5 class="text-2xl">{transaction.code}</h5>
                                    <span className="text-white bg-yellow-500 rounded-xl text-sm px-2 py-1">
                                        {transaction.status}
                                    </span>
                                </div>
                                <Link
                                    href={route("transactions.show", {
                                        id: transaction.id,
                                    })}
                                    className="text-primary"
                                >
                                    Lihat Detail Pesanan
                                </Link>
                            </div>

                            <div className="flex justify-between items-end">
                                <div className="flex flex-col gap-3">
                                    {transaction.transaction_details.map(
                                        (detail, index) =>
                                            index < 2 && (
                                                <div
                                                    key={index}
                                                    className="flex gap-3"
                                                >
                                                    <img
                                                        className="rounded-xl w-12 h-12 object-cover"
                                                        src="https://plus.unsplash.com/premium_photo-1677009540642-3fa90a20a88a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                        alt="Card image cap"
                                                    />

                                                    <div>
                                                        <h4 className="text-lg">
                                                            {
                                                                detail.product
                                                                    .name
                                                            }
                                                        </h4>
                                                        <p>
                                                            {detail.amount} x Rp{" "}
                                                            {detail.actual_price.toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                    )}
                                </div>
                                <h3 className="text-2xl text-end">
                                    Total Belanja <br />
                                    Rp{" "}
                                    {totalSpent(transaction).toLocaleString()}
                                    <br />
                                    <span className="text-sm">
                                        *Belum termasuk ongkir
                                    </span>
                                </h3>
                            </div>

                            {transaction.transaction_details.length > 2 && (
                                <p>
                                    {transaction.transaction_details.length - 2}{" "}
                                    Item Lain
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedUserLayout>
    );
}
