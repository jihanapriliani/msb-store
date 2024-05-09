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
    const [selectedAddress, setSelectedAddress] = useState(addresses[0]);

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

        axios
            .post("/api/get-shipping-cost", { params: requestData })
            .then((response) => {
                setShippingCost(response.data[0].costs[0].cost[0].value);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [shippingCost, selectedAddress]);

    return (
        <GuestLayout>
            <ToastContainer />

            <main class="main__content_wrapper">
                <div class="checkout__page--area section--padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7 col-md-6">
                                <div class="main checkout__mian">
                                    <form action="#">
                                        <div class="checkout__content--step section__shipping--address">
                                            <div class="section__header mb-25">
                                                <h2 class="section__header--title h3">
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
                                                                "bg-secondary text-white"
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
                                        <div class="mb-3">
                                            <div class="section__header">
                                                <h2 class="section__header--title h3">
                                                    Catatan Pesanan
                                                </h2>
                                            </div>
                                            <textarea
                                                class="form-control"
                                                id="exampleFormControlTextarea1"
                                                rows="5"
                                            ></textarea>
                                        </div>
                                        <div class="checkout__content--step__footer d-flex align-items-center">
                                            <a
                                                class="continue__shipping--btn primary__btn border-radius-5"
                                                href="index.html"
                                            >
                                                <p
                                                    style={{
                                                        color: "white",
                                                        fontWeight: "300",
                                                    }}
                                                >
                                                    Continue To Shipping
                                                </p>
                                            </a>
                                            <Link
                                                class="previous__link--content"
                                                href="/cart"
                                            >
                                                Return to cart
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-6">
                                <aside class="checkout__sidebar sidebar border-radius-10">
                                    <h2 class="checkout__order--summary__title text-center mb-15">
                                        Ringkasan Pesanan
                                    </h2>
                                    <div class="cart__table checkout__product--table">
                                        <table class="cart__table--inner">
                                            <tbody class="cart__table--body">
                                                {carts.map((cart, index) => (
                                                    <tr
                                                        class="cart__table--body__items"
                                                        key={index}
                                                    >
                                                        <td class="cart__table--body__list">
                                                            <div class="product__image two  d-flex align-items-center">
                                                                <div class="product__thumbnail border-radius-5">
                                                                    <a
                                                                        class="display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            class="display-block border-radius-5"
                                                                            src={
                                                                                window
                                                                                    .location
                                                                                    .origin +
                                                                                    "/" +
                                                                                    (cart
                                                                                        .product
                                                                                        .images[0]
                                                                                        .image ?? "assets/images/default.png")
                                                                            }
                                                                            alt="cart-product"
                                                                        />
                                                                    </a>
                                                                    <span class="product__thumbnail--quantity">
                                                                        {
                                                                            cart.amount
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div class="product__description">
                                                                    <h4 class="product__description--name">
                                                                        <a href="product-details.html">
                                                                            {
                                                                                cart
                                                                                    .product
                                                                                    .name
                                                                            }
                                                                        </a>
                                                                    </h4>

                                                                    <h6>
                                                                        Rp{" "}
                                                                        {
                                                                            cart
                                                                                .product
                                                                                .price
                                                                        }
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="cart__table--body__list">
                                                            <span class="cart__price">
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

                                    <div class="checkout__total">
                                        <table class="checkout__total--table">
                                            <tbody class="checkout__total--body">
                                                <tr class="checkout__total--items">
                                                    <td class="checkout__total--title text-left">
                                                        Subtotal{" "}
                                                    </td>
                                                    <td class="checkout__total--calculated__text text-right">
                                                        Rp{" "}
                                                        {subTotal.toLocaleString()}
                                                    </td>
                                                </tr>
                                                <tr class="checkout__total--items">
                                                    <td class="checkout__total--title text-left">
                                                        Shipping
                                                    </td>
                                                    <td class="checkout__total--calculated__text text-right">
                                                        Rp{" "}
                                                        {shippingCost.toLocaleString()}
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot class="checkout__total--footer">
                                                <tr class="checkout__total--footer__items">
                                                    <td class="checkout__total--footer__title checkout__total--footer__list text-left">
                                                        Total{" "}
                                                    </td>
                                                    <td class="checkout__total--footer__amount checkout__total--footer__list text-right">
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

                                    <Link
                                        class="checkout__now--btn primary__btn"
                                        type="submit"
                                        style={{
                                            marginTop: "3rem",
                                        }}
                                        href={route("checkout")}
                                        method="post"
                                        data={{
                                            user_address_id: selectedAddress.id,
                                            total_weight: weight,
                                            total_price: subTotal,
                                            shipping_cost: shippingCost,
                                        }}
                                    >
                                        <p style={{ color: "white" }}>
                                            Checkout Now
                                        </p>
                                    </Link>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}
