import { Link, Head, router } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { route } from "ziggy-js";

import Swal from "sweetalert2";

export default function LandingPage({ categories, products }) {
    // get Query Params
    const urlParams = new URLSearchParams(window.location.search);

    const [selectedCategories, setSelectedCategories] = useState([
        ...(urlParams.getAll("categories").map((it) => parseInt(it)) ?? []),
    ]);

    console.log(selectedCategories);
    const [startPrice, setStartPrice] = useState(
        urlParams.get("startPrice") ?? ""
    );
    const [endPrice, setEndPrice] = useState(urlParams.get("endPrice") ?? "");
    const [isLoading, setIsLoading] = useState(false);
    const [orderBy, setOrderBy] = useState(1);

    const [pagination, setPagination] = useState({
        pageIndex: products.current_page - 1,
        pageSize: products.per_page,
    });

    useEffect(() => {
        const url = new URL(route(route().current()).toString());

        // Check if there are changes in startPrice, endPrice, or selectedCategories
        const hasPriceChanges =
            (startPrice !== undefined &&
                url.searchParams.get("startPrice") !== startPrice.toString()) ||
            (endPrice !== undefined &&
                url.searchParams.get("endPrice") !== endPrice.toString());
        const hasCategoryChanges =
            selectedCategories.join(",") !== url.searchParams.get("categories");

        if (hasPriceChanges || hasCategoryChanges) {
            if (startPrice && endPrice && startPrice > 0 && endPrice > 0) {
                if (startPrice > endPrice || startPrice < 0 || endPrice < 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Tidak Bisa Filter Harga",
                        text: "Harga Mulai Tidak Boleh Lebih Besar dari Batas Harga Akhir atau Harga tidak boleh minus!",
                    });
                } else {
                    url.searchParams.set("startPrice", startPrice);
                    url.searchParams.set("endPrice", endPrice);
                }
            } else if (startPrice) {
                if (startPrice < 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Tidak Bisa Filter Harga",
                        text: "Harga tidak boleh minus!",
                    });
                } else {
                    url.searchParams.set("startPrice", startPrice);
                }
            } else if (endPrice) {
                if (endPrice < 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Tidak Bisa Filter Harga",
                        text: "Harga tidak boleh minus!",
                    });
                } else {
                    url.searchParams.set("endPrice", endPrice);
                }
            }

            // Set categories parameter
            url.searchParams.set("categories", selectedCategories.join(","));

            if (categories === NaN) {
                url.searchParams.set("");
            }

            // Perform reload only if URL has changed
            if (window.location.href !== url.toString()) {
                setIsLoading(true);
                router.reload({
                    data: {
                        categories: selectedCategories.join(","),
                        startPrice: startPrice,
                        endPrice: endPrice,
                        page: pagination.pageIndex + 1,
                        perPage: pagination.pageSize,
                        orderBy: orderBy,
                    },
                    only: ["products"],
                    onFinish: () => {
                        setIsLoading(false);
                    },
                });
            }
        }
    }, [
        selectedCategories,
        startPrice,
        endPrice,
        pagination.pageIndex,
        pagination.pageSize,
        orderBy,
    ]);

    const handleCategoryFilter = (e, category) => {
        const categoryId = category.id;
        const isChecked = e.target.checked;

        console.log(categoryId, isChecked);

        setSelectedCategories((prevCategories) => {
            if (isChecked && !prevCategories.includes(categoryId)) {
                return [...prevCategories, categoryId]; // Tambahkan categoryId ke array
            } else if (!isChecked && prevCategories.includes(categoryId)) {
                return prevCategories.filter((id) => id !== categoryId); // Hapus categoryId dari array
            } else {
                return prevCategories; // Kembalikan array tanpa perubahan
            }
        });
    };

    return (
        <GuestLayout setIsLoading={setIsLoading}>
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
                                            {categories.map((category) => (
                                                <li
                                                    class="widget__form--check__list"
                                                    key={category.id}
                                                >
                                                    <label
                                                        class="widget__form--check__label"
                                                        for={`check+${category.id}`}
                                                    >
                                                        {category.display_name}
                                                    </label>
                                                    <input
                                                        class="widget__form--check__input"
                                                        id={`check+${category.id}`}
                                                        checked={selectedCategories.includes(
                                                            category.id
                                                        )}
                                                        type="checkbox"
                                                        onChange={(e) => {
                                                            console.log(
                                                                e.currentTarget
                                                                    .value
                                                            );
                                                            handleCategoryFilter(
                                                                e,
                                                                category
                                                            );
                                                        }}
                                                    />
                                                    <span class="widget__form--checkmark"></span>
                                                </li>
                                            ))}
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
                                                            // change the value of endPrice state after user input done
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
                                            {/* <button
                                                class="primary__btn price__filter--btn"
                                                type="button"
                                                onClick={handleFilterWithPrice}
                                            >
                                                Filter
                                            </button> */}
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
                                                        Per Page :
                                                    </label>
                                                    <div class="select shop__header--select">
                                                        <select
                                                            class="product__view--select"
                                                            onChange={(e) => {
                                                                setPagination({
                                                                    ...pagination,
                                                                    pageSize:
                                                                        e.target
                                                                            .value,
                                                                });
                                                            }}
                                                        >
                                                            {[
                                                                5, 10, 12, 15,
                                                                20, 25, 50, 100,
                                                            ].map((perPage) => (
                                                                <option
                                                                    selected={
                                                                        products.per_page ===
                                                                        perPage
                                                                    }
                                                                    value={
                                                                        perPage
                                                                    }
                                                                >
                                                                    {perPage}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="product__view--mode__list product__short--by align-items-center d-flex">
                                                    <label class="product__view--label">
                                                        Sort By :
                                                    </label>
                                                    <div class="select shop__header--select">
                                                        <select
                                                            class="product__view--select"
                                                            onChange={(e) => {
                                                                setOrderBy(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        >
                                                            <option
                                                                selected
                                                                value="1"
                                                            >
                                                                Sort by newest
                                                            </option>
                                                            <option value="2">
                                                                Sort by highest
                                                                price
                                                            </option>
                                                            <option value="3">
                                                                Sort by lowest
                                                                price
                                                            </option>
                                                            <option value="4">
                                                                Sort by a to z
                                                            </option>
                                                            <option value="5">
                                                                Sort by z to a
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <p class="product__showing--count">
                                                Showing {products.from}–
                                                {products.to} of{" "}
                                                {products.total} results
                                            </p>
                                        </div>
                                        <div class="tab_content">
                                            <div
                                                id="product_grid"
                                                class="tab_pane active show"
                                            >
                                                <div class="product__section--inner">
                                                    <div class="row mb--n30">
                                                        {!isLoading ? (
                                                            products.data &&
                                                            products.data.map(
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
                                                            )
                                                        ) : (
                                                            <div class="col-lg-12">
                                                                <div class="d-flex justify-content-center align-items-center">
                                                                    <div
                                                                        class="spinner-border text-primary"
                                                                        role="status"
                                                                    >
                                                                        <span class="visually-hidden">
                                                                            Loading...
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pagination__area">
                                            <nav class="pagination justify-content-center">
                                                <ul class="pagination__wrapper d-flex align-items-center justify-content-center">
                                                    <li class="pagination__list">
                                                        <button
                                                            href="shop.html"
                                                            class="pagination__item--arrow  link "
                                                            disabled={
                                                                products.current_page ===
                                                                1
                                                            }
                                                            onClick={
                                                                products.current_page ===
                                                                1
                                                                    ? (e) => {
                                                                          e.preventDefault();
                                                                      }
                                                                    : (e) => {
                                                                          e.preventDefault();
                                                                          setPagination(
                                                                              {
                                                                                  ...pagination,
                                                                                  pageIndex:
                                                                                      pagination.pageIndex -
                                                                                      1,
                                                                              }
                                                                          );
                                                                      }
                                                            }
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
                                                        </button>
                                                    </li>
                                                    {Array.from(
                                                        Array(
                                                            products.last_page
                                                        ),
                                                        (e, i) => {
                                                            return (
                                                                <li
                                                                    key={i}
                                                                    class={`pagination__list ${
                                                                        i ===
                                                                        products.current_page -
                                                                            1
                                                                            ? "active"
                                                                            : ""
                                                                    }`}
                                                                >
                                                                    <div
                                                                        class="pagination__item link"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            setPagination(
                                                                                {
                                                                                    ...pagination,
                                                                                    pageIndex:
                                                                                        i,
                                                                                }
                                                                            );
                                                                        }}
                                                                    >
                                                                        {i + 1}
                                                                    </div>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                    <li class="pagination__list">
                                                        <button
                                                            href="shop.html"
                                                            class="pagination__item--arrow  link "
                                                            disabled={
                                                                products.current_page ===
                                                                products.last_page
                                                            }
                                                            onClick={
                                                                products.current_page ===
                                                                products.last_page
                                                                    ? (e) => {
                                                                          e.preventDefault();
                                                                      }
                                                                    : (e) => {
                                                                          e.preventDefault();
                                                                          setPagination(
                                                                              {
                                                                                  ...pagination,
                                                                                  pageIndex:
                                                                                      pagination.pageIndex +
                                                                                      1,
                                                                              }
                                                                          );
                                                                      }
                                                            }
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
                                                        </button>
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
