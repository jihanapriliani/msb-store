import React from "react";
import { Link } from "@inertiajs/react";
import { Card } from "flowbite-react";

export default function TransactionCard({ transaction }) {
    return (
        <Card className="">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2 text-xl items-center">
                    <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">
                        {transaction.code}
                    </h5>
                    <span className="p-2 bg-gray-700 text-white rounded-full">
                        {transaction.status}
                    </span>
                </div>
                <Link
                    href={`/user-transaction/${transaction.code}`}
                    className="text-xl font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                    View all
                </Link>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {transaction.transaction_details.map((detail, index) => (
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        alt="Neil image"
                                        height="64"
                                        src={
                                            window.location.origin +
                                            "/" +
                                            (detail.product.images[0].image ??
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
                                        {detail.actual_price.toLocaleString()} x{" "}
                                        {detail.amount}
                                    </p>
                                </div>
                                <div className="inline-flex items-center  font-semibold text-gray-800 text-2xl dark:text-white">
                                    Rp{" "}
                                    {(
                                        detail.actual_price * detail.amount
                                    ).toLocaleString()}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <hr className="h-4 bg-gray-300" />

                <div className="text-4xl text-gray-500  flex justify-end">
                    Total Pesanan :
                    <span className="text-red-500 font-bold">
                        Rp{" "}
                        {(
                            transaction.total_price + transaction.shipping_cost
                        ).toLocaleString()}
                    </span>
                </div>
            </div>
        </Card>
    );
}
