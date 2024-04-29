import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";
import React, { useEffect } from "react";

import { useForm } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import axios from "axios";

export default function Edit(props) {
    const { user } = props;

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, [user]);

    const { data, setData, post, processing, errors, reset } = useForm({
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        phone: user.phone,
    });

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const updatePassword = () => {};

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

    const handleDelete = (e, id) => {
        Swal.fire({
            title: "Yakin ingin menghapus alamat ini?",
            text: "Aksi berikut tidak bisa mengembalikan data alamat tersebut!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "gray",
            confirmButtonText: "Hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(
                    route("profile.address.delete", {
                        id: id,
                    })
                );
            }
        });
    };

    return (
        <AuthenticatedUserLayout>
            <ToastContainer />
            <div class="page-content m-0">
                <div class="main-wrapper">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="profile-cover"></div>
                            <div class="profile-header">
                                <div class="profile-img">
                                    <img
                                        src="../../assets/images/avatars/profile-image.png"
                                        alt=""
                                    />
                                </div>
                                <div class="profile-name">
                                    <h3>{user.fullname}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Profil Pengguna</h5>

                                    <ul class="list-unstyled profile-about-list">
                                        <li>
                                            <i class="far fa-edit m-r-xxs"></i>
                                            <span>
                                                Username :
                                                <a href="#"> {user.username}</a>
                                            </span>
                                        </li>
                                        <li>
                                            <i class="far fa-building m-r-xxs"></i>
                                            <span>
                                                Email :
                                                <a href="#"> {user.email}</a>
                                                <span className="ml-2 p-1 text-sm text-white rounded-lg bg-red-400">
                                                    Belum Diverifikasi
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <i class="far fa-compass m-r-xxs"></i>
                                            <span>
                                                No Telpon :
                                                <a href="#"> {user.phone}</a>
                                            </span>
                                        </li>
                                        <li>
                                            <i class="far fa-user m-r-xxs"></i>
                                            <span>
                                                Member Sejak:{" "}
                                                {user.created_at
                                                    ? new Date(
                                                          user.created_at
                                                      ).toLocaleDateString(
                                                          "id-ID",
                                                          dateOptions
                                                      )
                                                    : ""}
                                            </span>
                                        </li>
                                    </ul>

                                    <div className="flex gap-4 mt-6">
                                        <Link
                                            href={route("profile.edit")}
                                            className="btn btn-primary flex-1"
                                        >
                                            Ubah Profil
                                        </Link>

                                        <button
                                            className="btn btn-danger flex-1"
                                            onClick={handlePasswordUpdate}
                                        >
                                            Ubah Password
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <div className="flex justify-between">
                                        <h3 className="text-xl">
                                            Daftar Alamat
                                        </h3>

                                        <Link
                                            href="/dashboard/user/profile/create-address"
                                            className="btn btn-primary"
                                        >
                                            Tambah Alamat
                                        </Link>
                                    </div>

                                    <div class="post">
                                        <div class="post-comments">
                                            {user.addresses.map(
                                                (address, index) => (
                                                    <div
                                                        class="post-comm"
                                                        key={index}
                                                    >
                                                        <div class="comment-container">
                                                            <span class="comment-author text-lg">
                                                                {address.alias}
                                                            </span>
                                                        </div>
                                                        <span class="comment-text ml-2">
                                                            {address.address}
                                                        </span>

                                                        <div className="flex justify-end gap-2">
                                                            <Link
                                                                href={route(
                                                                    "profile.address.edit",
                                                                    {
                                                                        id: address.id,
                                                                    }
                                                                )}
                                                                className="btn btn-sm btn-warning"
                                                            >
                                                                Edit
                                                            </Link>

                                                            <button
                                                                onClick={(e) =>
                                                                    handleDelete(
                                                                        e,
                                                                        address.id
                                                                    )
                                                                }
                                                                className="btn btn-sm btn-danger"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedUserLayout>
    );
}
