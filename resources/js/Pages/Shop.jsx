import { Link, Head } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function LandingPage({ categories, products }) {
    const [renderedProducts, setRenderedProducts] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

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

    console.log("ISI PRODUCT", products);
    console.log("ISI RENDERED PRODUCTS", renderedProducts);
    console.log("ISI CATEGORY", selectedCategories);

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
                                        <form
                                            class="price__filter--form"
                                            action="#"
                                        >
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
                                                            min="0"
                                                            max="250.00"
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
                                                            min="0"
                                                            placeholder="250.00"
                                                            max="250.00"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                class="primary__btn price__filter--btn"
                                                type="submit"
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
                                                                                            product
                                                                                                .images[0]
                                                                                                .image
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
                                            <div
                                                id="product_list"
                                                class="tab_pane"
                                            >
                                                <div class="product__section--inner product__section--style3__inner">
                                                    <div class="row row-cols-1 mb--n30">
                                                        <div class="col mb-30">
                                                            <div class="product__card product__list d-flex align-items-center">
                                                                <div class="product__card--thumbnail product__list--thumbnail">
                                                                    <a
                                                                        class="product__card--thumbnail__link display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            class="product__card--thumbnail__img product__primary--img"
                                                                            src="assets/img/product/main-product/product10.webp"
                                                                            alt="product-img"
                                                                        />
                                                                        <img
                                                                            class="product__card--thumbnail__img product__secondary--img"
                                                                            src="assets/img/product/main-product/product9.webp"
                                                                            alt="product-img"
                                                                        />
                                                                    </a>
                                                                    <span class="product__badge">
                                                                        -20%
                                                                    </span>
                                                                    <ul class="product__card--action d-flex align-items-center justify-content-center">
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Quick View"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#examplemodal"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    viewBox="0 0 16 16"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                                                                                        fill="currentColor"
                                                                                    ></path>
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Quick
                                                                                    View
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Compare"
                                                                                href="compare.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="17"
                                                                                    height="17"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Compare
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Wishlist"
                                                                                href="wishlist.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="18"
                                                                                    height="18"
                                                                                    viewBox="0 0 16 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Wishlist
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="product__card--content product__list--content">
                                                                    <h3 class="product__card--title">
                                                                        <a href="product-details.html">
                                                                            Eius
                                                                            doloribus
                                                                            dicta
                                                                            labore
                                                                            magni
                                                                            nulla!{" "}
                                                                        </a>
                                                                    </h3>
                                                                    <ul class="rating product__card--rating d-flex">
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span class="rating__review--text">
                                                                                (106)
                                                                                Review
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="product__list--price">
                                                                        <span class="current__price">
                                                                            $188.52
                                                                        </span>
                                                                        <span class="old__price">
                                                                            {" "}
                                                                            $268.00
                                                                        </span>
                                                                    </div>
                                                                    <p class="product__card--content__desc mb-20">
                                                                        Lorem,
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Quia
                                                                        voluptas
                                                                        dolore
                                                                        doloribus
                                                                        architecto
                                                                        sequi
                                                                        corporis
                                                                        deleniti
                                                                        officia
                                                                        culpa
                                                                        dolor
                                                                        esse
                                                                        there
                                                                        consectetur
                                                                        eligendi,
                                                                        natus at
                                                                        rem ab
                                                                        quae
                                                                        amet
                                                                        molestiae
                                                                        quod
                                                                        voluptates.
                                                                    </p>
                                                                    <a
                                                                        class="product__card--btn primary__btn"
                                                                        href="cart.html"
                                                                    >
                                                                        + Add to
                                                                        cart
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col mb-30">
                                                            <div class="product__card product__list d-flex align-items-center">
                                                                <div class="product__card--thumbnail product__list--thumbnail">
                                                                    <a
                                                                        class="product__card--thumbnail__link display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            class="product__card--thumbnail__img product__primary--img"
                                                                            src="assets/img/product/main-product/product1.webp"
                                                                            alt="product-img"
                                                                        />
                                                                        <img
                                                                            class="product__card--thumbnail__img product__secondary--img"
                                                                            src="assets/img/product/main-product/product2.webp"
                                                                            alt="product-img"
                                                                        />
                                                                    </a>
                                                                    <span class="product__badge">
                                                                        -17%
                                                                    </span>
                                                                </div>
                                                                <div class="product__card--content product__list--content">
                                                                    <h3 class="product__card--title">
                                                                        <a href="product-details.html">
                                                                            Amazon
                                                                            Cloud
                                                                            Cam
                                                                            Security
                                                                            Camera{" "}
                                                                        </a>
                                                                    </h3>
                                                                    <ul class="rating product__card--rating d-flex">
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span class="rating__review--text">
                                                                                (106)
                                                                                Review
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="product__list--price">
                                                                        <span class="current__price">
                                                                            $155.52
                                                                        </span>
                                                                        <span class="old__price">
                                                                            {" "}
                                                                            $219.00
                                                                        </span>
                                                                    </div>
                                                                    <p class="product__card--content__desc mb-20">
                                                                        Lorem,
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Quia
                                                                        voluptas
                                                                        dolore
                                                                        doloribus
                                                                        architecto
                                                                        sequi
                                                                        corporis
                                                                        deleniti
                                                                        officia
                                                                        culpa
                                                                        dolor
                                                                        esse
                                                                        there
                                                                        consectetur
                                                                        eligendi,
                                                                        natus at
                                                                        rem ab
                                                                        quae
                                                                        amet
                                                                        molestiae
                                                                        quod
                                                                        voluptates.
                                                                    </p>
                                                                    <a
                                                                        class="product__card--btn primary__btn"
                                                                        href="cart.html"
                                                                    >
                                                                        + Add to
                                                                        cart
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col mb-30">
                                                            <div class="product__card product__list d-flex align-items-center">
                                                                <div class="product__card--thumbnail product__list--thumbnail">
                                                                    <a
                                                                        class="product__card--thumbnail__link display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            class="product__card--thumbnail__img product__primary--img"
                                                                            src="assets/img/product/main-product/product3.webp"
                                                                            alt="product-img"
                                                                        />
                                                                        <img
                                                                            class="product__card--thumbnail__img product__secondary--img"
                                                                            src="assets/img/product/main-product/product4.webp"
                                                                            alt="product-img"
                                                                        />
                                                                    </a>
                                                                    <span class="product__badge">
                                                                        -16%
                                                                    </span>
                                                                    <ul class="product__card--action d-flex align-items-center justify-content-center">
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Quick View"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#examplemodal"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    viewBox="0 0 16 16"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                                                                                        fill="currentColor"
                                                                                    ></path>
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Quick
                                                                                    View
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Compare"
                                                                                href="compare.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="17"
                                                                                    height="17"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Compare
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Wishlist"
                                                                                href="wishlist.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="18"
                                                                                    height="18"
                                                                                    viewBox="0 0 16 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Wishlist
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="product__card--content product__list--content">
                                                                    <h3 class="product__card--title">
                                                                        <a href="product-details.html">
                                                                            Taboriosam
                                                                            asnda
                                                                            et
                                                                            itaque
                                                                            expcabo.{" "}
                                                                        </a>
                                                                    </h3>
                                                                    <ul class="rating product__card--rating d-flex">
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span class="rating__review--text">
                                                                                (106)
                                                                                Review
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="product__list--price">
                                                                        <span class="current__price">
                                                                            $144.52
                                                                        </span>
                                                                        <span class="old__price">
                                                                            {" "}
                                                                            $234.00
                                                                        </span>
                                                                    </div>
                                                                    <p class="product__card--content__desc mb-20">
                                                                        Lorem,
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Quia
                                                                        voluptas
                                                                        dolore
                                                                        doloribus
                                                                        architecto
                                                                        sequi
                                                                        corporis
                                                                        deleniti
                                                                        officia
                                                                        culpa
                                                                        dolor
                                                                        esse
                                                                        there
                                                                        consectetur
                                                                        eligendi,
                                                                        natus at
                                                                        rem ab
                                                                        quae
                                                                        amet
                                                                        molestiae
                                                                        quod
                                                                        voluptates.
                                                                    </p>
                                                                    <a
                                                                        class="product__card--btn primary__btn"
                                                                        href="cart.html"
                                                                    >
                                                                        + Add to
                                                                        cart
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col mb-30">
                                                            <div class="product__card product__list d-flex align-items-center">
                                                                <div class="product__card--thumbnail product__list--thumbnail">
                                                                    <a
                                                                        class="product__card--thumbnail__link display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            class="product__card--thumbnail__img product__primary--img"
                                                                            src="assets/img/product/main-product/product5.webp"
                                                                            alt="product-img"
                                                                        />
                                                                        <img
                                                                            class="product__card--thumbnail__img product__secondary--img"
                                                                            src="assets/img/product/main-product/product6.webp"
                                                                            alt="product-img"
                                                                        />
                                                                    </a>
                                                                    <span class="product__badge">
                                                                        -22%
                                                                    </span>
                                                                    <ul class="product__card--action d-flex align-items-center justify-content-center">
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Quick View"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#examplemodal"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    viewBox="0 0 16 16"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                                                                                        fill="currentColor"
                                                                                    ></path>
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Quick
                                                                                    View
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Compare"
                                                                                href="compare.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="17"
                                                                                    height="17"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Compare
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Wishlist"
                                                                                href="wishlist.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="18"
                                                                                    height="18"
                                                                                    viewBox="0 0 16 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Wishlist
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="product__card--content product__list--content">
                                                                    <h3 class="product__card--title">
                                                                        <a href="product-details.html">
                                                                            Eius
                                                                            doloribus
                                                                            dicta
                                                                            labore
                                                                            magni
                                                                            nulla!{" "}
                                                                        </a>
                                                                    </h3>
                                                                    <ul class="rating product__card--rating d-flex">
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span class="rating__review--text">
                                                                                (106)
                                                                                Review
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="product__list--price">
                                                                        <span class="current__price">
                                                                            $123.52
                                                                        </span>
                                                                        <span class="old__price">
                                                                            {" "}
                                                                            $222.00
                                                                        </span>
                                                                    </div>
                                                                    <p class="product__card--content__desc mb-20">
                                                                        Lorem,
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Quia
                                                                        voluptas
                                                                        dolore
                                                                        doloribus
                                                                        architecto
                                                                        sequi
                                                                        corporis
                                                                        deleniti
                                                                        officia
                                                                        culpa
                                                                        dolor
                                                                        esse
                                                                        there
                                                                        consectetur
                                                                        eligendi,
                                                                        natus at
                                                                        rem ab
                                                                        quae
                                                                        amet
                                                                        molestiae
                                                                        quod
                                                                        voluptates.
                                                                    </p>
                                                                    <a
                                                                        class="product__card--btn primary__btn"
                                                                        href="cart.html"
                                                                    >
                                                                        + Add to
                                                                        cart
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col mb-30">
                                                            <div class="product__card product__list d-flex align-items-center">
                                                                <div class="product__card--thumbnail product__list--thumbnail">
                                                                    <a
                                                                        class="product__card--thumbnail__link display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            class="product__card--thumbnail__img product__primary--img"
                                                                            src="assets/img/product/main-product/product7.webp"
                                                                            alt="product-img"
                                                                        />
                                                                        <img
                                                                            class="product__card--thumbnail__img product__secondary--img"
                                                                            src="assets/img/product/main-product/product8.webp"
                                                                            alt="product-img"
                                                                        />
                                                                    </a>
                                                                    <span class="product__badge">
                                                                        -16%
                                                                    </span>
                                                                    <ul class="product__card--action d-flex align-items-center justify-content-center">
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Quick View"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#examplemodal"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    viewBox="0 0 16 16"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                                                                                        fill="currentColor"
                                                                                    ></path>
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Quick
                                                                                    View
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Compare"
                                                                                href="compare.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="17"
                                                                                    height="17"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Compare
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Wishlist"
                                                                                href="wishlist.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="18"
                                                                                    height="18"
                                                                                    viewBox="0 0 16 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Wishlist
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="product__card--content product__list--content">
                                                                    <h3 class="product__card--title">
                                                                        <a href="product-details.html">
                                                                            Sequi
                                                                            eum
                                                                            saepe
                                                                            nisi
                                                                            repellat
                                                                            at
                                                                            fuga
                                                                            nemo.{" "}
                                                                        </a>
                                                                    </h3>
                                                                    <ul class="rating product__card--rating d-flex">
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span class="rating__review--text">
                                                                                (106)
                                                                                Review
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="product__list--price">
                                                                        <span class="current__price">
                                                                            $150.52
                                                                        </span>
                                                                        <span class="old__price">
                                                                            {" "}
                                                                            $240.00
                                                                        </span>
                                                                    </div>
                                                                    <p class="product__card--content__desc mb-20">
                                                                        Lorem,
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Quia
                                                                        voluptas
                                                                        dolore
                                                                        doloribus
                                                                        architecto
                                                                        sequi
                                                                        corporis
                                                                        deleniti
                                                                        officia
                                                                        culpa
                                                                        dolor
                                                                        esse
                                                                        there
                                                                        consectetur
                                                                        eligendi,
                                                                        natus at
                                                                        rem ab
                                                                        quae
                                                                        amet
                                                                        molestiae
                                                                        quod
                                                                        voluptates.
                                                                    </p>
                                                                    <a
                                                                        class="product__card--btn primary__btn"
                                                                        href="cart.html"
                                                                    >
                                                                        + Add to
                                                                        cart
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col mb-30">
                                                            <div class="product__card product__list d-flex align-items-center">
                                                                <div class="product__card--thumbnail product__list--thumbnail">
                                                                    <a
                                                                        class="product__card--thumbnail__link display-block"
                                                                        href="product-details.html"
                                                                    >
                                                                        <img
                                                                            class="product__card--thumbnail__img product__primary--img"
                                                                            src="assets/img/product/main-product/product9.webp"
                                                                            alt="product-img"
                                                                        />
                                                                        <img
                                                                            class="product__card--thumbnail__img product__secondary--img"
                                                                            src="assets/img/product/main-product/product10.webp"
                                                                            alt="product-img"
                                                                        />
                                                                    </a>
                                                                    <span class="product__badge">
                                                                        -24%
                                                                    </span>
                                                                    <ul class="product__card--action d-flex align-items-center justify-content-center">
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Quick View"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#examplemodal"
                                                                                href="javascript:void(0)"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="16"
                                                                                    height="16"
                                                                                    viewBox="0 0 16 16"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                                                                                        fill="currentColor"
                                                                                    ></path>
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Quick
                                                                                    View
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Compare"
                                                                                href="compare.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="17"
                                                                                    height="17"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.89137 6.09375C6.89137 6.47656 7.16481 6.75 7.54762 6.75H10.1453C10.7195 6.75 11.0203 6.06641 10.5828 5.65625L9.8445 4.89062L12.907 1.82812C13.0437 1.69141 13.0437 1.47266 12.907 1.36328L12.2781 0.734375C12.1687 0.597656 11.95 0.597656 11.8132 0.734375L8.75075 3.79688L7.98512 3.05859C7.57496 2.62109 6.89137 2.92188 6.89137 3.49609V6.09375ZM1.94215 12.793L5.00465 9.73047L5.77028 10.4688C6.18043 10.9062 6.89137 10.6055 6.89137 10.0312V7.40625C6.89137 7.05078 6.59059 6.75 6.23512 6.75H3.61012C3.0359 6.75 2.73512 7.46094 3.17262 7.87109L3.9109 8.63672L0.848402 11.6992C0.711683 11.8359 0.711683 12.0547 0.848402 12.1641L1.47731 12.793C1.58668 12.9297 1.80543 12.9297 1.94215 12.793Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Compare
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li class="product__card--action__list">
                                                                            <a
                                                                                class="product__card--action__btn"
                                                                                title="Wishlist"
                                                                                href="wishlist.html"
                                                                            >
                                                                                <svg
                                                                                    class="product__card--action__btn--svg"
                                                                                    width="18"
                                                                                    height="18"
                                                                                    viewBox="0 0 16 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M13.5379 1.52734C11.9519 0.1875 9.51832 0.378906 8.01442 1.9375C6.48317 0.378906 4.04957 0.1875 2.46364 1.52734C0.412855 3.25 0.713636 6.06641 2.1902 7.57031L6.97536 12.4648C7.24879 12.7383 7.60426 12.9023 8.01442 12.9023C8.39723 12.9023 8.7527 12.7383 9.02614 12.4648L13.8386 7.57031C15.2879 6.06641 15.5886 3.25 13.5379 1.52734ZM12.8816 6.64062L8.09645 11.5352C8.04176 11.5898 7.98707 11.5898 7.90504 11.5352L3.11989 6.64062C2.10817 5.62891 1.91676 3.71484 3.31129 2.53906C4.3777 1.63672 6.01832 1.77344 7.05739 2.8125L8.01442 3.79688L8.97145 2.8125C9.98317 1.77344 11.6238 1.63672 12.6902 2.51172C14.0847 3.71484 13.8933 5.62891 12.8816 6.64062Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                                <span class="visually-hidden">
                                                                                    Wishlist
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="product__card--content product__list--content">
                                                                    <h3 class="product__card--title">
                                                                        <a href="product-details.html">
                                                                            Eius
                                                                            doloribus
                                                                            dicta
                                                                            labore
                                                                            magni
                                                                            nulla!{" "}
                                                                        </a>
                                                                    </h3>
                                                                    <ul class="rating product__card--rating d-flex">
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M6.08398 0.921875L4.56055 4.03906L1.11523 4.53125C0.505859 4.625 0.271484 5.375 0.716797 5.82031L3.17773 8.23438L2.5918 11.6328C2.49805 12.2422 3.1543 12.7109 3.69336 12.4297L6.76367 10.8125L9.81055 12.4297C10.3496 12.7109 11.0059 12.2422 10.9121 11.6328L10.3262 8.23438L12.7871 5.82031C13.2324 5.375 12.998 4.625 12.3887 4.53125L8.9668 4.03906L7.41992 0.921875C7.16211 0.382812 6.36523 0.359375 6.08398 0.921875Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li class="rating__list">
                                                                            <span class="rating__icon">
                                                                                <svg
                                                                                    width="14"
                                                                                    height="13"
                                                                                    viewBox="0 0 14 13"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M12.4141 4.53125L8.99219 4.03906L7.44531 0.921875C7.1875 0.382812 6.39062 0.359375 6.10938 0.921875L4.58594 4.03906L1.14062 4.53125C0.53125 4.625 0.296875 5.375 0.742188 5.82031L3.20312 8.23438L2.61719 11.6328C2.52344 12.2422 3.17969 12.7109 3.71875 12.4297L6.78906 10.8125L9.83594 12.4297C10.375 12.7109 11.0312 12.2422 10.9375 11.6328L10.3516 8.23438L12.8125 5.82031C13.2578 5.375 13.0234 4.625 12.4141 4.53125ZM9.53125 7.95312L10.1875 11.75L6.78906 9.96875L3.36719 11.75L4.02344 7.95312L1.25781 5.28125L5.07812 4.71875L6.78906 1.25L8.47656 4.71875L12.2969 5.28125L9.53125 7.95312Z"
                                                                                        fill="currentColor"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span class="rating__review--text">
                                                                                (106)
                                                                                Review
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    <div class="product__list--price">
                                                                        <span class="current__price">
                                                                            $188.52
                                                                        </span>
                                                                        <span class="old__price">
                                                                            {" "}
                                                                            $268.00
                                                                        </span>
                                                                    </div>
                                                                    <p class="product__card--content__desc mb-20">
                                                                        Lorem,
                                                                        ipsum
                                                                        dolor
                                                                        sit amet
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Quia
                                                                        voluptas
                                                                        dolore
                                                                        doloribus
                                                                        architecto
                                                                        sequi
                                                                        corporis
                                                                        deleniti
                                                                        officia
                                                                        culpa
                                                                        dolor
                                                                        esse
                                                                        there
                                                                        consectetur
                                                                        eligendi,
                                                                        natus at
                                                                        rem ab
                                                                        quae
                                                                        amet
                                                                        molestiae
                                                                        quod
                                                                        voluptates.
                                                                    </p>
                                                                    <a
                                                                        class="product__card--btn primary__btn"
                                                                        href="cart.html"
                                                                    >
                                                                        + Add to
                                                                        cart
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
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
