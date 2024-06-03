import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Tabs } from "flowbite-react";

import TransactionCard from "@/Components/TransactionCard";
import UserSidebar from "@/Components/UserSidebar";
import { Head, Link } from "@inertiajs/react";

const customTheme = {
    color: {
        primary: "bg-red-500 hover:bg-red-600",
    },
};

export default function Index({ user, transactions }) {
    const [selectedTab, setSelectedTab] = useState("Semua");

    const filterTransactions = () => {
        if (selectedTab === "semua") {
            return transactions;
        } else {
            return transactions.filter(
                (transaction) => transaction.status === selectedTab
            );
        }
    };

    const filteredTransactions = filterTransactions();

    return (
        <GuestLayout>
            <Head title="Pembelian" />
            <main className="container flex  gap-10 my-36 min-h-[20vh]">
                <UserSidebar />

                <Tabs
                    aria-label="Pills"
                    style="pills"
                    className="w-100 p-4 class-tabs"
                    onClick={(e) => setSelectedTab(e.target.textContent)}
                    theme={customTheme}
                >
                    <Tabs.Item active={selectedTab === "semua"} title="Semua">
                        <div className="transaction-list min-h-[20vh] flex flex-col gap-3">
                            {transactions.length > 0 ? (
                                transactions.map((transaction) => (
                                    <TransactionCard
                                        transaction={transaction}
                                    />
                                ))
                            ) : (
                                <p className="text-3xl text-center mt-10 text-gray-500 dark:text-gray-400">
                                    Belum ada transaksi{" "}
                                    <Link href="/shop">Belanja Sekarang !</Link>
                                </p>
                            )}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item active={selectedTab === "unpaid"} title="unpaid">
                        <div className="transaction-list min-h-[20vh] flex flex-col gap-3">
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map((transaction) => (
                                    <TransactionCard
                                        transaction={transaction}
                                    />
                                ))
                            ) : (
                                <p className="text-3xl text-center mt-10 text-gray-500 dark:text-gray-400">
                                    Tidak ada transaksi dengan status "
                                    {selectedTab}" (Belum Dibayar)
                                </p>
                            )}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item
                        active={selectedTab === "processed"}
                        title="processed"
                    >
                        <div className="transaction-list min-h-[20vh] flex flex-col gap-3">
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map((transaction) => (
                                    <TransactionCard
                                        transaction={transaction}
                                    />
                                ))
                            ) : (
                                <p className="text-3xl text-center mt-10 text-gray-500 dark:text-gray-400">
                                    Tidak ada transaksi dengan status "
                                    {selectedTab}" (Diproses)
                                </p>
                            )}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item
                        active={selectedTab === "shipped"}
                        title="shipped"
                    >
                        <div className="transaction-list min-h-[20vh] flex flex-col gap-3">
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map((transaction) => (
                                    <TransactionCard
                                        transaction={transaction}
                                    />
                                ))
                            ) : (
                                <p className="text-3xl text-center mt-10 text-gray-500 dark:text-gray-400">
                                    Tidak ada transaksi dengan status "
                                    {selectedTab}" (Dikirim)
                                </p>
                            )}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item
                        active={selectedTab === "completed"}
                        title="completed"
                    >
                        <div className="transaction-list min-h-[20vh] flex flex-col gap-3">
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map((transaction) => (
                                    <TransactionCard
                                        transaction={transaction}
                                    />
                                ))
                            ) : (
                                <p className="text-3xl text-center mt-10 text-gray-500 dark:text-gray-400">
                                    Tidak ada transaksi dengan status "
                                    {selectedTab}" (Selesai)
                                </p>
                            )}
                        </div>
                    </Tabs.Item>
                    <Tabs.Item
                        active={selectedTab === "canceled"}
                        title="canceled"
                    >
                        <div className="transaction-list min-h-[20vh] flex flex-col gap-3">
                            {filteredTransactions.length > 0 ? (
                                filteredTransactions.map((transaction) => (
                                    <TransactionCard
                                        transaction={transaction}
                                    />
                                ))
                            ) : (
                                <p className="text-3xl text-center mt-10 text-gray-500 dark:text-gray-400">
                                    Tidak ada transaksi dengan status "
                                    {selectedTab}" (Dibatalkan)
                                </p>
                            )}
                        </div>
                    </Tabs.Item>
                </Tabs>
            </main>
        </GuestLayout>
    );
}
