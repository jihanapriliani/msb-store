import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useState } from "react";

import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function Create() {
    const form = useForm({
        display_name: "",
        image: null,
    });

    const submit = (e) => {
        e.preventDefault();
        form.clearErrors();
        form.post(route("category.store"), {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onSuccess: () => {
                form.reset();
            },
            onError: (errors) => {
                form.setError(errors);
            },
        });
    };

    const handleImageRemove = () => {
        setData("image", null);
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
                                        Nama Kategori
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id=""
                                        aria-describedby=""
                                        name={form.data.display_name}
                                        onChange={(e) =>
                                            form.setData(
                                                "display_name",
                                                e.target.value
                                            )
                                        }
                                        placeholder="example: Bolts.."
                                    />
                                    <div class="form-text text-danger">
                                        {form.errors.display_name}
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
                                        <div class="form-text text-danger">
                                            {form.errors.image}
                                        </div>
                                        {form.data.image ? (
                                            <div className=" pt-3">
                                                <img
                                                    src={URL.createObjectURL(
                                                        form.data.image
                                                    )}
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
                                            <div className="flex items-center justify-center w-[300px] h-[300px]">
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
                                                            form.setData(
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
                                    disabled={form.processing}
                                    className="bg-primary text-white py-2 px-4 rounded mt-6"
                                >
                                    {form.processing
                                        ? "Menyimpan..."
                                        : "Simpan"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
