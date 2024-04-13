import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

export default function Show(props) {
    const { transaction, details } = props;

    console.log("TRANSACTION", transaction);
    console.log("DETAILS", details);

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

            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-8">
                                    <h2 className="text-2xl text-gray-800">
                                        Detail Transaksi
                                    </h2>
                                </div>
                                <div class="col-4">
                                    <h4 class="float-end">#511</h4>
                                </div>
                            </div>
                            <div class="invoice-details">
                                <div class="row">
                                    <div class="col">
                                        <p class="info">Date:</p>
                                        <p>
                                            {formatDate(transaction.created_at)}
                                        </p>
                                    </div>
                                    <div class="col">
                                        <p class="info">No Transaction:</p>
                                        <p>{transaction.code}</p>
                                    </div>
                                    <div class="col">
                                        <p class="info">Invoice to:</p>
                                        <p>
                                            {transaction.user.fullname},{" "}
                                            {transaction.user_address.country}
                                        </p>
                                        <p>
                                            {transaction.user_address.address}.{" "}
                                            {transaction.user_address.zipcode}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="table-responsive">
                                    <table class="table invoice-table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Barang</th>
                                                <th scope="col">Harga</th>
                                                <th scope="col">Jumlah</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {details.map((detail, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        {detail.product.name}
                                                    </td>
                                                    <td>
                                                        Rp{" "}
                                                        {detail.actual_price.toLocaleString()}
                                                    </td>
                                                    <td>{detail.amount}</td>
                                                    <td>
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
                            <div class="row invoice-last">
                                <div class="col-9">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Fusce ut ante id elit
                                        molestie
                                        <br />
                                        dapibus id sollicitudin vel, luctus sit
                                        amet justo
                                    </p>
                                </div>
                                <div class="col-3">
                                    <div class="invoice-info">
                                        <p>
                                            Subtotal{" "}
                                            <span>
                                                Rp {subtotal.toLocaleString()}
                                            </span>
                                        </p>
                                        <p>
                                            Shipping Cost{" "}
                                            <span>
                                                Rp{" "}
                                                {transaction.shipping_cost.toLocaleString()}
                                            </span>
                                        </p>
                                        <p class="bold">
                                            Total{" "}
                                            <span>
                                                Rp{" "}
                                                {(
                                                    subtotal +
                                                    transaction.shipping_cost
                                                ).toLocaleString()}
                                            </span>
                                        </p>
                                        <div class="d-grid gap-2">
                                            <button
                                                class="btn btn-primary m-t-xs"
                                                type="button"
                                            >
                                                Print
                                            </button>
                                        </div>
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
