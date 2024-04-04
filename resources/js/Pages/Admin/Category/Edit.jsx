import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React from "react";

import { useForm, router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Edit(props) {
    const { category } = props;

    const { data, setData, put, processing, errors, reset } = useForm({
        display_name: category.display_name,
        slug: category.slug,
        image: category.image,
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("category.update", category.id, {
                headers: { "Content-Type": "multipart/form-data" },
            }),
            {
                _method: "put",
                ...data,
            },
            {
                forceFormData: true,
            }
        );
    };

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen Kategori Produk</h1>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Tambah Kategori Produk
                            </h5>

                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Display Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="display_name"
                                        value={data.display_name}
                                        onChange={(e) =>
                                            setData(
                                                "display_name",
                                                e.target.value
                                            )
                                        }
                                        placeholder="example: Bolts.."
                                    />
                                    <div id="emailHelp" className="form-text">
                                        Display name adalah nama yang tampil
                                        pada halaman.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Slug Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="slug"
                                        value={data.slug}
                                        onChange={(e) =>
                                            setData("slug", e.target.value)
                                        }
                                        placeholder="example: bolts..."
                                    />
                                    <div id="emailHelp" className="form-text">
                                        Slug Name adalah nama yang muncul pada
                                        url.
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="formFileLg"
                                        className="form-label"
                                    >
                                        Foto Kategori Produk
                                    </label>
                                    <input
                                        className="form-control "
                                        id="formFile"
                                        type="file"
                                        name="image"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                    />

                                    <div id="emailHelp" className="form-text">
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
