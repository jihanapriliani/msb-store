import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        display_name: "",
        slug: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(
            route("category.store", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
        );
    };

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen Kategori Produk</h1>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Tambah Kategori Produk</h5>

                            <form onSubmit={submit}>
                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name={data.display_name}
                                        onChange={(e) =>
                                            setData(
                                                "display_name",
                                                e.target.value
                                            )
                                        }
                                        placeholder="example: Bolts.."
                                    />
                                    <div id="emailHelp" class="form-text">
                                        Display name adalah nama yang tampil
                                        pada halaman.
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Slug Name
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name={data.slug}
                                        onChange={(e) =>
                                            setData("slug", e.target.value)
                                        }
                                        placeholder="example: bolts..."
                                    />
                                    <div id="emailHelp" class="form-text">
                                        Slug Name adalah nama yang muncul pada
                                        url.
                                    </div>
                                </div>

                                <div>
                                    <label for="formFileLg" class="form-label">
                                        Foto Kategori Produk
                                    </label>
                                    <input
                                        class="form-control "
                                        id="formFile"
                                        type="file"
                                        name={data.slug}
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />

                                    <div id="emailHelp" class="form-text">
                                        Pastikan gambar yang dimasukkan dengan
                                        resolusi yang baik dan mewakili suatu
                                        kategori.
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
