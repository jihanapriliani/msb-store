import React from "react";

import GuestLayout from "@/Layouts/GuestLayout/Index";

export default function TransactionInvoice({ user, transaction }) {
    transaction = transaction[0];

    return (
        <>
            <section class="py-20 overflow-hidden relative">
                <div class="inline-block absolute 2xl:end-60 bottom-3 xl:bottom-auto">
                    <a
                        href="javascript:window.print()"
                        class="flex items-center justify-end py-2 px-7 rounded-md bg-white print:hidden"
                    >
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                class="pe-3"
                            >
                                <path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                            </svg>
                        </span>
                        Print
                    </a>
                </div>

                <div class="container">
                    <div class="rounded-3xl bg-white md:p-16 p-10 print:p-0 print:bg-black">
                        <div class="flex flex-wrap items-center justify-between gap-6">
                            <img src="assets/images/logo-dark.png" alt="" />
                            <div>
                                <h4 class="text-lg font-medium uppercase tracking-widest">
                                    Invoice #
                                </h4>
                                <p class="text-lg float-rights font-medium tracking-widest">
                                    {transaction.code}
                                </p>
                            </div>
                        </div>

                        <div class="mt-10">
                            <h1 class="text-xl font-semibold uppercase tracking-widest">
                                CV. MANDIRI SEJATI BORNEO
                            </h1>

                            <h4 class="text-lg font-medium uppercase tracking-widest mt-10">
                                Billing To:
                            </h4>
                            <p class="w-52 text-base font-normal tracking-widest">
                                {user.fullname}
                            </p>
                        </div>

                        <div class="overflow-x-auto">
                            <table class="border-collapse table-auto w-full text-sm mt-14 mb-12 whitespace-pre">
                                <thead>
                                    <tr class=" bg-black">
                                        <th class="p-4 border-b uppercase tracking-widest text-xl font-medium text-start text-white">
                                            Product
                                        </th>
                                        <th class="p-4 border-b uppercase tracking-widest text-xl font-medium text-start text-white">
                                            Price
                                        </th>
                                        <th class="p-4 pe-7 border-b uppercase tracking-widest text-xl font-medium text-center text-white">
                                            Qty
                                        </th>
                                        <th class="p-4 border-b uppercase tracking-widest text-xl font-medium text-end text-white">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                    {transaction.transaction_details.map(
                                        (detail, index) => (
                                            <tr>
                                                <td class="p-5 text-lg font-medium border-b border-gray-800">
                                                    {detail.product.name}
                                                </td>
                                                <td class="p-5 text-lg font-medium border-b border-gray-800">
                                                    Rp{" "}
                                                    {detail.actual_price.toLocaleString()}
                                                </td>
                                                <td class="p-5 text-lg font-medium border-b border-gray-800 text-center">
                                                    {detail.amount}
                                                </td>
                                                <td class="p-5 text-lg font-medium border-b border-gray-800 text-end">
                                                    Rp{" "}
                                                    {(
                                                        detail.actual_price *
                                                        detail.amount
                                                    ).toLocaleString()}
                                                </td>
                                            </tr>
                                        )
                                    )}

                                    <tr>
                                        <td
                                            colspan="4"
                                            class="p-5 text-lg font-medium text-end"
                                        >
                                            <b class="uppercase">Sub total</b>{" "}
                                            $0.00 <br />{" "}
                                            <b class="uppercase pe-14">Tax</b>{" "}
                                            $0.00 <br />
                                            <b class="uppercase pe-10">
                                                Total
                                            </b>{" "}
                                            $0.00
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="md:max-w-3xl">
                            <h1 class="text-xl font-semibold uppercase tracking-widest">
                                Terms & conditions:
                            </h1>
                            <p class="text-base font-medium mt-3">
                                Barang yang sudah dibeli,tidak dapat
                                dikembalikan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
