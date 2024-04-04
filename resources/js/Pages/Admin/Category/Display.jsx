import React from "react";
import { Link } from "@inertiajs/react";

export default function Index(props) {
    const { categories } = props;

    return (
        <main className="flex items-center p-24 flex-col">
            <Link
                href={route("category.create")}
                className="text-blue-500 mb-6"
            >
                Tambah Data
            </Link>

            <div class="relative overflow-x-auto w-[50vw]">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Display Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Thumbnail Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Slug
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">
                                    {category.display_name}
                                </td>
                                <td className="px-6 py-4">
                                    <img
                                        src={category.image}
                                        alt={category.display_name}
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                        }}
                                    />
                                </td>
                                <td className="px-6 py-4">{category.slug}</td>
                                <td>
                                    <Link
                                        href={route("category.destroy", {
                                            id: category.id,
                                        })}
                                        className="text-red-500 mr-4"
                                    >
                                        Hapus
                                    </Link>

                                    <Link
                                        href={route("category.edit", {
                                            id: category.id,
                                        })}
                                        className="text-yellow-500 "
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
