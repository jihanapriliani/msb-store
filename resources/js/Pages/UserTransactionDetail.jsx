import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Tabs } from "flowbite-react";

import TransactionCard from "@/Components/TransactionCard";
import UserSidebar from "@/Components/UserSidebar";
import { Link, router } from "@inertiajs/react";

import { Button, Timeline } from "flowbite-react";
import {
    HiArrowNarrowLeft,
    HiCalendar,
    HiPhone,
    HiHome,
    HiBookmark,
} from "react-icons/hi";
import { useEffect } from "react";

import Swal from "sweetalert2";

export default function Index({ user, transaction }) {
    console.log("ISI TRANSACTION", transaction);

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (transaction.status === "shipped" && transaction.shipped_at) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [transaction]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        };
        return date.toLocaleDateString("id-ID", options);
    };

    const handleCompleteTransaction = () => {
        router.post(
            route("transactions.update", transaction.id),
            {
                _method: "put",
                id: transaction.id,
            },
            {
                forceFormData: true,
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Terima Kasih!",
                        text: "terima kasih sudah bertransaksi.",
                        confirmButtonText: "Oke",
                        customClass: {
                            confirmButton: "swal2-confirm",
                        },
                    });
                },
                onError: (e) => {
                    console.log(e);
                    if (e.errors) {
                        form.errors(e.errors);
                    }
                },
            }
        );
    };

    const handlePayment = () => {
        if (transaction.payment_url) {
            window.location.href = transaction.payment_url;
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Link pembayaran tidak tersedia.",
                confirmButtonText: "Oke",
                customClass: {
                    confirmButton: "swal2-confirm",
                },
            });
        }
    };

    const handleCancleTransaction = () => {
        router.post(
            route("transactions.cancel", transaction.id),
            {
                _method: "put",
                id: transaction.id,
            },
            {
                forceFormData: true,
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Pesanan Dibatalkan!",
                        text: "Berhasil membatalkan pesanan.",
                        confirmButtonText: "Oke",
                        customClass: {
                            confirmButton: "swal2-confirm",
                        },
                    });
                },
                onError: (e) => {
                    console.log(e);
                    if (e.errors) {
                        form.errors(e.errors);
                    }
                },
            }
        );
    };

    return (
        <GuestLayout>
            <main className="container flex gap-10 my-36 min-h-[20vh]">
                <UserSidebar />

                <div className="w-100">
                    <div className="flex justify-between w-[100%]">
                        <Link
                            href="/user-transaction"
                            className="flex items-center gap-3"
                        >
                            <HiArrowNarrowLeft className="ml-2 h-10 w-10" />
                            <p className="text-2xl text-gray-700">Kembali</p>
                        </Link>

                        <div>
                            <p className="text-uppercase text-2xl text-gray-600">
                                NO. PESANAN {transaction.code} |{" "}
                                <span className="p-2 bg-gray-700 text-lg text-white rounded-full">
                                    {transaction.status}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 mb-12  w-100 p-8 px-10 border border-gray-200 shadow-sm rounded-xl">
                        <div className="text-end">
                            <h4 className="text-3xl">JNE Express</h4>
                            <h5 className="text-2xl text-gray-600">
                                No. Resi : {"  "}
                                {transaction.delivery_code
                                    ? transaction.delivery_code
                                    : "Belum Ada"}
                            </h5>
                        </div>
                        <div className="flex w-100 gap-6">
                            <div className="flex-1">
                                <h2 className="flex gap-2 items-center text-red-500">
                                    <HiHome className="ml-2 h-6 w-6 text-gray" />
                                    <span className="text-4xl">
                                        Alamat Pengiriman
                                    </span>
                                </h2>
                                <h5 className="text-xl text-gray-400">
                                    (+62) 895635766855
                                </h5>
                                <p className="text-2xl font-bold text-gray-500">
                                    {transaction.user_address.alias}
                                </p>
                                <p className="text-2xl text-gray-600 max-w-2xl">
                                    {transaction.user_address.address},{" "}
                                    {transaction.user_address.province_id},{" "}
                                    {transaction.user_address.city_id},{" "}
                                    {transaction.user_address.district_id},{" "}
                                    {transaction.user_address.village_id},{" "}
                                    {transaction.user_address.zipcode}.
                                </p>

                                <h2 className="mt-20 flex gap-2 items-center text-red-500">
                                    <HiBookmark className="ml-2 h-6 w-6 text-gray" />
                                    <span className="text-4xl">Catatan</span>
                                </h2>

                                <p className="text-2xl text-gray-600 max-w-2xl">
                                    {transaction.note ?? "Tidak Ada"}
                                </p>
                            </div>

                            <div className="flex-1 ">
                                <Timeline>
                                    <Timeline.Item>
                                        <Timeline.Point icon={HiCalendar} />
                                        <Timeline.Content>
                                            <Timeline.Title className="text-3xl">
                                                Pesanan Dibuat
                                            </Timeline.Title>
                                            <Timeline.Time className="text-xl text-gray-600">
                                                {formatDate(
                                                    transaction.created_at
                                                )}
                                            </Timeline.Time>
                                            <Timeline.Body className="text-2xl">
                                                Pesanan Dibuat
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Timeline.Point icon={HiCalendar} />
                                        <Timeline.Content>
                                            <Timeline.Title className="text-3xl">
                                                Pesanan Dibayar
                                            </Timeline.Title>
                                            <Timeline.Time className="text-xl text-gray-600">
                                                {transaction.processed_at
                                                    ? formatDate(
                                                          transaction.processed_at
                                                      )
                                                    : "-"}
                                            </Timeline.Time>
                                            <Timeline.Body className="text-2xl">
                                                Pesanan Dibayar
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item>
                                        <Timeline.Point icon={HiCalendar} />
                                        <Timeline.Content>
                                            <Timeline.Title className="text-3xl">
                                                Pesanan Dikirim
                                            </Timeline.Title>
                                            <Timeline.Time className="text-xl text-gray-600">
                                                {transaction.shipped_at
                                                    ? formatDate(
                                                          transaction.shipped_at
                                                      )
                                                    : "-"}{" "}
                                            </Timeline.Time>
                                            <Timeline.Body className="text-2xl">
                                                Admin telah mengatur pesanan.
                                                Menunggu pesanan diserahkan ke
                                                pihak jasa kirim.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>
                                    <Timeline.Item>
                                        <Timeline.Point icon={HiCalendar} />
                                        <Timeline.Content>
                                            <Timeline.Title className="text-3xl">
                                                Pesanan Diterima
                                            </Timeline.Title>
                                            <Timeline.Time className="text-xl text-gray-600">
                                                {transaction.accepted_at
                                                    ? formatDate(
                                                          transaction.accepted_at
                                                      )
                                                    : "-"}
                                            </Timeline.Time>
                                            <Timeline.Body className="text-2xl">
                                                Pesanan telah Sampai ke Alamat
                                                Pengguna.
                                            </Timeline.Body>
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    {transaction.status === "canceled" && (
                                        <Timeline.Item>
                                            <Timeline.Point icon={HiCalendar} />
                                            <Timeline.Content>
                                                <Timeline.Title className="text-3xl">
                                                    Pesanan Dibatalkan
                                                </Timeline.Title>
                                                <Timeline.Time className="text-xl text-gray-600">
                                                    {transaction.canceled_at
                                                        ? formatDate(
                                                              transaction.accepted_at
                                                          )
                                                        : "-"}
                                                </Timeline.Time>
                                                <Timeline.Body className="text-2xl">
                                                    Pesanan dibatalkan.
                                                </Timeline.Body>
                                            </Timeline.Content>
                                        </Timeline.Item>
                                    )}
                                </Timeline>
                            </div>
                        </div>
                    </div>

                    <div className=" w-100 p-8 my-12 px-10 border border-gray-200 shadow-sm rounded-xl">
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                {transaction.transaction_details.map(
                                    (detail, index) => (
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="shrink-0">
                                                    <img
                                                        alt="Neil image"
                                                        height="64"
                                                        src={
                                                            window.location
                                                                .origin +
                                                            "/" +
                                                            (detail.product
                                                                .images[0]
                                                                .image ??
                                                                "assets/images/default.png")
                                                        }
                                                        width="64"
                                                        className="rounded-xl"
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-gray-800 font-bold dark:text-white text-2xl">
                                                        {detail.product.name}
                                                    </p>
                                                    <p className="truncate text-xl text-gray-500 dark:text-gray-400">
                                                        Rp{" "}
                                                        {detail.actual_price.toLocaleString()}{" "}
                                                        x {detail.amount}
                                                    </p>
                                                </div>
                                                <div className="inline-flex items-center  font-semibold text-gray-800 text-2xl dark:text-white">
                                                    Rp{" "}
                                                    {(
                                                        detail.actual_price *
                                                        detail.amount
                                                    ).toLocaleString()}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>

                            <hr className="h-4 bg-gray-300" />

                            <div className="flex items-end flex-col w-100">
                                <div className="text-2xl my-2  text-gray-500 w-[30%] flex  justify-between items-center">
                                    <p className="flex-1 text-2xl flex justify-end">
                                        Biaya Kirim
                                    </p>

                                    <p className="flex-1 flex justify-end ml-4">
                                        Rp{" "}
                                        {transaction.shipping_cost.toLocaleString()}
                                    </p>
                                </div>

                                <div className="text-2xl my-2  text-gray-500 w-[30%]   flex justify-between items-center">
                                    <p className="flex-1 text-2xl flex justify-end">
                                        Total Belanja
                                    </p>

                                    <p className="flex-1 flex justify-end ml-4">
                                        Rp{" "}
                                        {transaction.total_price.toLocaleString()}
                                    </p>
                                </div>

                                <div className="text-2xl text-gray-500  w-[30%] flex justify-between items-center">
                                    <p className="flex-1 text-2xl flex justify-end">
                                        Total Pesanan
                                    </p>
                                    <p className="flex-1 flex justify-end text-red-500 font-bold text-4xl ml-4">
                                        Rp{" "}
                                        {(
                                            transaction.total_price +
                                            transaction.shipping_cost
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-100 p-8 px-10 border border-gray-200 shadow-sm rounded-xl flex items-center justify-between gap-6">
                        <a
                            className=" border-1 border-green-700  text-2xl px-6 py-3 rounded-lg flex items-center gap-3"
                            href="https://wa.me/6281770616509"
                            target="_blank"
                        >
                            <div className="w-10 h-10 flex justify-center items-center rounded-full bg-green-700">
                                <HiPhone className="ml-2 h-6 w-6 text-white" />
                            </div>
                            <p className="text-green-700">Hubungi Admin</p>
                        </a>

                        <div className="flex gap-3">
                            <Link
                                href={`/transactions/${transaction.code}/invoice `}
                                className="bg-transparent border-1 border-gray-500 text-gray-600 text-xl px-5 py-3 rounded-lg"
                            >
                                Lihat Faktur
                            </Link>

                            {/* <button className="bg-transparent border-1 border-gray-500 text-gray-600 text-xl px-5 py-3 rounded-lg">
                                Batalkan Pesanan
                            </button> */}

                            {transaction.status === "shipped" && (
                                <button
                                    className={`text-white text-xl px-5 py-3 rounded-lg bg-red-600`}
                                    onClick={handleCompleteTransaction}
                                >
                                    Pesanan Diterima
                                </button>
                            )}

                            {transaction.status === "unpaid" && (
                                <>
                                    <button
                                        className={`text-white text-xl px-5 py-3 rounded-lg bg-gray-600`}
                                        onClick={handleCancleTransaction}
                                    >
                                        Batalkan Pesanan
                                    </button>

                                    <button
                                        className={`text-white text-xl px-5 py-3 rounded-lg bg-red-600`}
                                        onClick={handlePayment}
                                    >
                                        Bayar Sekarang
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}
