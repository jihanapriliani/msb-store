import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

import { useForm } from "@inertiajs/react";
import { Link, router } from "@inertiajs/react";

export default function Edit(props) {
    const { user, roles } = props;

    console.log(props);

    const { data, setData, post, processing, errors, reset } = useForm({
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.roles[0].name,
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
                    if (e.errors) {
                        form.errors(e.errors);
                    }
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
                            <h5 class="card-title">Tambah User</h5>

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
                                </div>

                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="username"
                                        value={data.username}
                                        onChange={(e) =>
                                            setData("username", e.target.value)
                                        }
                                        placeholder="example: Bolts.."
                                    />
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
                                </div>

                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Role
                                    </label>

                                    <select
                                        className="form-select"
                                        id="exampleInputCategory"
                                        aria-describedby=""
                                        value={data.role}
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {roles.map((role) => (
                                            <option
                                                key={role.id}
                                                value={role.name}
                                            >
                                                {role.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

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
