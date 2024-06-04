import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import { Link } from "@inertiajs/react";
import React from "react";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function Show(props) {
    const { transaction, details } = props;

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

    const subtotal = details.reduce(
        (acc, detail) => acc + detail.actual_price * detail.amount,
        0
    );

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Riwayat Transaksi</h1>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h2 className="text-2xl text-gray-800">
                                        Informasi Transaksi
                                    </h2>
                                </div>
                                <div className="col-4 text-end flex justify-end">
                                    <Link
                                        href={`/dashboard/admin/transaction/${transaction.id}/edit`}
                                        className="flex h-12 px-3 justify-center items-center gap-1 rounded-lg bg-blue-500"
                                        style={{
                                            width: "20rem",
                                            paddingTop: "1rem",
                                        }}
                                    >
                                        <p className="text-white">
                                            Update Status
                                        </p>
                                    </Link>
                                </div>
                            </div>

                            <div
                                className="row"
                                style={{
                                    marginTop: "2rem",
                                    padding: "7rem 4rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Timeline horizontal>
                                    <Timeline.Item style={{ width: "25%" }}>
                                        <Timeline.Point icon={HiCalendar} />
                                        <Timeline.Content>
                                            {transaction.created_at ? (
                                                <>
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
                                                </>
                                            ) : (
                                                <>
                                                    <Timeline.Title
                                                        className="text-3xl"
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        Pesanan Dibuat
                                                    </Timeline.Title>

                                                    <Timeline.Time className="text-xl text-gray-600">
                                                        -
                                                    </Timeline.Time>
                                                </>
                                            )}
                                        </Timeline.Content>
                                    </Timeline.Item>

                                    <Timeline.Item style={{ width: "25%" }}>
                                        <Timeline.Point icon={HiCalendar} />

                                        {transaction.processed_at ? (
                                            <>
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
                                            </>
                                        ) : (
                                            <>
                                                <Timeline.Content>
                                                    <Timeline.Title
                                                        className="text-3xl"
                                                        style={{
                                                            color: "gray",
                                                        }}
                                                    >
                                                        Pesanan Dibayar
                                                    </Timeline.Title>
                                                    <Timeline.Time className="text-xl text-gray-600">
                                                        -
                                                    </Timeline.Time>
                                                </Timeline.Content>
                                            </>
                                        )}
                                    </Timeline.Item>

                                    <Timeline.Item style={{ width: "25%" }}>
                                        <Timeline.Point icon={HiCalendar} />
                                        {transaction.shipped_at ? (
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
                                                    Pesanan telah diserahkan ke
                                                    kurir{" "}
                                                    {transaction.delivery_code}
                                                </Timeline.Body>
                                            </Timeline.Content>
                                        ) : (
                                            <Timeline.Content>
                                                <Timeline.Title
                                                    className="text-3xl"
                                                    style={{
                                                        color: "gray",
                                                    }}
                                                >
                                                    Pesanan Dikirim
                                                </Timeline.Title>
                                                <Timeline.Time className="text-xl text-gray-600">
                                                    -
                                                </Timeline.Time>
                                            </Timeline.Content>
                                        )}
                                    </Timeline.Item>
                                    <Timeline.Item style={{ width: "25%" }}>
                                        <Timeline.Point icon={HiCalendar} />
                                        {transaction.accepted_at ? (
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
                                                    Pesanan telah Sampai ke
                                                    Alamat Pengguna.
                                                </Timeline.Body>
                                            </Timeline.Content>
                                        ) : (
                                            <Timeline.Content>
                                                <Timeline.Title
                                                    className="text-3xl"
                                                    style={{
                                                        color: "gray",
                                                    }}
                                                >
                                                    Pesanan Diterima
                                                </Timeline.Title>
                                                <Timeline.Time className="text-xl text-gray-600">
                                                    -
                                                </Timeline.Time>
                                            </Timeline.Content>
                                        )}
                                    </Timeline.Item>

                                    {transaction.status === "canceled" && (
                                        <Timeline.Item style={{ width: "20%" }}>
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
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h2 className="text-2xl text-gray-800">
                                        Detail Transaksi
                                    </h2>
                                </div>
                                <div className="col-4">
                                    <h4 className="float-end">
                                        Status : {transaction.status}
                                    </h4>
                                </div>
                            </div>
                            <div className="invoice-details">
                                <div className="row">
                                    <div className="col">
                                        <p className="info">
                                            Tanggal Pemesanan:
                                        </p>
                                        <p>
                                            {formatDate(transaction.created_at)}
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="info">No Transaksi:</p>
                                        <p>{transaction.code}</p>
                                    </div>
                                    <div className="col">
                                        <p className="info">No Resi:</p>
                                        <p>
                                            {transaction.delivery_code !==
                                                "-" ||
                                            !transaction.delivery_code ? (
                                                <>
                                                    <h5 className=" text-gray-600">
                                                        No Resi:{" "}
                                                        {
                                                            transaction.delivery_code
                                                        }
                                                    </h5>
                                                    <button
                                                        className="text-gray-600 underline hover:text-gray-400 cursor-pointer"
                                                        onClick={() => {
                                                            navigator.clipboard
                                                                .writeText(
                                                                    transaction.delivery_code
                                                                )
                                                                .then(() => {
                                                                    toast.success(
                                                                        "Berhasil menyalin kode pengiriman",
                                                                        {
                                                                            position:
                                                                                "top-right",
                                                                        }
                                                                    );
                                                                })
                                                                .catch(
                                                                    (err) => {
                                                                        console.error(
                                                                            err
                                                                        );
                                                                    }
                                                                );
                                                        }}
                                                        color="gray"
                                                    >
                                                        Salin Kode
                                                    </button>
                                                </>
                                            ) : (
                                                <h5 className=" text-gray-600">
                                                    Belum Ada Resi
                                                </h5>
                                            )}
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="info">Pembeli:</p>
                                        <p>
                                            {transaction.user.fullname},{" "}
                                            {transaction.user_address.country}
                                        </p>
                                        <p style={{ maxWidth: "30rem" }}>
                                            {transaction.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table invoice-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">No</th>
                                                <th scope="col">Barang</th>
                                                <th scope="col">Harga</th>
                                                <th scope="col">Jumlah</th>
                                                <th
                                                    scope="col"
                                                    style={{
                                                        textAlign: "end",
                                                    }}
                                                >
                                                    Total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {details.map((detail, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <a
                                                            href={`/detail-product/${detail.product.id}`}
                                                            target="_blank"
                                                            style={{
                                                                textDecoration:
                                                                    "underline",
                                                            }}
                                                        >
                                                            {
                                                                detail.product
                                                                    .name
                                                            }
                                                        </a>
                                                    </td>
                                                    <td>
                                                        Rp{" "}
                                                        {detail.actual_price.toLocaleString()}
                                                    </td>
                                                    <td>{detail.amount}</td>
                                                    <td
                                                        style={{
                                                            textAlign: "end",
                                                        }}
                                                    >
                                                        Rp{" "}
                                                        {(
                                                            detail.actual_price *
                                                            detail.amount
                                                        ).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row invoice-last">
                                <div className="col-9"></div>
                                <div className="col-3">
                                    <div className="invoice-info">
                                        <p>
                                            Subtotal{" "}
                                            <span>
                                                Rp {subtotal.toLocaleString()}
                                            </span>
                                        </p>
                                        <p>
                                            Biaya Kirim{" "}
                                            <span>
                                                Rp{" "}
                                                {transaction.shipping_cost.toLocaleString()}
                                            </span>
                                        </p>
                                        <p className="bold">
                                            Total{" "}
                                            <span>
                                                Rp{" "}
                                                {(
                                                    subtotal +
                                                    transaction.shipping_cost
                                                ).toLocaleString()}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
