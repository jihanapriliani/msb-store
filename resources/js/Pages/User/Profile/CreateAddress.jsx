import AuthenticatedUserLayout from "@/Layouts/AutheticatedUserLayout/Index";
import React, { useState } from "react";

import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

import Select from "react-select";
import { useEffect } from "react";
import axios from "axios";

export default function Create(props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        alias: "",
        province_id: "",
        city_id: "",
        district_id: "",
        village_id: "",
        phone: "",
        zipcode: "",
        country: "Indonesia",
        address: "",
        lat: "0",
        long: "0",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("profile.address.store", data), {
            forceFormData: true,
            onError: (e) => {
                console.log(e);
                if (e.errors) {
                    errors(e.errors);
                }
            },
            onSuccess: () => {
                reset();
            },
        });
    };

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isRtl, setIsRtl] = useState(false);

    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState({});

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);

    useEffect(() => {
        axios
            .get("/api/get-provinces")
            .then((res) => setProvinces(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axios
            .get("/api/get-cities", {
                params: {
                    province_id: selectedProvince
                        ? selectedProvince.province_id
                        : 0,
                },
            })
            .then((res) => setCities(res.data))
            .catch((err) => console.log(err));
    }, [selectedProvince]);

    console.log("ISI CITIES", cities);

    return (
        <AuthenticatedUserLayout>
            <div className="mb-5 flex justify-between items-center">
                <h1 className="text-3xl block">Alamat Pengguna</h1>
            </div>

            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tambah Alamat Baru</h5>

                            <form onSubmit={submit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Alias
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="fullname"
                                        onChange={(e) =>
                                            setData("alias", e.target.value)
                                        }
                                        placeholder="example: Rumah Utama, Kantor"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Provinsi
                                    </label>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        isDisabled={isDisabled}
                                        isLoading={isLoading}
                                        isClearable={isClearable}
                                        isRtl={isRtl}
                                        isSearchable={isSearchable}
                                        name="province"
                                        options={provinces ?? []}
                                        getOptionLabel={(option) =>
                                            option.province
                                        }
                                        getOptionValue={(option) =>
                                            option.province_id
                                        }
                                        onChange={(province) => {
                                            setSelectedProvince(province);

                                            setData(
                                                "province_id",
                                                province.province_id
                                            );
                                        }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Kota
                                    </label>

                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        isDisabled={isDisabled}
                                        isLoading={isLoading}
                                        isClearable={isClearable}
                                        isRtl={isRtl}
                                        isSearchable={isSearchable}
                                        name="province"
                                        options={cities ?? []}
                                        getOptionLabel={(option) =>
                                            option.city_name
                                        }
                                        getOptionValue={(option) =>
                                            option.city_id
                                        }
                                        onChange={(city) => {
                                            setSelectedCity(city);

                                            setData("city_id", city.city_id);
                                        }}
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <div className="mb-3 flex-1">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Kecamatan
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            name="username"
                                            onChange={(e) =>
                                                setData(
                                                    "district_id",
                                                    e.target.value
                                                )
                                            }
                                            placeholder=""
                                        />
                                    </div>

                                    <div className="mb-3 flex-1">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Kelurahan
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            name="username"
                                            onChange={(e) =>
                                                setData(
                                                    "village_id",
                                                    e.target.value
                                                )
                                            }
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <div className="mb-3 flex-1">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Nomor Telpon
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            name="username"
                                            onChange={(e) =>
                                                setData("phone", e.target.value)
                                            }
                                            placeholder="08xxxxx"
                                        />
                                    </div>

                                    <div className="mb-3 flex-1">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Zipcode
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            aria-describedby=""
                                            name="username"
                                            onChange={(e) =>
                                                setData(
                                                    "zipcode",
                                                    e.target.value
                                                )
                                            }
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label"
                                    >
                                        Alamat
                                    </label>

                                    <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        onChange={(e) =>
                                            setData("address", e.target.value)
                                        }
                                        placeholder="example: Jl.Marsma R. Iswahyudi"
                                    ></textarea>
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
        </AuthenticatedUserLayout>
    );
}
