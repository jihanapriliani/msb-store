import { Link, Head } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";

export default function LandingPage({ categories, products }) {
    const [renderedProducts, setRenderedProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [startPrice, setStartPrice] = useState([]);
    const [endPrice, setEndPrice] = useState([]);

    const handleCategoryCBClicked = (data) => {
        const categoryExist = selectedCategories.find(
            (category) => category.id === data.id
        );

        if (categoryExist) {
            const filteredCategories = selectedCategories.filter(
                (category) => category.id !== data.id
            );
            setSelectedCategories(filteredCategories);
        } else {
            setSelectedCategories([...selectedCategories, data]);
        }
    };

    useEffect(() => {
        setRenderedProducts(products);
    }, []);

    useEffect(() => {
        if (selectedCategories.length === 0) {
            setRenderedProducts(products);
        } else {
            axios
                .post("/api/get-products-by-category", {
                    selected_categories: selectedCategories,
                })
                .then((res) => {
                    const { data } = res;

                    setRenderedProducts(data.data.products);
                    console.log(
                        "INI DATA YANG DIAMBIL DARI DB",
                        data.data.products
                    );
                });
        }
    }, [selectedCategories]);

    const handleFilterWithPrice = () => {
        if (parseInt(startPrice) > parseInt(endPrice)) {
            Swal.fire({
                icon: "error",
                title: "Tidak Bisa Filter Harga",
                text: "Harga Mulai Tidak Boleh Lebih Besar dari Batas Harga Akhir!",
            });
        } else if (parseInt(startPrice) < 0 || parseInt(endPrice) < 0) {
            Swal.fire({
                icon: "error",
                title: "Tidak Bisa Filter Harga",
                text: "Harga tidak boleh minus!",
            });
        } else {
            axios
                .post("/api/get-products-with-price-range", {
                    start_price: startPrice,
                    end_price: endPrice,
                    selected_categories: selectedCategories,
                })
                .then((res) => {
                    const { data } = res;
                    setRenderedProducts(data.data.products);
                });
        }
    };

    return (
        <GuestLayout>
            <main class="main__content_wrapper">
                <section class="breadcrumb__section breadcrumb__bg">
                    <div class="container">
                        <div class="row row-cols-1">
                            <div class="col">
                                <div class="breadcrumb__content text-center">
                                    <h1 class="breadcrumb__content--title">
                                        Product
                                    </h1>
                                    <ul class="breadcrumb__content--menu d-flex justify-content-center">
                                        <li class="breadcrumb__content--menu__items">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li class="breadcrumb__content--menu__items">
                                            <span>Product</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="shop__section section--padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 shop-col-width-lg-4">
                                <div class="shop__sidebar--widget widget__area d-none d-lg-block">
                                    <div class="single__widget widget__bg">
                                        <h2 class="widget__title h3">
                                            Categories
                                        </h2>
                                        <ul class="widget__form--check">
                                            {categories.map(
                                                (category, index) => (
                                                    <li
                                                        class="widget__form--check__list"
                                                        key={index}
                                                    >
                                                        <label
                                                            class="widget__form--check__label"
                                                            for="check1"
                                                        >
                                                            {
                                                                category.display_name
                                                            }
                                                        </label>
                                                        <input
                                                            class="widget__form--check__input"
                                                            id="check1"
                                                            type="checkbox"
                                                            onClick={() =>
                                                                handleCategoryCBClicked(
                                                                    category
                                                                )
                                                            }
                                                        />
                                                        <span class="widget__form--checkmark"></span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div class="single__widget price__filter widget__bg">
                                        <h2 class="widget__title h3">
                                            Filter By Price
                                        </h2>
                                        <form class="price__filter--form">
                                            <div class="price__filter--form__inner mb-15 d-flex align-items-center">
                                                <div class="price__filter--group">
                                                    <label
                                                        class="price__filter--label"
                                                        for="Filter-Price-GTE2"
                                                    >
                                                        Mulai Dari
                                                    </label>
                                                    <div class="price__filter--input border-radius-5 d-flex align-items-center">
                                                        <span class="price__filter--currency">
                                                            Rp
                                                        </span>
                                                        <input
                                                            class="price__filter--input__field border-0"
                                                            name="filter.v.price.gte"
                                                            id="Filter-Price-GTE2"
                                                            type="number"
                                                            placeholder="0"
                                                            min={0}
                                                            value={startPrice}
                                                            onChange={(e) =>
                                                                setStartPrice(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div class="price__divider">
                                                    <span>-</span>
                                                </div>
                                                <div class="price__filter--group">
                                                    <label
                                                        class="price__filter--label"
                                                        for="Filter-Price-LTE2"
                                                    >
                                                        Hingga
                                                    </label>
                                                    <div class="price__filter--input border-radius-5 d-flex align-items-center">
                                                        <span class="price__filter--currency">
                                                            Rp
                                                        </span>
                                                        <input
                                                            class="price__filter--input__field border-0"
                                                            name="filter.v.price.lte"
                                                            id="Filter-Price-LTE2"
                                                            type="number"
                                                            min={0}
                                                            placeholder="0"
                                                            value={endPrice}
                                                            onChange={(e) =>
                                                                setEndPrice(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                class="primary__btn price__filter--btn"
                                                type="button"
                                                onClick={handleFilterWithPrice}
                                            >
                                                Filter
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-8 shop-col-width-lg-8">
                                <div class="shop__right--sidebar">
                                    <div class="shop__product--wrapper">
                                        <div class="shop__header d-flex align-items-center justify-content-between mb-30">
                                            <div class="product__view--mode d-flex align-items-center">
                                                <button
                                                    class="widget__filter--btn d-flex d-lg-none align-items-center"
                                                    data-offcanvas
                                                >
                                                    <svg
                                                        class="widget__filter--btn__icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="28"
                                                            d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
                                                        />
                                                        <circle
                                                            cx="336"
                                                            cy="128"
                                                            r="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="28"
                                                        />
                                                        <circle
                                                            cx="176"
                                                            cy="256"
                                                            r="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="28"
                                                        />
                                                        <circle
                                                            cx="336"
                                                            cy="384"
                                                            r="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="28"
                                                        />
                                                    </svg>
                                                    <span class="widget__filter--btn__text">
                                                        Filter
                                                    </span>
                                                </button>
                                                <div class="product__view--mode__list product__short--by align-items-center d-flex ">
                                                    <label class="product__view--label">
                                                        Prev Page :
                                                    </label>
                                                    <div class="select shop__header--select">
                                                        <select class="product__view--select">
                                                            <option
                                                                selected
                                                                value="1"
                                                            >
                                                                65
                                                            </option>
                                                            <option value="2">
                                                                40
                                                            </option>
                                                            <option value="3">
                                                                42
                                                            </option>
                                                            <option value="4">
                                                                57{" "}
                                                            </option>
                                                            <option value="5">
                                                                60{" "}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="product__view--mode__list product__short--by align-items-center d-flex">
                                                    <label class="product__view--label">
                                                        Sort By :
                                                    </label>
                                                    <div class="select shop__header--select">
                                                        <select class="product__view--select">
                                                            <option
                                                                selected
                                                                value="1"
                                                            >
                                                                Sort by latest
                                                            </option>
                                                            <option value="2">
                                                                Sort by
                                                                popularity
                                                            </option>
                                                            <option value="3">
                                                                Sort by newness
                                                            </option>
                                                            <option value="4">
                                                                Sort by rating{" "}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="product__showing--count">
                                                Showing 1–9 of 21 results
                                            </p>
                                        </div>
                                        <div class="tab_content">
                                            <div
                                                id="product_grid"
                                                class="tab_pane active show"
                                            >
                                                <div class="product__section--inner">
                                                    <div class="row mb--n30">
                                                        {renderedProducts &&
                                                            renderedProducts.map(
                                                                (
                                                                    product,
                                                                    index
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        class="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30"
                                                                    >
                                                                        <article class="product__card">
                                                                            <div class="product__card--thumbnail">
                                                                                <a
                                                                                    class="product__card--thumbnail__link display-block"
                                                                                    href="product-details.html"
                                                                                >
                                                                                    <img
                                                                                        class="product__card--thumbnail__img product__primary--img w-[300px] h-[200px] object-cover"
                                                                                        src={
                                                                                            window
                                                                                                .location
                                                                                                .origin +
                                                                                                "/" +
                                                                                                (product
                                                                                                    .images[0]
                                                                                                    .image ??
                                                                                            "assets/images/default.png")
                                                                                        }
                                                                                        alt="product-img"
                                                                                    />
                                                                                    <img
                                                                                        class="product__card--thumbnail__img product__secondary--img"
                                                                                        src={
                                                                                            window
                                                                                                .location
                                                                                                .origin +
                                                                                            "/" +
                                                                                            product
                                                                                                .images[0]
                                                                                                .image
                                                                                        }
                                                                                        alt="product-img"
                                                                                    />
                                                                                </a>
                                                                            </div>
                                                                            <div class="product__card--content">
                                                                                <h3 class="product__card--title">
                                                                                    <a href="product-details.html">
                                                                                        {
                                                                                            product.name
                                                                                        }{" "}
                                                                                    </a>
                                                                                </h3>
                                                                                <div class="product__card--price">
                                                                                    <span class="current__price">
                                                                                        Rp{" "}
                                                                                        {product.price.toLocaleString()}
                                                                                    </span>
                                                                                </div>
                                                                                <div class="product__card--footer">
                                                                                    <a
                                                                                        className="product__card--btn primary__btn text-white"
                                                                                        href="cart.html"
                                                                                    >
                                                                                        Add
                                                                                        to
                                                                                        cart
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </article>
                                                                    </div>
                                                                )
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pagination__area">
                                            <nav class="pagination justify-content-center">
                                                <ul class="pagination__wrapper d-flex align-items-center justify-content-center">
                                                    <li class="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            class="pagination__item--arrow  link "
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="22.51"
                                                                height="20.443"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="48"
                                                                    d="M244 400L100 256l144-144M120 256h292"
                                                                />
                                                            </svg>
                                                            <span class="visually-hidden">
                                                                page left arrow
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li class="pagination__list">
                                                        <span class="pagination__item pagination__item--current">
                                                            1
                                                        </span>
                                                    </li>
                                                    <li class="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            class="pagination__item link"
                                                        >
                                                            2
                                                        </a>
                                                    </li>
                                                    <li class="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            class="pagination__item link"
                                                        >
                                                            3
                                                        </a>
                                                    </li>
                                                    <li class="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            class="pagination__item link"
                                                        >
                                                            4
                                                        </a>
                                                    </li>
                                                    <li class="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            class="pagination__item--arrow  link "
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="22.51"
                                                                height="20.443"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <path
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="48"
                                                                    d="M268 112l144 144-144 144M392 256H100"
                                                                />
                                                            </svg>
                                                            <span class="visually-hidden">
                                                                page right arrow
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </GuestLayout>
    );
}
