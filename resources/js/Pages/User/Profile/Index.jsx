import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";
import React from "react";

import { useForm } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";

import Select from "react-select";

export default function Edit(props) {
    const { user } = props;

    console.log("isi user", user);

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

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("user.update", user.id, {
                headers: { "Content-Type": "multipart/form-data" },
            }),
            {
                _method: "put",
                ...data,
            },
            {
                forceFormData: true,
                onError: (e) => {
                    console.log(e);
                    if (e.errors) {
                        errors(e.errors);
                    }
                },
                onSuccess: () => {
                    reset();
                },
            }
        );
    };

    return (
        <AuthenticatedUserLayout>
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

                                    <Link
                                        href="/dashboard/user/profile/edit"
                                        className="btn btn-primary"
                                    >
                                        Ubah Profil
                                    </Link>
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
                                                                href="/dashboard/user/profile/edit"
                                                                className="btn btn-sm btn-warning"
                                                            >
                                                                Ubah
                                                            </Link>

                                                            <Link
                                                                href="/dashboard/user/profile/edit"
                                                                className="btn btn-sm btn-danger"
                                                            >
                                                                Hapus
                                                            </Link>
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
