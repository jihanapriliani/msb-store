import { Link, Head, router, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState, useEffect } from "react";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout(props) {
    const { flash } = usePage().props;
    const { carts, addresses } = props;

    const [subTotal, setSubTotal] = useState(0);

    const [shippingCost, setShippingCost] = useState();

    const [selectedAddress, setSelectedAddress] = useState([]);
    const toggleSelect = (address) => {
        setSelectedAddress(address);
    };

    useEffect(() => {
        const currTotalItems = carts.reduce((acc, curr) => {
            const currTotal = curr.amount * curr.product.price;
            return acc + currTotal;
        }, 0);

        setSubTotal(currTotalItems);

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
            destination: 15,
            weight: 1300,
            courier: "jne",
        };

        axios
            .get("/api/get-shipping-cost", { params: requestData })
            .then((response) => {
                setShippingCost(response.data);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    console.log("INI SHIPPING COST NYA EHEHEHE", shippingCost);

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
                                        <div class="order-notes mb-20">
                                            <label
                                                class="checkout__input--label mb-5"
                                                for="order"
                                            >
                                                Order Notes{" "}
                                                <span class="checkout__input--label__star">
                                                    *
                                                </span>
                                            </label>
                                            <textarea
                                                class="checkout__notes--textarea__field border-radius-5"
                                                id="order"
                                                placeholder="Notes about your order, e.g. special notes for delivery."
                                                spellcheck="false"
                                            ></textarea>
                                        </div>
                                        <div class="checkout__content--step__footer d-flex align-items-center">
                                            <a
                                                class="continue__shipping--btn primary__btn border-radius-5"
                                                href="index.html"
                                            >
                                                Continue To Shipping
                                            </a>
                                            <a
                                                class="previous__link--content"
                                                href="cart.html"
                                            >
                                                Return to cart
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-6">
                                <aside class="checkout__sidebar sidebar border-radius-10">
                                    <h2 class="checkout__order--summary__title text-center mb-15">
                                        Your Order Summary
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
                                                                                cart
                                                                                    .product
                                                                                    .images[0]
                                                                                    .image
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
                                    <div class="checkout__discount--code">
                                        <form class="d-flex" action="#">
                                            <label>
                                                <input
                                                    class="checkout__discount--code__input--field border-radius-5"
                                                    placeholder="Gift card or discount code"
                                                    type="text"
                                                />
                                            </label>
                                            <button
                                                class="checkout__discount--code__btn primary__btn border-radius-5"
                                                type="submit"
                                            >
                                                Apply
                                            </button>
                                        </form>
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
                                                        Rp 40.000
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot class="checkout__total--footer">
                                                <tr class="checkout__total--footer__items">
                                                    <td class="checkout__total--footer__title checkout__total--footer__list text-left">
                                                        Total{" "}
                                                    </td>
                                                    <td class="checkout__total--footer__amount checkout__total--footer__list text-right">
                                                        $860.00
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    <button
                                        class="checkout__now--btn primary__btn"
                                        type="submit"
                                    >
                                        Checkout Now
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
