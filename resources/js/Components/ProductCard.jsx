import React from "react";

import { Link } from "@inertiajs/react";
import Swal from "sweetalert2";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductCard({ product, user }) {
    return (
        <div>
            <article className="product__card">
                <div className="product__card--thumbnail">
                    <a
                        className="product__card--thumbnail__link display-block"
                        href="#"
                    >
                        <img
                            className="product__card--thumbnail__img product__primary--img w-[300px] h-[200px] object-cover"
                            src={
                                window.location.origin +
                                "/" +
                                (product.images[0].image ??
                                    "assets/images/default.png")
                            }
                            alt="product-img"
                        />
                        <img
                            className="product__card--thumbnail__img product__secondary--img"
                            src={
                                window.location.origin +
                                "/" +
                                (product.images[0].image ??
                                    "assets/images/default.png")
                            }
                            alt="product-img"
                        />
                    </a>

                    <ul className="product__card--action d-flex align-items-center justify-content-center"></ul>
                </div>
                <div className="product__card--content">
                    <h3
                        className="product__card--title"
                        style={{
                            fontSize: "2rem",
                            fontWeight: "600",
                        }}
                    >
                        {product.name}{" "}
                    </h3>
                    <div
                        className="product__card--price"
                        style={{
                            fontSize: "1.5rem",
                        }}
                    >
                        Rp {product.price.toLocaleString()}
                    </div>
                    <div className="product__card--footer">
                        <Link
                            className="product__card--btn primary__btn text-white"
                            type="button"
                            href={`/detail-product/${product.id}`}
                        >
                            Detail Produk
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
