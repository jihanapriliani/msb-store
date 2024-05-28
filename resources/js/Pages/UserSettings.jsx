import { Link, router, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Sidebar } from "flowbite-react";

import { Tabs } from "flowbite-react";
import UserSidebar from "@/Components/UserSidebar";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import InputError from "@/Components/InputError";

import { useForm } from "@inertiajs/react";

export default function Index({ user, userAddress }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.error) {
            toast.error(flash.error, {
                position: "top-right",
            });

            flash.error = null;
        }

        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, [user, flash]);

    const { data, setData, post, processing, errors, reset, setError } =
        useForm({
            email: user.email,
            fullname: user.fullname,
            phone: user.phone,
        });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("profile.update"),
            {
                _method: "put",
                ...data,
            },
            {
                forceFormData: true,
                onError: (e) => {
                    console.log(e);
                    if (e) {
                        setError(e);
                    }
                },
            }
        );
    };

    const formatVerifyDate = () => {
        const verifiedDate = new Date(user.email_verified_at);
        if (verifiedDate.getTime() === 0) {
            return false;
        } else {
            return true;
        }
    };

    const handlePasswordUpdate = () => {
        Swal.fire({
            title: "Masukkan Password Sebelumnya",
            input: "password",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Lanjut",
            cancelButtonText: "Batal",
            showLoaderOnConfirm: true,
            preConfirm: async (password) => {
                axios
                    .post("/api/compare-password", {
                        params: {
                            user_id: user.id,
                            password: password,
                        },
                    })
                    .then((res) => {
                        if (res.data.success) {
                            Swal.fire({
                                title: "Enter your password",
                                input: "password",
                                inputPlaceholder: "Masukkan Password Baru",
                                showCancelButton: true,
                                cancelButtonText: "Batal",
                                inputAttributes: {
                                    maxlength: "10",
                                    autocapitalize: "off",
                                    autocorrect: "off",
                                },
                                preConfirm: async (password) => {
                                    console.log("ISI PASSWORD", password);
                                    axios
                                        .post("/api/change-password", {
                                            params: {
                                                user_id: user.id,
                                                password: password,
                                            },
                                        })
                                        .then((res) => {
                                            if (res.data.success) {
                                                Swal.fire({
                                                    icon: "success",
                                                    title: "Password berhasil diubah!",
                                                });
                                            } else {
                                                Swal.fire({
                                                    icon: "error",
                                                    title: "Password gagal diubah!",
                                                });
                                            }
                                        });
                                },
                            });
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Password Salah",
                                text: "Masukkan Password sebelumnya",
                            });
                        }
                    });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        });
    };

    const handleEmailUpdate = () => {
        router.post(
            route("profile.update.email"),
            {
                _method: "put",
                ...data,
            },
            {
                forceFormData: true,
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Email berhasil diperbarui!",
                        text: "Silakan buka email Anda untuk verifikasi.",
                        confirmButtonText: "Oke",
                        customClass: {
                            confirmButton: "swal2-confirm",
                        },
                    });
                },
                onError: (e) => {
                    console.log(e);
                    if (e) {
                        setError(e);
                    }
                },
            }
        );
    };

    return (
        <GuestLayout>
            <ToastContainer />
            <main className="container flex justify-center gap-10  my-36">
                <UserSidebar />

                <div className="shadow-md p-6 rounded-xl w-[100%]">
                    <h3 className="text-4xl">Profil Saya</h3>
                    <p className="text-xl text-gray-500 mt-4">
                        Kelola informasi profil Anda untuk mengontrol,
                        melindungi dan mengamankan akun.
                    </p>

                    <hr className="h-4 my-16 bg-gray-300" />

                    <form className="flex flex-col gap-4" onSubmit={submit}>
                        <table className="table table-borderless w-[50%]">
                            <tbody className="text-2xl text-gray-500">
                                <tr>
                                    <td>Nama Lengkap</td>
                                    <td colSpan={2}>
                                        <div>
                                            <TextInput
                                                id="fullname"
                                                type="name"
                                                placeholder=""
                                                className="text-3xl"
                                                style={{
                                                    fontSize: "1.5rem",
                                                    padding: "1rem",
                                                    color: "black",
                                                }}
                                                value={data.fullname}
                                                onChange={(e) =>
                                                    setData(
                                                        "fullname",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                shadow
                                            />
                                            <p className="text-red-500">
                                                {errors.fullname}
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Nomor Telepon</td>
                                    <td colSpan={2}>
                                        <div>
                                            <TextInput
                                                id="phone"
                                                type="phone"
                                                placeholder=""
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                style={{
                                                    fontSize: "1.5rem",
                                                    padding: "1rem",
                                                    color: "black",
                                                }}
                                                required
                                                shadow
                                            />
                                            <p className="text-red-500">
                                                {errors.phone}
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button
                                            type="submit"
                                            className="bg-red-500 p-3 rounded-lg w-100"
                                        >
                                            <p className="text-2xl text-white">
                                                Simpan
                                            </p>
                                        </button>
                                    </td>
                                </tr>

                                <hr className="h-4 my-8 bg-gray-300" />

                                <tr>
                                    <td
                                        style={{
                                            padding: "4rem 5px",
                                            paddingTop: "6rem",
                                        }}
                                    >
                                        Password
                                    </td>
                                    <td
                                        className="flex items-center text-2xl gap-4"
                                        style={{
                                            padding: "4rem 5px",
                                            paddingTop: "6rem",
                                        }}
                                    >
                                        <p className="text-3xl">********</p>
                                    </td>

                                    <td
                                        style={{
                                            padding: "3rem 5px",
                                            paddingTop: "6rem",
                                        }}
                                    >
                                        <button
                                            className="px-5 py-3 rounded-xl bg-gray-700 text-white"
                                            onClick={handlePasswordUpdate}
                                            type="button"
                                        >
                                            Ubah Password
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td
                                        style={{
                                            padding: "1rem 5px",
                                        }}
                                    >
                                        Email Terdaftar
                                        {formatVerifyDate() ? (
                                            <span className="ml-2 p-2 text-sm rounded-full bg-green-500 text-white">
                                                Terverifikasi
                                            </span>
                                        ) : (
                                            <span className="ml-2 p-2 text-sm rounded-full bg-yellow-500 text-white">
                                                Belum Verifikasi
                                            </span>
                                        )}
                                    </td>
                                    <td
                                        className="flex items-center text-2xl gap-4"
                                        style={{
                                            padding: "1rem 5px",
                                        }}
                                    >
                                        <div>
                                            <TextInput
                                                id="fullname"
                                                type="name"
                                                placeholder=""
                                                className="text-3xl"
                                                style={{
                                                    fontSize: "1.5rem",
                                                    padding: "1rem",
                                                    color: "black",
                                                    width: "350px",
                                                }}
                                                value={data.email}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                                required
                                                shadow
                                            />
                                            <p className="text-red-500">
                                                {errors.email}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            className="px-5 py-3 rounded-xl bg-gray-700 text-white"
                                            onClick={handleEmailUpdate}
                                            type="button"
                                        >
                                            Ubah Email
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </main>
        </GuestLayout>
    );
}
