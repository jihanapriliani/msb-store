import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";
import React, { useState } from "react";

import { useForm } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";

import Select from "react-select";
import { useEffect } from "react";

import { usePage } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Edit(props) {
    const { user } = props;

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.error) {
            toast.error(flash.error, {
                position: "top-right",
            });
        }
    }, [user]);

    const { data, setData, post, processing, errors, reset } = useForm({
        username: user.username,
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
                    if (e.errors) {
                        form.errors(e.errors);
                    }
                },
            }
        );
    };

    return (
        <AuthenticatedUserLayout>
            <ToastContainer />
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Alamat Pengguna</h1>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Perbarui Profil</h5>

                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="fullname"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        placeholder="example: Rumah Utama, Kantor"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Fullname
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={(e) =>
                                            setData("fullname", e.target.value)
                                        }
                                        placeholder="example: Rumah Utama, Kantor"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="example: Rumah Utama, Kantor"
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <div className="mb-3 flex-1">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Nomor Telpon
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            name="username"
                                            value={data.phone}
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                            placeholder="08xxxxx"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-primary text-white py-2 px-4 rounded mt-6"
                                >
                                    {processing ? "Menyimpan..." : "Simpan"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedUserLayout>
    );
}
