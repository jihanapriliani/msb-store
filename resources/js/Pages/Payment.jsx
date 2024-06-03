import React, { useEffect } from "react";

import { Link, Head, router, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { HiArrowNarrowLeft } from "react-icons/hi";

const Payment = (props) => {
    const { token, code } = props;

    useEffect(() => {
        // Fungsi untuk memuat script Snap Midtrans
        const loadSnapScript = () => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
                script.setAttribute(
                    "data-client-key",
                    "SB-Mid-client-FtTyHBAF3B-fBvu-"
                );
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        loadSnapScript()
            .then(() => {
                console.log("Snap script loaded successfully");
                window.snap.embed(token, {
                    embedId: "snap-container",
                });
            })
            .catch((error) => {
                console.error("Failed to load Snap script:", error);
            });

        return () => {
            // Bersihkan script saat komponen di-unmount
            const snapScript = document.querySelector(
                'script[src="https://app.sandbox.midtrans.com/snap/snap.js"]'
            );
            if (snapScript) {
                document.body.removeChild(snapScript);
            }
        };
    }, [token]);

    return (
        <GuestLayout>
            <Head title="Pembayaran" />

            <div
                style={{
                    minHeight: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "4rem auto",
                    flexDirection: "column",
                    width: "50vw",
                }}
            >
                <div className="flex justify-between w-[100%]">
                    <Link
                        href={`/user-transaction/${code}`}
                        className="flex items-center gap-3"
                    >
                        <HiArrowNarrowLeft className="ml-2 h-10 w-10" />
                        <p className="text-2xl text-gray-700">Kembali</p>
                    </Link>

                    <div></div>
                </div>
                <div
                    id="snap-container"
                    style={{ width: "40vw", margin: "5rem 0" }}
                ></div>
            </div>
        </GuestLayout>
    );
};

export default Payment;
