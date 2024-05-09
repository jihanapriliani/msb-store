import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useState } from "react";

import { useForm, router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

export default function Edit(props) {
    const { category } = props;

    const { data, setData, put, processing, errors, reset } = useForm({
        display_name: category.display_name,
        image: category.image,
    });

    console.log("DATA APA AJA", category);

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
                onError: (e) => {
                    console.log(e);
                    if (e.errors) {
                        form.errors(e.errors);
                    }
                },
            }
        );
    };

    const handleImageRemove = () => {
        setData("image", null);
        setOldImage(null);
    };

    const [oldImage, setOldImage] = useState(category.image);

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

                                <div>
                                    <label for="formFileLg" class="form-label">
                                        Foto Kategori Produk
                                    </label>

                                    <div id="" className="form-text">
                                        Pastikan gambar yang dimasukkan dengan
                                        resolusi yang baik dan mewakili suatu
                                        kategori.
                                    </div>

                                    <div className="flex items-center flex-wrap gap-3">
                                        {oldImage || data.image ? (
                                            <div className="pt-3">
                                                <img
                                                    src={
                                                        oldImage ?
                                                            window.location.origin + "/" + oldImage
                                                            : data.image ?
                                                                URL.createObjectURL(
                                                                data.image
                                                                )
                                                                : window.location.origin +"/assets/images/default.png"
                                                    }
                                                    alt={`Uploaded Image`}
                                                    className=" object-cover rounded-lg mr-2 w-[300px] h-[220px]"
                                                />

                                                <button
                                                    onClick={handleImageRemove}
                                                    className="text-white bg-red-500 p-2 px-3 rounded-2xl mt-[-3rem] "
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center w-[300px] h-[300px] pt-3">
                                                <label
                                                    htmlFor="dropzone-file"
                                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                                >
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        <svg
                                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 20 16"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                            />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                            <span className="font-semibold">
                                                                Click to upload
                                                            </span>{" "}
                                                            or drag and drop
                                                        </p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                            SVG, PNG, JPG or GIF
                                                            (MAX. 800x400px)
                                                        </p>
                                                    </div>
                                                    <input
                                                        id="dropzone-file"
                                                        type="file"
                                                        className="hidden"
                                                        onChange={(e) =>
                                                            setData(
                                                                "image",
                                                                e.target
                                                                    .files[0]
                                                            )
                                                        }
                                                    />
                                                </label>
                                            </div>
                                        )}
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
