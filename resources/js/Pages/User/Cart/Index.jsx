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
                className="main__content_wrapper "
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <section className="cart__section section--padding min-w-[60vw]">
                    <div className="container-fluid">
                        <div className="cart__section--inner">
                            <form action="#">
                                <h2 className="cart__title mb-30">
                                    Shopping Cart
                                </h2>
                                <div className="row">
                                    <div className="">
                                        <div className="cart__table">
                                            <table className="cart__table--inner">
                                                <thead className="cart__table--header">
                                                    <tr className="cart__table--header__items">
                                                        <th className="cart__table--header__list">
                                                            Product
                                                        </th>
                                                        <th className="cart__table--header__list">
                                                            Price
                                                        </th>
                                                        <th className="cart__table--header__list">
                                                            Quantity
                                                        </th>
                                                        <th className="cart__table--header__list">
                                                            Total
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="cart__table--body">
                                                    {items &&
                                                        items.map(
                                                            (cart, index) => (
                                                                <tr
                                                                    className="cart__table--body__items"
                                                                    key={index}
                                                                >
                                                                    <td className="cart__table--body__list">
                                                                        <div className="cart__product d-flex align-items-center">
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
                                                                            <div className="cart__thumbnail">
                                                                                <a href="product-details.html">
                                                                                    <img
                                                                                        className="border-radius-5"
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
                                                                            <div className="cart__content">
                                                                                <h3 className="cart__content--title h4">
                                                                                    <a href="product-details.html">
                                                                                        {
                                                                                            cart
                                                                                                .product
                                                                                                .name
                                                                                        }
                                                                                    </a>
                                                                                </h3>

                                                                                <span className="cart__content--variant">
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
                                                                    <td className="cart__table--body__list">
                                                                        <span className="cart__price">
                                                                            Rp{" "}
                                                                            {cart.product.price.toLocaleString()}
                                                                        </span>
                                                                    </td>
                                                                    <td className="cart__table--body__list">
                                                                        <div className="quantity__box">
                                                                            <button
                                                                                type="button"
                                                                                className="quantity__value quickview__value--quantity decrease"
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
                                                                                    className="quantity__number quickview__value--number"
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
                                                                                className="quantity__value quickview__value--quantity increase"
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
                                                                    <td className="cart__table--body__list">
                                                                        <span className="cart__price end">
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
                                            <div className="continue__shopping d-flex justify-content-between">
                                                <a
                                                    className="continue__shopping--link"
                                                    href="shop.html"
                                                >
                                                    Continue shopping
                                                </a>
                                                <button
                                                    className="continue__shopping--clear"
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
