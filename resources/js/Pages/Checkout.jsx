import { Link, Head, router, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "@inertiajs/react";
import Select from "react-select";

import axios from "axios";
import { route } from "ziggy-js";
import { HiPencilAlt } from "react-icons/hi";

export default function Checkout(props) {
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

    const { carts, addresses } = props;
    const [subTotal, setSubTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [weight, setWeight] = useState(0);
    const [selectedAddress, setSelectedAddress] = useState({});

    const [note, setNote] = useState("");
    const [loadAddress, setLoadAddress] = useState(false);

    const defaultFormAddress = {
        id: "",
        alias: "",
        province_id: "",
        city_id: "",
        district_id: "",
        village: "",
        phone: "",
        zipcode: "",
        country: "Indonesia",
        address: "",
    };

    const { post, processing, errors, reset, setError, clearErrors } =
        useForm(defaultFormAddress);

    const [formAddress, setFormAddress] = useState({
        show: false,
        mode: "create",
        data: defaultFormAddress,
    });

    const [provinces, setProvinces] = useState([]);

    const [cities, setCities] = useState([]);

    const [districts, setDistricts] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        clearErrors();
        if (formAddress.mode === "create") {
            router.post(
                route("profile.address.store"),
                {
                    ...formAddress.data,
                    route: "checkout",
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
                        setFormAddress({
                            show: false,
                            mode: "create",
                            data: defaultFormAddress,
                        });
                        setFormAddress({
                            show: false,
                            mode: "create",
                            data: defaultFormAddress,
                        });
                    },
                }
            );
        } else {
            router.post(
                route("profile.address.update", formAddress.data.id),
                {
                    _method: "put",
                    route: "checkout",
                    ...formAddress.data,
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
                        setFormAddress({
                            show: false,
                            mode: "create",
                            data: defaultFormAddress,
                        });
                    },
                }
            );
        }
    };

    useEffect(() => {
        axios
            .get(route("api.get_provinces"))
            .then((res) => {
                setProvinces(res.data);
                if (formAddress.data.province_id) {
                    fetchCities();
                    if (formAddress.data.city_id) {
                        fetchDistricts();
                    }
                }
            })
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (formAddress.data.province_id) {
            fetchCities(formAddress.data.province_id);
        } else {
            setCities([]);
            setDistricts([]);
        }
    }, [formAddress.data.province_id]);

    useEffect(() => {
        if (formAddress.data.city_id) {
            fetchDistricts(formAddress.data.city_id);
        } else {
            setDistricts([]);
        }
    }, [formAddress.data.city_id]);

    const fetchCities = () => {
        axios
            .get(route("api.get_cities"), {
                params: {
                    province_id: formAddress.data.province_id,
                },
            })
            .then((res) => setCities(res.data))
            .catch((err) => console.log(err));
    };

    const fetchDistricts = () => {
        axios
            .get(route("api.get_districts"), {
                params: {
                    city_id: formAddress.data.city_id,
                },
            })
            .then((res) => setDistricts(res.data))
            .catch((err) => console.log(err));
    };

    const toggleSelect = (address) => {
        setSelectedAddress(address);
    };

    useEffect(() => {
        const currTotalItems = carts.reduce((acc, curr) => {
            const currTotal = curr.amount * curr.product.price;
            return acc + currTotal;
        }, 0);

        setSubTotal(currTotalItems);

        const totalWeight = carts.reduce((acc, curr) => {
            const currTotal = curr.amount * curr.product.unit_weight;
            return acc + currTotal;
        }, 0);
        setWeight(totalWeight * 1000);
    }, []);

    useEffect(() => {
        const requestData = {
            origin: 19,
            destination: selectedAddress.city_id,
            weight: weight,
            courier: "jne",
        };

        setLoadAddress(true);

        if (Object.keys(selectedAddress).length > 0) {
            axios
                .post("/api/get-shipping-cost", { params: requestData })
                .then((response) => {
                    setLoadAddress(false);
                    setShippingCost(response.data[0].costs[0].cost[0].value);
                })
                .catch((error) => {
                    console.error(error.message);
                });
        }
    }, [shippingCost, selectedAddress]);

    const handleOnCheckout = () => {
        if (Object.keys(selectedAddress).length === 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Alamat belum dipilih!",
            });
        } else {
            router.post(
                route("checkout", {
                    user_address_id: selectedAddress.id,
                    total_weight: weight,
                    total_price: subTotal,
                    shipping_cost: shippingCost,
                    note: note,
                })
            );
        }
    };

    return (
        <GuestLayout>
            <Head title="Pemesanan" />
            <ToastContainer />

            <main className="main__content_wrapper">
                <div className="checkout__page--area section--padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6">
                                <div className="main checkout__mian">
                                    <form action="#">
                                        <div className="checkout__content--step section__shipping--address">
                                            <div className="section__header mb-25 mt-[-5rem]">
                                                <div className="flex justify-between">
                                                    <h2 className="section__header--title text-xl">
                                                        Alamat
                                                    </h2>
                                                    <button
                                                        className="continue__shipping--btn primary__btn border-radius-5"
                                                        type="button"
                                                        onClick={() => {
                                                            setFormAddress({
                                                                show: !formAddress.show,
                                                                data: defaultFormAddress,
                                                                mode: "create",
                                                            });
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                color: "white",
                                                                fontWeight:
                                                                    "300",
                                                            }}
                                                        >
                                                            Tambah Alamat
                                                        </p>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                {addresses.map(
                                                    (address, index) => (
                                                        <div
                                                            className={`card flex-1 hover:cursor-pointer ${
                                                                selectedAddress.id ===
                                                                    address.id &&
                                                                "border border-secondary shadow-xl"
                                                            }`}
                                                            key={index}
                                                        >
                                                            <div className="flex justify-between">
                                                                <div
                                                                    className="card-body w-full"
                                                                    onClick={() =>
                                                                        toggleSelect(
                                                                            address
                                                                        )
                                                                    }
                                                                >
                                                                    <h4>
                                                                        {
                                                                            address.alias
                                                                        }
                                                                    </h4>

                                                                    <p>
                                                                        {`${address.address}, ${address.province}, ${address.city}, ${address.zipcode}`}
                                                                    </p>
                                                                </div>
                                                                <button
                                                                    className="text-gray-500 text-5xl"
                                                                    onClick={() => {
                                                                        setFormAddress(
                                                                            {
                                                                                show: !formAddress.show,
                                                                                data: address,
                                                                                mode: "edit",
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    <HiPencilAlt />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                        <div
                                            className={`checkout__content--step ${
                                                formAddress.show
                                                    ? "d-block"
                                                    : "d-none"
                                            }  mb-25 mt-5rem`}
                                        >
                                            <div className="section__header mb-25 mt-5rem">
                                                <h2 className="section__header--title text-xl">
                                                    {formAddress.mode === "edit"
                                                        ? "Edit Alamat"
                                                        : "Tambah Alamat"}
                                                </h2>
                                            </div>
                                            <div className="mb-3">
                                                <form>
                                                    <div className="mb-3">
                                                        <label
                                                            htmlFor="exampleInputEmail1"
                                                            className="form-label text-2xl text-gray-600 mb-3"
                                                        >
                                                            Alias
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            style={{
                                                                fontSize:
                                                                    "1.5rem",
                                                                color: "gray",
                                                                padding:
                                                                    "0.7rem",
                                                            }}
                                                            id=""
                                                            aria-describedby=""
                                                            name="alias"
                                                            value={
                                                                formAddress.data
                                                                    .alias
                                                            }
                                                            onChange={(e) =>
                                                                setFormAddress({
                                                                    ...formAddress,
                                                                    data: {
                                                                        ...formAddress.data,
                                                                        alias: e
                                                                            .target
                                                                            .value,
                                                                    },
                                                                })
                                                            }
                                                            placeholder="example: Rumah Utama, Kantor"
                                                        />
                                                        <p className="text-red-500">
                                                            {errors.alias}
                                                        </p>
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
                                                                control: (
                                                                    baseStyles,
                                                                    state
                                                                ) => ({
                                                                    ...baseStyles,
                                                                    fontSize:
                                                                        "1.5rem",
                                                                }),
                                                            }}
                                                            className="basic-single"
                                                            classNamePrefix="select"
                                                            isClearable
                                                            isSearchable
                                                            name="province"
                                                            value={
                                                                provinces.find(
                                                                    (
                                                                        province
                                                                    ) =>
                                                                        province.province_id ==
                                                                        formAddress
                                                                            .data
                                                                            .province_id
                                                                ) || null
                                                            }
                                                            options={
                                                                provinces ?? []
                                                            }
                                                            getOptionLabel={(
                                                                option
                                                            ) =>
                                                                option.province
                                                            }
                                                            getOptionValue={(
                                                                option
                                                            ) =>
                                                                option.province_id
                                                            }
                                                            onChange={(
                                                                province
                                                            ) => {
                                                                setFormAddress({
                                                                    ...formAddress,
                                                                    data: {
                                                                        ...formAddress.data,
                                                                        province_id:
                                                                            province.province_id,
                                                                        province:
                                                                            province.province,
                                                                    },
                                                                });
                                                                setCities([]); // Reset cities when province changes
                                                                setDistricts(
                                                                    []
                                                                ); // Reset districts when province changes
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
                                                                control: (
                                                                    baseStyles,
                                                                    state
                                                                ) => ({
                                                                    ...baseStyles,
                                                                    fontSize:
                                                                        "1.5rem",
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
                                                                        city.city_id ==
                                                                        formAddress
                                                                            .data
                                                                            .city_id
                                                                ) || null
                                                            }
                                                            options={
                                                                cities ?? []
                                                            }
                                                            getOptionLabel={(
                                                                option
                                                            ) =>
                                                                option.city_name
                                                            }
                                                            getOptionValue={(
                                                                option
                                                            ) => option.city_id}
                                                            onChange={(
                                                                city
                                                            ) => {
                                                                setFormAddress({
                                                                    ...formAddress,
                                                                    data: {
                                                                        ...formAddress.data,
                                                                        city_id:
                                                                            city.city_id,
                                                                        city: city.city_name,
                                                                    },
                                                                });
                                                                setDistricts(
                                                                    []
                                                                ); // Reset districts when city changes
                                                            }}
                                                        />
                                                        <p className="text-red-500">
                                                            {errors.city_id}
                                                        </p>
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
                                                                    control: (
                                                                        baseStyles,
                                                                        state
                                                                    ) => ({
                                                                        ...baseStyles,
                                                                        fontSize:
                                                                            "1.5rem",
                                                                    }),
                                                                }}
                                                                className="basic-single"
                                                                classNamePrefix="select"
                                                                isClearable
                                                                isSearchable
                                                                name="province"
                                                                value={
                                                                    districts.find(
                                                                        (
                                                                            district
                                                                        ) =>
                                                                            district.district_id ===
                                                                            formAddress
                                                                                .data
                                                                                .district_id
                                                                    ) || null
                                                                }
                                                                options={
                                                                    districts ??
                                                                    []
                                                                }
                                                                getOptionLabel={(
                                                                    option
                                                                ) =>
                                                                    option.district_name
                                                                }
                                                                getOptionValue={(
                                                                    option
                                                                ) =>
                                                                    option.district_id
                                                                }
                                                                onChange={(
                                                                    district
                                                                ) => {
                                                                    setFormAddress(
                                                                        {
                                                                            ...formAddress,
                                                                            data: {
                                                                                ...formAddress.data,
                                                                                district_id:
                                                                                    district.district_id,
                                                                                district:
                                                                                    district.district_name,
                                                                            },
                                                                        }
                                                                    );
                                                                }}
                                                            />

                                                            <p className="text-red-500">
                                                                {
                                                                    errors.district_id
                                                                }
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
                                                                value={
                                                                    formAddress
                                                                        .data
                                                                        .village
                                                                }
                                                                name="village"
                                                                style={{
                                                                    fontSize:
                                                                        "1.5rem",
                                                                    color: "gray",
                                                                    padding:
                                                                        "0.7rem",
                                                                }}
                                                                onChange={(e) =>
                                                                    setFormAddress(
                                                                        {
                                                                            ...formAddress,
                                                                            data: {
                                                                                ...formAddress.data,
                                                                                village:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            },
                                                                        }
                                                                    )
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
                                                                value={
                                                                    formAddress
                                                                        .data
                                                                        .zipcode
                                                                }
                                                                style={{
                                                                    fontSize:
                                                                        "1.5rem",
                                                                    color: "gray",
                                                                    padding:
                                                                        "0.7rem",
                                                                }}
                                                                onChange={(e) =>
                                                                    setFormAddress(
                                                                        {
                                                                            ...formAddress,
                                                                            data: {
                                                                                ...formAddress.data,
                                                                                zipcode:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            },
                                                                        }
                                                                    )
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
                                                            class="form-control"
                                                            value={
                                                                formAddress.data
                                                                    .address
                                                            }
                                                            id="exampleFormControlTextarea1"
                                                            rows="3"
                                                            style={{
                                                                fontSize:
                                                                    "1.5rem",
                                                                color: "gray",
                                                                padding:
                                                                    "0.7rem",
                                                            }}
                                                            onChange={(e) =>
                                                                setFormAddress({
                                                                    ...formAddress,
                                                                    data: {
                                                                        ...formAddress.data,
                                                                        address:
                                                                            e
                                                                                .target
                                                                                .value,
                                                                    },
                                                                })
                                                            }
                                                            placeholder="example: Jl.Marsma R. Iswahyudi"
                                                        ></textarea>
                                                        <p className="text-red-500">
                                                            {errors.address}
                                                        </p>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        onClick={submit}
                                                        disabled={processing}
                                                        className="bg-red-600 text-2xl text-white py-3 px-5 rounded mt-6 w-full"
                                                    >
                                                        {processing
                                                            ? "Menyimpan..."
                                                            : "Simpan"}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="section__header">
                                                <h2 className="section__header--title h3">
                                                    Catatan Pesanan
                                                </h2>
                                            </div>
                                            <textarea
                                                className="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="6"
                                                style={{
                                                    fontSize: "1.5rem",
                                                }}
                                                onChange={(e) =>
                                                    setNote(e.target.value)
                                                }
                                            ></textarea>
                                        </div>
                                        <div className="checkout__content--step__footer d-flex align-items-center flex items-center  mt-4">
                                            <Link
                                                className="continue__shipping--btn primary__btn border-radius-5"
                                                href="/shop"
                                            >
                                                <p
                                                    style={{
                                                        color: "white",
                                                        fontWeight: "300",
                                                    }}
                                                >
                                                    Lanjut Belanja
                                                </p>
                                            </Link>
                                            <Link
                                                className="previous__link--content"
                                                href="/cart"
                                            >
                                                <p className="text-2xl">
                                                    Kembali Ke Keranjang
                                                </p>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <aside className="checkout__sidebar sidebar border-radius-10">
                                    <h2 className="checkout__order--summary__title text-center mb-15">
                                        Ringkasan Pesanan
                                    </h2>
                                    <div className="cart__table checkout__product--table">
                                        <table className="cart__table--inner">
                                            <tbody className="cart__table--body">
                                                {carts.map((cart, index) => (
                                                    <tr
                                                        className="cart__table--body__items"
                                                        key={index}
                                                    >
                                                        <td className="cart__table--body__list">
                                                            <div className="product__image two  d-flex align-items-center">
                                                                <div className="product__thumbnail border-radius-5">
                                                                    <a
                                                                        className="display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            className="display-block border-radius-5"
                                                                            src={
                                                                                window
                                                                                    .location
                                                                                    .origin +
                                                                                "/" +
                                                                                (cart
                                                                                    .product
                                                                                    .images[0]
                                                                                    .image ??
                                                                                    "assets/images/default.png")
                                                                            }
                                                                            alt="cart-product"
                                                                        />
                                                                    </a>
                                                                    <span className="product__thumbnail--quantity">
                                                                        {
                                                                            cart.amount
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="product__description text-2xl">
                                                                    <h4 className="product__description--name">
                                                                        <a href="product-details.html">
                                                                            <p className="text-2xl">
                                                                                {
                                                                                    cart
                                                                                        .product
                                                                                        .name
                                                                                }
                                                                            </p>
                                                                        </a>
                                                                    </h4>

                                                                    <h6 className="text-xl">
                                                                        Rp{" "}
                                                                        {cart.product.price.toLocaleString()}
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="cart__table--body__list">
                                                            <span className="cart__price">
                                                                Rp{" "}
                                                                {(
                                                                    cart.amount *
                                                                    cart.product
                                                                        .price
                                                                ).toLocaleString()}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="checkout__total">
                                        <table className="checkout__total--table">
                                            <tbody className="checkout__total--body">
                                                <tr className="checkout__total--items">
                                                    <td className="checkout__total--title text-left text-2xl">
                                                        Subtotal{" "}
                                                    </td>
                                                    <td className="checkout__total--calculated__text text-right text-2xl">
                                                        Rp{" "}
                                                        {subTotal.toLocaleString()}
                                                    </td>
                                                </tr>
                                                <tr className="checkout__total--items">
                                                    <td className="checkout__total--title text-left text-2xl">
                                                        Biaya Pengiriman
                                                    </td>
                                                    <td className="checkout__total--calculated__text text-right text-2xl">
                                                        {selectedAddress.id
                                                            ? loadAddress
                                                                ? "Sedang Mengambil Data....."
                                                                : `Rp ${shippingCost.toLocaleString()}`
                                                            : "Pilih Alamat Terlebih Dahulu"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot className="checkout__total--footer">
                                                <tr className="checkout__total--footer__items">
                                                    <td className="checkout__total--footer__title checkout__total--footer__list text-left text-3xl">
                                                        <p className="text-3xl">
                                                            Total{" "}
                                                        </p>
                                                    </td>
                                                    <td className="checkout__total--footer__amount checkout__total--footer__list text-right">
                                                        Rp{" "}
                                                        {(
                                                            shippingCost +
                                                            subTotal
                                                        ).toLocaleString()}
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <button
                                        className={`checkout__now--btn primary__btn ${
                                            loadAddress || !selectedAddress.id
                                                ? "disabled:opacity-50 disabled:cursor-not-allowed"
                                                : ""
                                        }`}
                                        type="button"
                                        style={{
                                            marginTop: "3rem",
                                        }}
                                        onClick={handleOnCheckout}
                                        disabled={
                                            loadAddress || !selectedAddress.id
                                        }
                                    >
                                        <p style={{ color: "white" }}>
                                            Checkout Now
                                        </p>
                                    </button>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}
