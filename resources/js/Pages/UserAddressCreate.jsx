import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Tabs } from "flowbite-react";

import TransactionCard from "@/Components/TransactionCard";
import UserSidebar from "@/Components/UserSidebar";
import { Link } from "@inertiajs/react";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowLeft, HiCalendar, HiPhone } from "react-icons/hi";
import { useEffect } from "react";

import Select from "react-select";
import { useForm } from "@inertiajs/react";

export default function UserAddressCreate() {
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
        <GuestLayout>
            <main className="container flex gap-10 my-36 min-h-[20vh]">
                <UserSidebar />

                <div className="w-100">
                    <div className="flex w-[100%]">
                        <Link
                            href="/user-address"
                            className="flex items-center gap-3"
                        >
                            <HiArrowNarrowLeft className="ml-2 h-10 w-10" />
                            <p className="text-2xl text-gray-700">Kembali</p>
                        </Link>
                    </div>

                    <div className="p-8">
                        <h5 className="text-4xl mb-6 ">Tambah Alamat Baru</h5>

                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label text-2xl text-gray-600"
                                >
                                    Alias
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "gray",
                                        padding: "0.7rem",
                                    }}
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
                                    className="form-label  text-2xl text-gray-600"
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
                                    getOptionLabel={(option) => option.province}
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
                                    className="form-label  text-2xl text-gray-600"
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
                                    getOptionValue={(option) => option.city_id}
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
                                        className="form-label  text-2xl text-gray-600"
                                    >
                                        Kecamatan
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="username"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "gray",
                                            padding: "0.7rem",
                                        }}
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
                                        className="form-label  text-2xl text-gray-600"
                                    >
                                        Kelurahan
                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="username"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "gray",
                                            padding: "0.7rem",
                                        }}
                                        onChange={(e) =>
                                            setData(
                                                "village_id",
                                                e.target.value
                                            )
                                        }
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-3 flex-1">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label  text-2xl text-gray-600"
                                    >
                                        Zipcode
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        name="username"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "gray",
                                            padding: "0.7rem",
                                        }}
                                        onChange={(e) =>
                                            setData("zipcode", e.target.value)
                                        }
                                        placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="flex gap-3"></div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label  text-2xl text-gray-600"
                                >
                                    Alamat
                                </label>

                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    style={{
                                        fontSize: "1.5rem",
                                        color: "gray",
                                        padding: "0.7rem",
                                    }}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    placeholder="example: Jl.Marsma R. Iswahyudi"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-600 text-2xl text-white py-3 px-5 rounded mt-6"
                            >
                                {processing ? "Menyimpan..." : "Simpan"}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}
