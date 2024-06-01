import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Tabs } from "flowbite-react";

import TransactionCard from "@/Components/TransactionCard";
import UserSidebar from "@/Components/UserSidebar";
import { Link, router, usePage } from "@inertiajs/react";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowLeft, HiCalendar, HiPhone } from "react-icons/hi";
import { useEffect } from "react";

import Select from "react-select";
import { useForm } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";

export default function UserAddressEdit({ address }) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        setError,
        clearErrors,
    } = useForm({
        alias: address.alias,
        province_id: address.province_id,
        city_id: address.city_id,
        district_id: address.district_id,
        village: address.village,
        zipcode: address.zipcode,
        country: address.country,
        address: address.address,
    });

    const { flash } = usePage().props;
    useEffect(() => {
        if (flash.error) {
            toast.error(flash.error, {
                position: "top-right",
            });

            flash.error = null;
        }

        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, [flash]);

    const submit = (e) => {
        e.preventDefault();
        clearErrors();

        router.post(
            route("profile.address.update", address.id),
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
                onSuccess: () => {
                    console.log("success");
                    reset();
                },
            }
        );
    };

    const [provinces, setProvinces] = useState([]);

    const [cities, setCities] = useState([]);

    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        axios
            .get(route("api.get_provinces"))
            .then((res) => {
                setProvinces(res.data);
                if (address.province_id) {
                    fetchCities();
                    if (address.city_id) {
                        fetchDistricts();
                    }
                }
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (data.province_id) {
            fetchCities(data.province_id);
        } else {
            setCities([]);
            setDistricts([]);
        }
    }, [data.province_id]);

    useEffect(() => {
        if (data.city_id) {
            fetchDistricts(data.city_id);
        } else {
            setDistricts([]);
        }
    }, [data.city_id]);

    const fetchCities = () => {
        axios
            .get(route("api.get_cities"), {
                params: {
                    province_id: data.province_id,
                },
            })
            .then((res) => setCities(res.data))
            .catch((err) => console.log(err));
    };

    const fetchDistricts = () => {
        axios
            .get(route("api.get_districts"), {
                params: {
                    city_id: data.city_id,
                },
            })
            .then((res) => setDistricts(res.data))
            .catch((err) => console.log(err));
    };

    return (
        <GuestLayout>
            <ToastContainer />
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
                        <h5 className="text-4xl mb-6">Edit Alamat</h5>

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
                                    value={data.alias}
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
                                <p className="text-red-500">{errors.alias}</p>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label  text-2xl text-gray-600"
                                >
                                    Provinsi
                                </label>

                                <Select
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            fontSize: "1.5rem",
                                        }),
                                    }}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isClearable
                                    isSearchable
                                    name="province"
                                    value={
                                        provinces.find(
                                            (province) =>
                                                province.province_id ==
                                                data.province_id
                                        ) || null
                                    }
                                    options={provinces ?? []}
                                    getOptionLabel={(option) => option.province}
                                    getOptionValue={(option) =>
                                        option.province_id
                                    }
                                    onChange={(province) => {
                                        setData({
                                            ...data,
                                            province_id: province
                                                ? province.province_id
                                                : "",
                                            city_id: "",
                                            district_id: "",
                                        });
                                        setCities([]); // Reset cities when province changes
                                        setDistricts([]); // Reset districts when province changes
                                    }}
                                />
                                <p className="text-red-500">
                                    {errors.province_id}
                                </p>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label  text-2xl text-gray-600"
                                >
                                    Kota
                                </label>

                                <Select
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            fontSize: "1.5rem",
                                        }),
                                    }}
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isClearable
                                    isSearchable
                                    name="province"
                                    value={
                                        cities.find(
                                            (city) =>
                                                city.city_id == data.city_id
                                        ) || null
                                    }
                                    options={cities ?? []}
                                    getOptionLabel={(option) =>
                                        option.city_name
                                    }
                                    getOptionValue={(option) => option.city_id}
                                    onChange={(city) => {
                                        setData({
                                            ...data,
                                            city_id: city ? city.city_id : "",
                                            district_id: "",
                                        });
                                        setDistricts([]); // Reset districts when city changes
                                    }}
                                />
                                <p className="text-red-500">{errors.city_id}</p>
                            </div>

                            <div className="flex gap-3">
                                <div className="mb-3 flex-1">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label  text-2xl text-gray-600"
                                    >
                                        Kecamatan
                                    </label>

                                    <Select
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                fontSize: "1.5rem",
                                            }),
                                        }}
                                        className="basic-single"
                                        classNamePrefix="select"
                                        isClearable
                                        isSearchable
                                        name="province"
                                        value={
                                            districts.find(
                                                (district) =>
                                                    district.district_id ===
                                                    data.district_id
                                            ) || null
                                        }
                                        options={districts ?? []}
                                        getOptionLabel={(option) =>
                                            option.district_name
                                        }
                                        getOptionValue={(option) =>
                                            option.district_id
                                        }
                                        onChange={(district) => {
                                            setData({
                                                ...data,
                                                district_id: district
                                                    ? district.district_id
                                                    : "",
                                            });
                                        }}
                                    />

                                    <p className="text-red-500">
                                        {errors.district_id}
                                    </p>
                                </div>

                                <div className="mb-3 flex-1">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label  text-2xl text-gray-600"
                                    >
                                        Kelurahan
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        aria-describedby=""
                                        value={data.village}
                                        name="username"
                                        style={{
                                            fontSize: "1.5rem",
                                            color: "gray",
                                            padding: "0.7rem",
                                        }}
                                        onChange={(e) =>
                                            setData("village", e.target.value)
                                        }
                                        placeholder=""
                                    />
                                    <p className="text-red-500">
                                        {errors.village}
                                    </p>
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
                                        value={data.zipcode}
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
                                    <p className="text-red-500">
                                        {errors.zipcode}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label  text-2xl text-gray-600"
                                >
                                    Alamat
                                </label>

                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    value={data.address}
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
                                <p className="text-red-500">{errors.address}</p>
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
