import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useState } from "react";

import { Link, router } from "@inertiajs/react";

import Swal from "sweetalert2";

export default function Index(props) {
    const { categories } = props;

    const [searchTerm, setSearchTerm] = useState("");
    const handleDelete = (e, id) => {
        Swal.fire({
            title: "Yakin ingin menghapus?",
            text: "Aksi berikut tidak bisa mengembalikan data!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "gray",
            confirmButtonText: "Hapus!",
            cancelButtonText: "Batal",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(
                    route("category.destroy", {
                        id: id,
                    })
                );
            }
        });
    };

    const filteredCategories = categories.filter((category) =>
        category.display_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AuthenticatedLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen Kategori Produk</h1>

                <div>
                    <input
                        type="search"
                        name=""
                        id=""
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="outline-none p-3 mr-7 rounded-xl text-lg text-gray-700"
                        placeholder="search bolts..."
                    />

                    <Link
                        href="/dashboard/admin/category/create"
                        className="bg-blue-600 text-white p-3 rounded-xl"
                    >
                        Tambah Data
                    </Link>
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly">
                {filteredCategories.map((category) => (
                    <div
                        key={category.id}
                        className="card min-w-[350px] max-w-[450px]"
                    >
                        <div className="card-body flex gap-3">
                            <img
                                src={
                                    window.location.origin +
                                    "/" +
                                    (category.image ?? "assets/images/default.png")
                                }
                                alt={category.name}
                                className="w-[150px] h-[100px] object-cover"
                            />

                            <div className="flex-2">
                                <h5 className="card-title text-2xl mb-1 text-gray-700">
                                    {category.display_name}
                                </h5>
                                <p className="mb-2 text-gray-400 mt-[-0.5rem]">
                                    {category.slug}
                                </p>

                                <h6 className="card-subtitle text-muted">
                                    Jumlah Produk :{" "}
                                    {category.productCount
                                        ? category.productCount
                                        : "0"}
                                </h6>

                                <div className="mt-4">
                                    <Link
                                        href={`/dashboard/admin/category/${category.id}/edit`}
                                        className="card-link text-yellow-500"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        onClick={(e) =>
                                            handleDelete(e, category.id)
                                        }
                                        className="text-red-500 ml-4 outline-none"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
