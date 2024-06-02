import GuestLayout from "@/Layouts/GuestLayout/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div
                style={{
                    minHeight: "50vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <div
                    className="mb-4 text-sm text-gray-600"
                    style={{
                        fontSize: "2rem",
                        maxWidth: "45vw",
                        lineHeight: "3rem",
                    }}
                >
                    Sebelum memulai, dapatkah Anda memverifikasi alamat email
                    Anda dengan mengklik tautan yang baru saja kami kirimkan
                    melalui email? Jika Anda tidak menerima email tersebut, kami
                    dengan senang hati akan mengirimkan yang baru.
                </div>

                {status === "verification-link-sent" && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        Link verifikasi baru telah dikirimkan ke alamat email
                        yang kamu gunakan saat proses registrasi.
                    </div>
                )}

                <form onSubmit={submit} style={{}}>
                    <div className="mt-4 flex items-center justify-between">
                        <PrimaryButton
                            disabled={processing}
                            style={{
                                fontSize: "2rem",
                                padding: "1rem",
                                width: "37rem",
                                height: "5rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "10px",
                            }}
                        >
                            Kirim Ulang Verifikasi
                        </PrimaryButton>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            style={{ fontSize: "2rem", marginLeft: "2rem" }}
                            className=" text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
