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
            <main className="main__content_wrapper">
                <section className="breadcrumb__section breadcrumb__bg">
                    <div className="container">
                        <div className="row row-cols-1">
                            <div className="col">
                                <div className="breadcrumb__content text-center">
                                    <h1 className="breadcrumb__content--title">
                                        Product
                                    </h1>
                                    <ul className="breadcrumb__content--menu d-flex justify-content-center">
                                        <li className="breadcrumb__content--menu__items">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb__content--menu__items">
                                            <span>Product</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="shop__section section--padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 shop-col-width-lg-4">
                                <div className="shop__sidebar--widget widget__area d-none d-lg-block">
                                    <div className="single__widget widget__bg">
                                        <h2 className="widget__title h3">
                                            Categories
                                        </h2>
                                        <ul className="widget__form--check">
                                            {categories.map(
                                                (category, index) => (
                                                    <li
                                                        className="widget__form--check__list"
                                                        key={index}
                                                    >
                                                        <label
                                                            className="widget__form--check__label"
                                                            htmlFor="check1"
                                                        >
                                                            {
                                                                category.display_name
                                                            }
                                                        </label>
                                                        <input
                                                            className="widget__form--check__input"
                                                            id="check1"
                                                            type="checkbox"
                                                            onClick={() =>
                                                                handleCategoryCBClicked(
                                                                    category
                                                                )
                                                            }
                                                        />
                                                        <span className="widget__form--checkmark"></span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <div className="single__widget price__filter widget__bg">
                                        <h2 className="widget__title h3">
                                            Filter By Price
                                        </h2>
                                        <form className="price__filter--form">
                                            <div className="price__filter--form__inner mb-15 d-flex align-items-center">
                                                <div className="price__filter--group">
                                                    <label
                                                        className="price__filter--label"
                                                        htmlFor="Filter-Price-GTE2"
                                                    >
                                                        Mulai Dari
                                                    </label>
                                                    <div className="price__filter--input border-radius-5 d-flex align-items-center">
                                                        <span className="price__filter--currency">
                                                            Rp
                                                        </span>
                                                        <input
                                                            className="price__filter--input__field border-0"
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
                                                <div className="price__divider">
                                                    <span>-</span>
                                                </div>
                                                <div className="price__filter--group">
                                                    <label
                                                        className="price__filter--label"
                                                        htmlFor="Filter-Price-LTE2"
                                                    >
                                                        Hingga
                                                    </label>
                                                    <div className="price__filter--input border-radius-5 d-flex align-items-center">
                                                        <span className="price__filter--currency">
                                                            Rp
                                                        </span>
                                                        <input
                                                            className="price__filter--input__field border-0"
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
                                                className="primary__btn price__filter--btn"
                                                type="button"
                                                onClick={handleFilterWithPrice}
                                            >
                                                Filter
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 shop-col-width-lg-8">
                                <div className="shop__right--sidebar">
                                    <div className="shop__product--wrapper">
                                        <div className="shop__header d-flex align-items-center justify-content-between mb-30">
                                            <div className="product__view--mode d-flex align-items-center">
                                                <button
                                                    className="widget__filter--btn d-flex d-lg-none align-items-center"
                                                    data-offcanvas
                                                >
                                                    <svg
                                                        className="widget__filter--btn__icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="28"
                                                            d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
                                                        />
                                                        <circle
                                                            cx="336"
                                                            cy="128"
                                                            r="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="28"
                                                        />
                                                        <circle
                                                            cx="176"
                                                            cy="256"
                                                            r="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="28"
                                                        />
                                                        <circle
                                                            cx="336"
                                                            cy="384"
                                                            r="28"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="28"
                                                        />
                                                    </svg>
                                                    <span className="widget__filter--btn__text">
                                                        Filter
                                                    </span>
                                                </button>
                                                <div className="product__view--mode__list product__short--by align-items-center d-flex ">
                                                    <label className="product__view--label">
                                                        Prev Page :
                                                    </label>
                                                    <div className="select shop__header--select">
                                                        <select className="product__view--select">
                                                            <option
                                                                defaultValue={1}
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
                                                <div className="product__view--mode__list product__short--by align-items-center d-flex">
                                                    <label className="product__view--label">
                                                        Sort By :
                                                    </label>
                                                    <div className="select shop__header--select">
                                                        <select className="product__view--select">
                                                            <option
                                                                defaultValue={1}
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
                                            <p className="product__showing--count">
                                                Showing 1–9 of 21 results
                                            </p>
                                        </div>
                                        <div className="tab_content">
                                            <div
                                                id="product_grid"
                                                className="tab_pane active show"
                                            >
                                                <div className="product__section--inner">
                                                    <div className="row mb--n30">
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
                                                                        className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30"
                                                                    >
                                                                        <article className="product__card">
                                                                            <div className="product__card--thumbnail">
                                                                                <a
                                                                                    className="product__card--thumbnail__link display-block"
                                                                                    href="product-details.html"
                                                                                >
                                                                                    <img
                                                                                        className="product__card--thumbnail__img product__primary--img w-[300px] h-[200px] object-cover"
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
                                                                                    <img
                                                                                        className="product__card--thumbnail__img product__secondary--img"
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
                                                                            <div className="product__card--content">
                                                                                <h3 className="product__card--title">
                                                                                    <a href="product-details.html">
                                                                                        {
                                                                                            product.name
                                                                                        }{" "}
                                                                                    </a>
                                                                                </h3>
                                                                                <div className="product__card--price">
                                                                                    <span className="current__price">
                                                                                        Rp{" "}
                                                                                        {product.price.toLocaleString()}
                                                                                    </span>
                                                                                </div>
                                                                                <div className="product__card--footer">
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
                                        <div className="pagination__area">
                                            <nav className="pagination justify-content-center">
                                                <ul className="pagination__wrapper d-flex align-items-center justify-content-center">
                                                    <li className="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            className="pagination__item--arrow  link "
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
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="48"
                                                                    d="M244 400L100 256l144-144M120 256h292"
                                                                />
                                                            </svg>
                                                            <span className="visually-hidden">
                                                                page left arrow
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li className="pagination__list">
                                                        <span className="pagination__item pagination__item--current">
                                                            1
                                                        </span>
                                                    </li>
                                                    <li className="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            className="pagination__item link"
                                                        >
                                                            2
                                                        </a>
                                                    </li>
                                                    <li className="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            className="pagination__item link"
                                                        >
                                                            3
                                                        </a>
                                                    </li>
                                                    <li className="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            className="pagination__item link"
                                                        >
                                                            4
                                                        </a>
                                                    </li>
                                                    <li className="pagination__list">
                                                        <a
                                                            href="shop.html"
                                                            className="pagination__item--arrow  link "
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
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="48"
                                                                    d="M268 112l144 144-144 144M392 256H100"
                                                                />
                                                            </svg>
                                                            <span className="visually-hidden">
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
