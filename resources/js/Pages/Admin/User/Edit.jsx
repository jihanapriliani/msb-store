import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

import { useForm } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";

import Select from "react-select";

export default function Edit(props) {
    const { user, roles } = props;

    const { data, setData, post, processing, errors, reset, setError } =
        useForm({
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            role: user.role,
        });

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
                    setError(e);
                },
                onSuccess: () => {
                    reset();
                },
            }
        );
    };

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen Kategori User</h1>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Edit User</h5>

                            <form onSubmit={submit}>
                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Fullname
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="fullname"
                                        value={data.fullname}
                                        onChange={(e) =>
                                            setData("fullname", e.target.value)
                                        }
                                        placeholder="example: Bolts.."
                                    />
                                    <div class="form-text text-danger">
                                        {errors.fullname}
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="example: bolts..."
                                    />
                                    <div class="form-text text-danger">
                                        {errors.email}
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        No Telepon
                                    </label>
                                    <input
                                        type="telp"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="phone"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        placeholder="example: bolts..."
                                    />
                                    <div class="form-text text-danger">
                                        {errors.phone}
                                    </div>
                                </div>
                                {props.auth.user.roles[0].name ===
                                    "super-admin" && (
                                    <div class="mb-3">
                                        <label
                                            for="exampleInputEmail1"
                                            class="form-label"
                                        >
                                            Role
                                        </label>
                                        <select
                                            class="form-select"
                                            aria-label="Default select example"
                                            name="role"
                                            value={data.role}
                                            onChange={(e) =>
                                                setData("role", e.target.value)
                                            }
                                        >
                                            <option selected>Pilih Role</option>
                                            {roles.map((role) => (
                                                <option value={role.name}>
                                                    {role.name}
                                                </option>
                                            ))}
                                        </select>
                                        <div class="form-text text-danger">
                                            {errors.role}
                                        </div>
                                    </div>
                                )}
                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        placeholder="******"
                                    />
                                    <div class="form-text text-danger">
                                        {errors.password}
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
        </AuthenticatedLayout>
    );
}
