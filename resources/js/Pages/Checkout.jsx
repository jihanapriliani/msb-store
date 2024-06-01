import { Link, Head, router, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { route } from "ziggy-js";

export default function Checkout(props) {
    const { flash } = usePage().props;
    const { carts, addresses } = props;
    const [subTotal, setSubTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(0);
    const [weight, setWeight] = useState(0);
    const [selectedAddress, setSelectedAddress] = useState({});

    const [note, setNote] = useState("");
    const [loadAddress, setLoadAddress] = useState(false);

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

        if (flash.success) {
            toast.success(flash.success, {
                position: "top-right",
            });

            flash.success = null;
        }
    }, []);

    useEffect(() => {
        const requestData = {
            origin: 19,
            destination: selectedAddress.city_id,
            weight: weight,
            courier: "jne",
        };

        setLoadAddress(true);

        axios
            .post("/api/get-shipping-cost", { params: requestData })
            .then((response) => {
                setLoadAddress(false);
                setShippingCost(response.data[0].costs[0].cost[0].value);
            })
            .catch((error) => {
                console.error(error.message);
            });
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
                                                <h2 className="section__header--title h3">
                                                    Alamat
                                                </h2>
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
                                                            onClick={() =>
                                                                toggleSelect(
                                                                    address
                                                                )
                                                            }
                                                        >
                                                            <div className="card-body">
                                                                <h4>
                                                                    {
                                                                        address.alias
                                                                    }
                                                                </h4>

                                                                <p>
                                                                    {`${address.address}, ${address.province}, ${address.city}, ${address.zipcode}`}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
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
                                                    Continue To Shop
                                                </p>
                                            </Link>
                                            <Link
                                                className="previous__link--content"
                                                href="/cart"
                                            >
                                                <p className="text-2xl">
                                                    Return to cart
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
                                                        {loadAddress
                                                            ? "Sedang Mengambil Data....."
                                                            : `Rp ${shippingCost.toLocaleString()}`}
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
                                        className="checkout__now--btn primary__btn"
                                        type="button"
                                        style={{
                                            marginTop: "3rem",
                                        }}
                                        onClick={handleOnCheckout}
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
