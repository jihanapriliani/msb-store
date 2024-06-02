import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

import { useForm } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";

import Select from "react-select";

export default function Edit(props) {
    const { user } = props;

    console.log("isi user", user);

    const { data, setData, post, processing, errors, reset } = useForm({
        fullname: user.fullname,
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
        <AuthenticatedLayout>
            <div class="page-content m-0">
                <div class="main-wrapper">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="profile-cover"></div>
                            <div class="profile-header">
                                <div class="profile-img">
                                    <img
                                        src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg"
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
                                    <h5 class="card-title">Detail Pengguna</h5>

                                    <ul class="list-unstyled profile-about-list">
                                        <li>
                                            <i class="far fa-building m-r-xxs"></i>
                                            <span style={{ color: "black" }}>
                                                Email :
                                                <a href="#">{user.email}</a>
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
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="card">
                                <div class="card-body">
                                    <h3 className="text-xl">
                                        Daftar Alamat Pengguna
                                    </h3>
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
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="card"></div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="card table-widget">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Recent Orders
                                    </h5>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">No</th>
                                                    <th scope="col">Invoice</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.transactions.map(
                                                    (transaction, index) => (
                                                        <tr>
                                                            <th scope="row">
                                                                {index + 1}
                                                            </th>

                                                            <td>
                                                                {
                                                                    transaction.code
                                                                }
                                                            </td>
                                                            <td>
                                                                Rp{" "}
                                                                {transaction.total_price.toLocaleString()}
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-info">
                                                                    {
                                                                        transaction.status
                                                                    }
                                                                </span>
                                                            </td>

                                                            <td>
                                                                <Link
                                                                    href={`/dashboard/admin/transaction/${transaction.id}`}
                                                                    style={{
                                                                        textDecoration:
                                                                            "underline",
                                                                    }}
                                                                >
                                                                    Lihat Detail
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
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
