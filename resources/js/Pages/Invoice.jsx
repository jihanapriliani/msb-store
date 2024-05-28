import React from "react";

import "../../assets/invoice.css";
import { Link } from "@inertiajs/react";

const Invoice = ({ transaction }) => {
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

    const handlePrint = () => {
        window.print();
    };

    console.log("ISI DARI TRANSAKSI", transaction);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 0",
                }}
            >
                <button
                    onClick={handlePrint}
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "0.8rem 1.6rem",
                        borderRadius: "1rem",
                        margin: "0.5rem ",
                    }}
                >
                    Print
                </button>
                <Link
                    style={{
                        backgroundColor: "red",
                        color: "white",
                        padding: "0.8rem 1.6rem",
                        borderRadius: "1rem",
                    }}
                    href={`/user-transaction/${transaction.code}`}
                >
                    Ke Riwayat Transaksi
                </Link>
            </div>

            <div className="invoice-box" style={{ minWidth: "700px" }}>
                <table cellPadding="0" cellSpacing="0">
                    <tr className="top">
                        <td colSpan="4">
                            <table>
                                <tr>
                                    <td className="title">
                                        <img
                                            src="/assets/images/msb.jpg"
                                            style={{
                                                width: "100%",
                                                maxWidth: "100px",
                                            }}
                                            alt="Logo"
                                        />
                                    </td>
                                    <td>
                                        Invoice #{transaction.code}
                                        <br />
                                        Created:{" "}
                                        {formatDate(transaction.created_at)}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr className="information">
                        <td colSpan="4">
                            <table>
                                <tr>
                                    <td>
                                        From: <br />
                                        CV. Mandiri Sejati Borneo <br />
                                        Jl. MT Haryono No.68, <br />
                                        Damai, Kecamatan Balikpapan Selatan,{" "}
                                        <br /> Kota Balikpapan, Kalimantan Timur
                                        76114
                                    </td>
                                    <td>
                                        To: <br />
                                        {transaction.user.fullname}
                                        <br />
                                        {transaction.user.phone}
                                        <br />
                                        {transaction.user.email}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr className="heading">
                        <td>Item</td>
                        <td style={{ textAlign: "center" }}>Qty</td>
                        <td style={{ textAlign: "end" }}>Price</td>
                        <td style={{ textAlign: "end" }}>Total</td>
                    </tr>

                    {transaction.transaction_details.map((detail, index) => (
                        <tr className="item">
                            <td>{detail.product.name}</td>
                            <td style={{ textAlign: "center" }}>
                                {detail.amount}
                            </td>
                            <td style={{ textAlign: "end" }}>
                                Rp {detail.actual_price.toLocaleString()}
                            </td>
                            <td style={{ textAlign: "end" }}>
                                Rp{" "}
                                {(
                                    detail.actual_price * detail.amount
                                ).toLocaleString()}
                            </td>
                        </tr>
                    ))}

                    <tr className="heading">
                        <td></td>
                        <td></td>
                        <td
                            style={{
                                textAlign: "end",
                                fontSize: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            Total
                        </td>
                        <td style={{ textAlign: "end" }}>
                            Rp {transaction.total_price.toLocaleString()}
                        </td>
                    </tr>

                    <tr className="heading">
                        <td></td>
                        <td></td>
                        <td
                            style={{
                                textAlign: "end",
                                fontSize: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            Biaya Kirim
                        </td>
                        <td style={{ textAlign: "end" }}>
                            Rp {transaction.shipping_cost.toLocaleString()}
                        </td>
                    </tr>

                    <tr className="heading">
                        <td></td>
                        <td></td>
                        <td
                            style={{
                                textAlign: "end",
                                fontSize: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            Grand Total
                        </td>
                        <td style={{ textAlign: "end" }}>
                            Rp{" "}
                            {(
                                transaction.total_price +
                                transaction.shipping_cost
                            ).toLocaleString()}
                        </td>
                    </tr>
                </table>

                <div style={{ marginTop: "2rem" }}>
                    <h3 style={{ fontWeight: "bold" }}>Catatan Pembelian:</h3>
                    <p>{transaction.note ?? "Tidak Ada"}</p>
                </div>
            </div>
        </div>
    );
};

export default Invoice;
