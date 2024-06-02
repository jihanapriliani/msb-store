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
        items.forEach((item) => {
            if (item.product_id === product_id) {
                if (item.amount + 1 <= item.product.stock) {
                    axios
                        .put(`/api/user/cart/${item.id}`, {
                            amount: item.amount + 1,
                        })
                        .then((res) => {
                            setItems((prevItems) =>
                                prevItems.map((prevItem) =>
                                    prevItem.product_id === product_id
                                        ? {
                                              ...prevItem,
                                              amount: prevItem.amount + 1,
                                          }
                                        : prevItem
                                )
                            );
                        })
                        .catch((err) => console.error(err));

                    return { ...item, amount: item.amount + 1 };
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Batas Pembelian Maksimal!",
                    });
                }
            }
        });
    };

    const handleDecreaseAmount = (product_id) => {
        const item = items.find((item) => item.product_id === product_id);

        if (item.amount - 1 === 0) {
            Swal.fire({
                title: "Yakin ingin menghapus?",
                text: "Aksi berikut tidak bisa mengembalikan data!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "gray",
                confirmButtonText: "Hapus!",
                cancelButtonText: "Batal",
            }).then((result) => {
                if (result.isConfirmed) {
                    handleDeleteItem(item.id);
                    window.location.reload();
                }
            });
        } else {
            const updatedItems = items.map((item) => {
                if (item.product_id === product_id) {
                    return { ...item, amount: item.amount - 1 };
                } else {
                    return item;
                }
            });

            setItems(updatedItems);

            axios
                .put(`/api/user/cart/${item.id}`, {
                    amount: item.amount - 1,
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
        }
    };

    const handleDeleteItem = (id) => {
        router.delete(
            route("user.cart.destroy", {
                id: id,
            })
        );
        window.location.reload();
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
                <section
                    className="cart__section section--padding min-w-[60vw]"
                    style={{ minWidth: "50vw", minHeight: "50vh" }}
                >
                    <div className="container-fluid">
                        <div className="cart__section--inner">
                            <form action="#">
                                <h2 className="cart__title mb-30">
                                    Keranjang Belanja
                                </h2>

                                {items.length !== 0 ? (
                                    <div className="row">
                                        <div className="">
                                            <div className="cart__table">
                                                <table className="cart__table--inner">
                                                    <thead className="cart__table--header">
                                                        <tr className="cart__table--header__items">
                                                            <th className="cart__table--header__list">
                                                                Produk
                                                            </th>
                                                            <th className="cart__table--header__list">
                                                                Harga
                                                            </th>
                                                            <th className="cart__table--header__list">
                                                                Jumlah
                                                            </th>
                                                            <th className="cart__table--header__list">
                                                                Total
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="cart__table--body">
                                                        {items &&
                                                            items.map(
                                                                (
                                                                    cart,
                                                                    index
                                                                ) => (
                                                                    <tr
                                                                        className="cart__table--body__items"
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <td className="cart__table--body__list">
                                                                            <div className="cart__product d-flex align-items-center">
                                                                                <button
                                                                                    className="cart__remove--btn flex justify-center items-center"
                                                                                    aria-label="search button"
                                                                                    type="button"
                                                                                    onClick={() => {
                                                                                        Swal.fire(
                                                                                            {
                                                                                                title: "Yakin ingin menghapus produk ini?",
                                                                                                text: "Aksi berikut tidak bisa mengembalikan data!",
                                                                                                icon: "warning",
                                                                                                showCancelButton: true,
                                                                                                confirmButtonColor:
                                                                                                    "#d33",
                                                                                                cancelButtonColor:
                                                                                                    "gray",
                                                                                                confirmButtonText:
                                                                                                    "Hapus!",
                                                                                                cancelButtonText:
                                                                                                    "Batal",
                                                                                            }
                                                                                        ).then(
                                                                                            (
                                                                                                result
                                                                                            ) => {
                                                                                                if (
                                                                                                    result.isConfirmed
                                                                                                ) {
                                                                                                    handleDeleteItem(
                                                                                                        cart.id
                                                                                                    );
                                                                                                    window.location.reload();
                                                                                                }
                                                                                            }
                                                                                        );
                                                                                    }}
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
                                                                                    <Link
                                                                                        href={`/detail-product/${cart.product.id}`}
                                                                                    >
                                                                                        <img
                                                                                            className="border-radius-5"
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
                                                                                    </Link>
                                                                                </div>
                                                                                <div className="cart__content">
                                                                                    <h3 className="cart__content--title h4">
                                                                                        <Link
                                                                                            href={`/detail-product/${cart.product.id}`}
                                                                                        >
                                                                                            {
                                                                                                cart
                                                                                                    .product
                                                                                                    .name
                                                                                            }
                                                                                        </Link>
                                                                                    </h3>

                                                                                    <span className="cart__content--variant">
                                                                                        Berat:
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
                                                    <Link
                                                        className="continue__shopping--link"
                                                        href="/shop"
                                                    >
                                                        Lanjut Belanja
                                                    </Link>
                                                    <button
                                                        className="continue__shopping--clear"
                                                        type="button"
                                                        onClick={() => {
                                                            Swal.fire({
                                                                title: "Yakin ingin menghapus semua?",
                                                                text: "Aksi berikut tidak bisa mengembalikan data!",
                                                                icon: "warning",
                                                                showCancelButton: true,
                                                                confirmButtonColor:
                                                                    "#d33",
                                                                cancelButtonColor:
                                                                    "gray",
                                                                confirmButtonText:
                                                                    "Hapus!",
                                                                cancelButtonText:
                                                                    "Batal",
                                                            }).then(
                                                                (result) => {
                                                                    if (
                                                                        result.isConfirmed
                                                                    ) {
                                                                        router.delete(
                                                                            route(
                                                                                "user.cart.clear"
                                                                            )
                                                                        );
                                                                        window.location.reload();
                                                                    }
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        Bersihkan Keranjang
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
                                ) : (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            fontSize: "2rem",
                                        }}
                                    >
                                        <p>
                                            Tidak ada data produk
                                            <Link
                                                href="/shop"
                                                style={{
                                                    marginLeft: "1rem",
                                                    color: "black",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Belanja Sekarang!
                                            </Link>
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </GuestLayout>
    );
}
