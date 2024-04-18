import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";
import React, { useState } from "react";

import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Select from "react-select";

export default function Create(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        alias: "",
        province_id: "",
        city_id: "",
        regency_id: "",
        phone: "",
        zipcode: "",
        country: "",
        address: "",
        lat: "",
        long: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(
            route("profile.address.store", data, {
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
        <AuthenticatedUserLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Alamat Pengguna</h1>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Tambah Alamat Baru</h5>

                            <form onSubmit={submit}>
                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Alias
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="fullname"
                                        onChange={(e) =>
                                            setData("alias", e.target.value)
                                        }
                                        placeholder="Example: John Doe"
                                    />
                                </div>

                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Address
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="username"
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        placeholder="example: johndoe"
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
        </AuthenticatedUserLayout>
    );
}
