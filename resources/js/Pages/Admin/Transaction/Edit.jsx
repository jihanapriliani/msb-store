import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout/Index";
import React, { useState, useEffect } from "react";

import { useForm, router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

import { usePage } from "@inertiajs/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Edit(props) {
    const { transaction } = props;

    const {
        data,
        setData,
        put,
        processing,
        errors,
        reset,
        clearErrors,
        setError,
    } = useForm({
        code: transaction.code,
        status: transaction.status,
        delivery_code: transaction.delivery_code,
    });

    const [isEditCodeClicked, setIsEditCodeClicked] = useState(false);

    const handleEditCodeClick = () => {
        setIsEditCodeClicked(true);
    };

    const handleCancelClick = () => {
        setIsEditCodeClicked(false);
        reset();
    };

    const submit = (e) => {
        e.preventDefault();
        clearErrors();

        router.post(
            route("transaction.update", transaction.id, {
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
                    setError(e);
                },
            }
        );
    };

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.error) {
            toast.error(flash.error, {
                position: "top-right",
            });
        }
    }, [transaction]);

    return (
        <AuthenticatedLayout>
            <ToastContainer />
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Manajemen Riwayat Transaksi</h1>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                Update Status Transaksi
                            </h5>

                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="transactionStatus"
                                        className="form-label"
                                    >
                                        Status Transaksi
                                    </label>
                                    <select
                                        className="form-select"
                                        id="transactionStatus"
                                        name="status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                    >
                                        <option value="unpaid">Unpaid</option>
                                        <option value="processed">
                                            Processed
                                        </option>
                                        <option value="shipped">Shipped</option>
                                        <option value="accepted">
                                            Accepted
                                        </option>
                                        <option value="rejected">
                                            Rejected
                                        </option>
                                        <option value="canceled">
                                            Canceled
                                        </option>
                                    </select>
                                    <p className="text-red-500">
                                        {errors.status}
                                    </p>
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Nomor Resi
                                    </label>

                                    <div className="flex gap-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            name="delivery_code"
                                            value={data.delivery_code}
                                            onChange={(e) =>
                                                setData(
                                                    "delivery_code",
                                                    e.target.value
                                                )
                                            }
                                            disabled={!isEditCodeClicked}
                                        />
                                        <div className="d-flex mt-2">
                                            <button
                                                type="button"
                                                className="bg-blue-500 text-white py-2 px-4 rounded me-3"
                                                onClick={handleEditCodeClick}
                                            >
                                                Ubah
                                            </button>
                                            {isEditCodeClicked && (
                                                <button
                                                    type="button"
                                                    className="bg-secondary text-white py-2 px-4 rounded"
                                                    onClick={handleCancelClick}
                                                >
                                                    Batal
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-red-500">
                                        {errors.delivery_code}
                                    </p>
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
