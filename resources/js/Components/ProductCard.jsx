import React from "react";

import { Link } from "@inertiajs/react";
import Swal from "sweetalert2";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductCard({ product, user }) {
    const handleAddProductToCart = (productId) => {
        if (user) {
            axios
                .post(`/api/add-product-to-cart`, {
                    product_id: productId,
                    user_id: user.id,
                })
                .then((res) => {
                    Swal.fire({
                        icon: "success",
                        title: "Produk berhasil masuk keranjang",
                    });
                })
                .catch((err) => console.log(err));
        } else {
            Swal.fire({
                icon: "error",
                title: "Login untuk menambahkan barang ke keranjang",
            });
        }
    };

    return (
        <div>
            <article className="product__card">
                <div className="product__card--thumbnail">
                    <a
                        className="product__card--thumbnail__link display-block"
                        href="product-details.html"
                    >
                        <img
                            className="product__card--thumbnail__img product__primary--img w-[300px] h-[200px] object-cover"
                            src={
                                window.location.origin +
                                "/" +
                                product.images[0].image
                            }
                            alt="product-img"
                        />
                        <img
                            className="product__card--thumbnail__img product__secondary--img"
                            src={
                                window.location.origin +
                                "/" +
                                product.images[0].image
                            }
                            alt="product-img"
                        />
                    </a>

                    <ul className="product__card--action d-flex align-items-center justify-content-center"></ul>
                </div>
                <div className="product__card--content">
                    <h3 className="product__card--title">
                        <a
                            style={{
                                fontSize: "2rem",
                            }}
                            href="product-details.html"
                        >
                            {product.name}{" "}
                        </a>
                    </h3>
                    <div
                        className="product__card--price"
                        style={{
                            fontSize: "1.2rem",
                        }}
                    >
                        Rp {product.price.toLocaleString()}
                    </div>
                    <div className="product__card--footer">
                        <Link
                            className="product__card--btn primary__btn text-white"
                            type="button"
                            onClick={() => handleAddProductToCart(product.id)}
                        >
                            Add to cart
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
