import { Link, Head, router, usePage } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index(props) {
    const { flash } = usePage().props;
    const { carts } = props;
    const [items, setItems] = useState(carts);
    const [subTotal, setSubTotal] = useState(0);

    const handleIncreaseAmount = (product_id) => {
        const updatedItems = items.map((item) => {
            if (item.product_id === product_id) {
                if (item.amount + 1 < item.product.stock) {
                    axios
                        .put(`/api/user/cart/${item.id}`, {
                            amount: item.amount + 1,
                        })
                        .then((res) => console.log(res))
                        .catch((err) => console.log(err));

                    return { ...item, amount: item.amount + 1 };
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Batas Pembelian Maksimal!",
                    });
                }
            } else {
                return item;
            }
        });

        setItems(updatedItems);
    };

    const handleDecreaseAmount = (product_id) => {
        const updatedItems = items.map((item) => {
            if (item.product_id === product_id) {
                if (item.amount - 1 <= 0) {
                    handleDeleteItem(item.id);
                } else {
                    axios
                        .put(`/api/user/cart/${item.id}`, {
                            amount: item.amount - 1,
                        })
                        .then((res) => console.log(res))
                        .catch((err) => console.log(err));

                    return { ...item, amount: item.amount - 1 };
                }
            } else {
                return item;
            }
        });

        setItems(updatedItems);
    };

    useEffect(() => {
        const currTotalItems = items.reduce((acc, curr) => {
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
    }, [items]);

    const handleDeleteItem = (id) => {
        router.delete(
            route("user.cart.destroy", {
                id: id,
            })
        );
    };

    return (
        <GuestLayout>
            <ToastContainer />
            <main
                class="main__content_wrapper "
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <section class="cart__section section--padding min-w-[60vw]">
                    <div class="container-fluid">
                        <div class="cart__section--inner">
                            <form action="#">
                                <h2 class="cart__title mb-30">Shopping Cart</h2>
                                <div class="row">
                                    <div class="">
                                        <div class="cart__table">
                                            <table class="cart__table--inner">
                                                <thead class="cart__table--header">
                                                    <tr class="cart__table--header__items">
                                                        <th class="cart__table--header__list">
                                                            Product
                                                        </th>
                                                        <th class="cart__table--header__list">
                                                            Price
                                                        </th>
                                                        <th class="cart__table--header__list">
                                                            Quantity
                                                        </th>
                                                        <th class="cart__table--header__list">
                                                            Total
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="cart__table--body">
                                                    {items &&
                                                        items.map(
                                                            (cart, index) => (
                                                                <tr
                                                                    class="cart__table--body__items"
                                                                    key={index}
                                                                >
                                                                    <td class="cart__table--body__list">
                                                                        <div class="cart__product d-flex align-items-center">
                                                                            <button
                                                                                className="cart__remove--btn flex justify-center items-center"
                                                                                aria-label="search button"
                                                                                type="button"
                                                                                onClick={() =>
                                                                                    handleDeleteItem(
                                                                                        cart.id
                                                                                    )
                                                                                }
                                                                            >
                                                                                <svg
                                                                                    fill="currentColor"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    viewBox="0 0 24 24"
                                                                                    width="16px"
                                                                                    height="16px"
                                                                                >
                                                                                    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
                                                                                </svg>
                                                                            </button>
                                                                            <div class="cart__thumbnail">
                                                                                <a href="product-details.html">
                                                                                    <img
                                                                                        class="border-radius-5"
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
                                                                            </div>
                                                                            <div class="cart__content">
                                                                                <h3 class="cart__content--title h4">
                                                                                    <a href="product-details.html">
                                                                                        {
                                                                                            cart
                                                                                                .product
                                                                                                .name
                                                                                        }
                                                                                    </a>
                                                                                </h3>

                                                                                <span class="cart__content--variant">
                                                                                    WEIGHT:
                                                                                    {
                                                                                        cart
                                                                                            .product
                                                                                            .unit_weight
                                                                                    }
                                                                                    Kg
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="cart__table--body__list">
                                                                        <span class="cart__price">
                                                                            Rp{" "}
                                                                            {cart.product.price.toLocaleString()}
                                                                        </span>
                                                                    </td>
                                                                    <td class="cart__table--body__list">
                                                                        <div class="quantity__box">
                                                                            <button
                                                                                type="button"
                                                                                class="quantity__value quickview__value--quantity decrease"
                                                                                aria-label="quantity value"
                                                                                value="Decrease Value"
                                                                                onClick={() =>
                                                                                    handleDecreaseAmount(
                                                                                        cart.product_id
                                                                                    )
                                                                                }
                                                                            >
                                                                                -
                                                                            </button>
                                                                            <label>
                                                                                <input
                                                                                    type="number"
                                                                                    class="quantity__number quickview__value--number"
                                                                                    value={
                                                                                        cart.amount
                                                                                    }
                                                                                    min={
                                                                                        0
                                                                                    }
                                                                                    data-counter
                                                                                />
                                                                            </label>
                                                                            <button
                                                                                type="button"
                                                                                class="quantity__value quickview__value--quantity increase"
                                                                                aria-label="quantity value"
                                                                                value="Increase Value"
                                                                                onClick={() =>
                                                                                    handleIncreaseAmount(
                                                                                        cart.product_id
                                                                                    )
                                                                                }
                                                                            >
                                                                                +
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                    <td class="cart__table--body__list">
                                                                        <span class="cart__price end">
                                                                            Rp{" "}
                                                                            {(
                                                                                cart.amount *
                                                                                cart
                                                                                    .product
                                                                                    .price
                                                                            ).toLocaleString()}
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                </tbody>
                                            </table>
                                            <div class="continue__shopping d-flex justify-content-between">
                                                <a
                                                    class="continue__shopping--link"
                                                    href="shop.html"
                                                >
                                                    Continue shopping
                                                </a>
                                                <button
                                                    class="continue__shopping--clear"
                                                    type="submit"
                                                >
                                                    Clear Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "end",
                                            marginTop: "3rem",
                                        }}
                                    >
                                        <h3 style={{ fontSize: "3rem" }}>
                                            Subtotal : Rp{" "}
                                            {subTotal.toLocaleString()}
                                        </h3>

                                        <Link
                                            className="cart__summary--footer__btn primary__btn checkout "
                                            style={{
                                                maxWidth: "30rem",
                                                textAlign: "center",
                                                marginTop: "2rem",
                                            }}
                                            href="/checkout"
                                        >
                                            <p style={{ color: "white" }}>
                                                Check Out
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </GuestLayout>
    );
}
