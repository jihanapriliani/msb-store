import React from "react";

import { useForm } from "@inertiajs/react";

export default function Edit(props) {
    const { category } = props;

    const { data, setData, put, processing, errors, reset } = useForm({
        display_name: category.display_name,
        slug: category.slug,
        image: category.image,
    });

    const submit = (e) => {
        e.preventDefault();

        put(
            route("category.update", data, {
                headers: { "Content-Type": "multipart/form-data" },
            })
        );
    };

    return (
        <main className="flex justify-center items-center m-24">
            <form className="w-full max-w-lg" onSubmit={submit}>
                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block" for="grid-first-name">
                        Display Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name={data.display_name}
                        type="text"
                        placeholder="Bolt"
                        onChange={(e) =>
                            setData("display_name", e.target.value)
                        }
                    />
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block" for="grid-first-name">
                        Slug
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name={data.slug}
                        type="text"
                        placeholder="bolt"
                        onChange={(e) => setData("slug", e.target.value)}
                    />
                </div>

                <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block" for="grid-first-name">
                        Slug
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border
                        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        name={data.image}
                        type="file"
                        placeholder="bolt"
                        onChange={(e) => setData("image", e.target.files[0])}
                    />
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                    {processing ? "Memperbarui..." : "Perbarui"}
                </button>
            </form>
        </main>
    );
}
