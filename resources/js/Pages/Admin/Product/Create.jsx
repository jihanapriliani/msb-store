import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useState } from "react";

import { useForm } from "@inertiajs/react";

import CurrencyInput from "react-currency-input-field";

export default function Create(props) {
    const { categories } = props;
    const [images, setImages] = useState([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        category: "",
        stock: 0,
        price: 0,
        unit_weight: 0,
        product_images: null,
    });

    const submit = (e) => {
        e.preventDefault();

        post(
            route("product.store", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }),
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

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);

        setData("product_images", [...images, ...files]);
    };

    const handleImageRemove = (index) => {
        setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen Produk</h1>
            </div>

            <div className="row">
                <form onSubmit={submit}>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Tambah Produk</h5>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Nama Produk
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="example: New Bolts.."
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputDescription"
                                        className="form-label"
                                    >
                                        Deskripsi Produk
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleInputDescription"
                                        aria-describedby=""
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        placeholder="example: This is a new bolts made from.."
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Harga
                                    </label>

                                    <CurrencyInput
                                        prefix="Rp "
                                        id="input-example"
                                        name="input-name"
                                        className="form-control"
                                        placeholder="Please enter a number"
                                        defaultValue={0}
                                        decimalsLimit={2}
                                        onValueChange={(value) => {
                                            setData("price", value);
                                        }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputCategory"
                                        className="form-label"
                                    >
                                        Kategori
                                    </label>
                                    <select
                                        className="form-select"
                                        id="exampleInputCategory"
                                        aria-describedby=""
                                        value={data.category}
                                        onChange={(e) =>
                                            setData("category", e.target.value)
                                        }
                                    >
                                        <option value="">Pilih Kategori</option>
                                        {categories.map((category) => (
                                            <option
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.display_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col-md-6">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Stok
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            min={0}
                                            name={data.stock}
                                            onChange={(e) =>
                                                setData("stock", e.target.value)
                                            }
                                            placeholder="0"
                                        />
                                    </div>

                                    <div className="mb-3 col-md-6">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Berat Barang (KG)
                                        </label>
                                        <input
                                            type="number"
                                            step={0.1}
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            name={data.unit_weight}
                                            min={0}
                                            onChange={(e) =>
                                                setData(
                                                    "unit_weight",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Foto Produk</h5>

                                <div className="flex items-center flex-wrap gap-3">
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
                                                    SVG, PNG, JPG or GIF (MAX.
                                                    800x400px)
                                                </p>
                                            </div>
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                className="hidden"
                                                onChange={handleImageChange}
                                                multiple
                                            />
                                        </label>
                                    </div>

                                    <div className="mt-4 flex items-center flex-wrap gap-3">
                                        {images.map((image, index) => (
                                            <div key={index}>
                                                <img
                                                    src={URL.createObjectURL(
                                                        image
                                                    )}
                                                    alt={`Uploaded Image ${index}`}
                                                    className=" object-cover rounded-lg mr-2 w-[300px] h-[220px]"
                                                />

                                                <button
                                                    onClick={() =>
                                                        handleImageRemove(index)
                                                    }
                                                    className="text-white bg-red-500 p-2 px-3 rounded-2xl mt-[-3rem] "
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-primary text-white py-2 px-4 rounded text-xl"
                                >
                                    {processing ? "Menyimpan..." : "Simpan"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
