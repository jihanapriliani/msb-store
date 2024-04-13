import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useEffect, useState } from "react";

import { useForm } from "@inertiajs/react";
import { router } from "@inertiajs/react";

import CurrencyInput from "react-currency-input-field";

export default function Edit(props) {
    const { categories, product, product_images } = props;
    const [images, setImages] = useState([]);
    const [dataProductImages, setDataProductImages] = useState(product_images);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: product.name,
        description: product.description,
        slug: product.slug,
        category: product.category_id,
        stock: product.stock,
        price: product.price,
        unit_weight: product.unit_weight,
        old_product_images: product_images,
        new_product_images: [],
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("product.update", product.id, {
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

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);

        setData("new_product_images", [...images, ...files]);
    };

    const handleImageRemove = (index) => {
        setImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
        setData("new_product_images", images);
    };

    const handleProductImageRemove = (imageId, index) => {
        const updatedImages = dataProductImages.filter(
            (image) => image.id !== imageId
        );
        setDataProductImages(updatedImages);
        setData("old_product_images", updatedImages);
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
                                <h5 className="card-title">Edit Produk</h5>

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
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        placeholder="example: Bolts.."
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
                                        name="descrription"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        placeholder="example: Bolts.."
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Nama Slug
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
                                        Slug adalah nama yang muncul pada url.
                                    </div>
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
                                        defaultValue={data.price}
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
                                        name="category"
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
                                                selected={
                                                    data.category ===
                                                    category.id
                                                } // Added selected attribute
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
                                            min={0}
                                            aria-describedby=""
                                            name="stock"
                                            value={data.stock}
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
                                            className="form-control"
                                            id=""
                                            min={0}
                                            step={0.1}
                                            aria-describedby=""
                                            name="unit_weight"
                                            value={data.unit_weight}
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
                                        {dataProductImages.map(
                                            (image, index) => (
                                                <div key={index}>
                                                    <img
                                                        src={
                                                            window.location
                                                                .origin +
                                                            "/" +
                                                            image.image
                                                        }
                                                        alt={`Uploaded Image ${index}`}
                                                        className=" object-cover rounded-lg mr-2 w-[300px] h-[220px]"
                                                    />

                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleProductImageRemove(
                                                                image.id
                                                            )
                                                        }
                                                        className="text-white bg-red-500 p-2 px-3 rounded-2xl mt-[-3rem] "
                                                    >
                                                        Hapus
                                                    </button>
                                                </div>
                                            )
                                        )}

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
                                                    type="button"
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
