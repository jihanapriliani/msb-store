import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useState } from "react";

import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Select from "react-select";

export default function Create(props) {
    const { roles } = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        fullname: "",
        username: "",
        email: "",
        phone: "",
        roles: [],
    });

    const submit = (e) => {
        e.preventDefault();

        post(
            route("user.store", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),

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

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen User</h1>
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
                                    <Select
                                        className="form-select"
                                        id="grid-first-name"
                                        name="roles"
                                        value={data.roles}
                                        isMulti
                                        onChange={(value) => {
                                            console.log(value);
                                            setData("roles", value.slice());
                                        }}
                                        options={roles}
                                        getOptionLabel={(option) => option.name}
                                        getOptionValue={(option) => option.id}
                                    />
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