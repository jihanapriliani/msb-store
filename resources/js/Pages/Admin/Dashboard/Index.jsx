import React from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";

// import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { useState } from "react";
import { useEffect } from "react";

export default function Index({
    total_customers,
    total_orders,
    total_profit,
    total_transaction,
    transactions,
}) {
    const [option, setOption] = useState();

    console.log("ISI TRANSACTION", transactions);

    useEffect(() => {}, []);

    return (
        <AuthenticatedLayout>
            <div className="row">
                <div className="col-md-6 col-xl-3">
                    <div className="card stat-widget">
                        <div className="card-body">
                            <h5 className="card-title">Customers</h5>
                            <h2>{total_customers}</h2>
                            <p>Total Customers</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-info progress-bar-striped"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="card stat-widget">
                        <div className="card-body">
                            <h5 className="card-title">Orders</h5>
                            <h2>{total_orders}</h2>
                            <p>Total Orders</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-success progress-bar-striped"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="card stat-widget">
                        <div className="card-body">
                            <h5 className="card-title">Profit</h5>
                            <h2>{total_profit}</h2>
                            <p>Total Profit</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-danger progress-bar-striped"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3">
                    <div className="card stat-widget">
                        <div className="card-body">
                            <h5 className="card-title">Transactions</h5>
                            <h2>{total_transaction}</h2>
                            <p>Total Transaction</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-primary progress-bar-striped"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 col-lg-8">
                    <div className="card table-widget">
                        <div className="card-body">
                            <h5 className="card-title">Recent Orders</h5>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Customer</th>

                                            <th scope="col">Invoice</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {transactions.map(
                                            (transaction, index) => (
                                                <tr>
                                                    <th scope="row">
                                                        <img
                                                            src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
                                                            alt=""
                                                        />
                                                        {
                                                            transaction.user
                                                                .fullname
                                                        }
                                                    </th>

                                                    <td>{transaction.code}</td>
                                                    <td>
                                                        Rp{" "}
                                                        {transaction.total_price.toLocaleString()}
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-info">
                                                            {transaction.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            )
                                        )} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="col-md-12 col-lg-4">
                    <div className="card stat-widget">
                        <div className="card-body">
                            <h5 className="card-title">Orders</h5>
                            <Chart />
                        </div>
                    </div>
                </div> */}
            </div>
        </AuthenticatedLayout>
    );
}
