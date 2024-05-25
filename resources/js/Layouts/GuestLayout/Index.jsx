import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

import "../../../assets/guest-layout/css/style.css";
import "../../../assets/guest-layout/css/custom.css";
import "../../../assets/guest-layout/css/vendor/bootstrap.min.css";

export default function Guest({ children, setIsLoading }) {
    const [search, setSearch] = useState("");

    if (!setIsLoading) {
        setIsLoading = () => {};
    }

    const handleSearch = () => {
        const url = new URL(route(route().current()).toString());

        if (!url.toString().includes(route("shop").toString())) {
            url.pathname = "/shop";
            router.get(route("shop"), {
                search: search,
                only: ["products"],
                onFinish: () => {
                    setIsLoading(false);
                },
            });

            return;
        }

        url.searchParams.set("search", search);
        if (window.location.href !== url.toString()) {
            setIsLoading(true);
            router.reload({
                data: {
                    search: search,
                },
                only: ["products"],
                onFinish: () => {
                    setIsLoading(false);
                },
            });
        }
    };

    return (
        <>
            <header className="header__section">
                <div className="header__topbar border-bottom">
                    <div className="container">
                        <div className="header__topbar--inner d-flex align-items-center justify-content-between">
                            <ul className="header__topbar--info d-none d-lg-flex">
                                <li className="header__info--list">
                                    <a
                                        className="header__info--link"
                                        href="https://wa.me/6281770616509"
                                        target="_blank"
                                    >
                                        +(62)817-7061-6509
                                    </a>
                                </li>

                                <li className="header__info--list">
                                    <Link
                                        className="header__info--link flex items-center"
                                        href="mailto:mandirisejatiborneo@gmail.com"
                                    >
                                        <svg
                                            width="15"
                                            height="13"
                                            viewBox="0 0 15 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M7.368 9.104C7.26133 9.17867 7.13867 9.216 7 9.216C6.86133 9.216 6.744 9.17867 6.648 9.104L0.36 4.624C0.264 4.56 0.178667 4.54933 0.104 4.592C0.04 4.624 0.00800002 4.69867 0.00800002 4.816V11.984C0.00800002 12.112 0.0506667 12.2187 0.136 12.304C0.221333 12.3893 0.322667 12.432 0.44 12.432H13.56C13.6773 12.432 13.7787 12.3893 13.864 12.304C13.96 12.2187 14.008 12.112 14.008 11.984V4.816C14.008 4.69867 13.9707 4.624 13.896 4.592C13.8213 4.54933 13.736 4.56 13.64 4.624L7.368 9.104ZM6.76 8.32C6.84533 8.37333 6.92533 8.4 7 8.4C7.08533 8.4 7.16533 8.37333 7.24 8.32L12.52 4.56C12.6373 4.464 12.696 4.352 12.696 4.224V0.783999C12.696 0.666666 12.6533 0.570666 12.568 0.495999C12.4933 0.410666 12.3973 0.367999 12.28 0.367999H1.72C1.60267 0.367999 1.50667 0.410666 1.432 0.495999C1.35733 0.570666 1.32 0.666666 1.32 0.783999V4.224C1.32 4.37333 1.37333 4.48533 1.48 4.56L6.76 8.32ZM3.784 2.064H9.96C10.088 2.064 10.1947 2.112 10.28 2.208C10.3653 2.29333 10.408 2.4 10.408 2.528C10.408 2.64533 10.3653 2.74667 10.28 2.832C10.1947 2.91733 10.088 2.96 9.96 2.96H3.784C3.656 2.96 3.54933 2.91733 3.464 2.832C3.37867 2.74667 3.336 2.64533 3.336 2.528C3.336 2.4 3.37867 2.29333 3.464 2.208C3.54933 2.112 3.656 2.064 3.784 2.064ZM3.784 3.632H9.96C10.088 3.632 10.1947 3.68 10.28 3.776C10.3653 3.86133 10.408 3.96267 10.408 4.08C10.408 4.19733 10.3653 4.304 10.28 4.4C10.1947 4.48533 10.088 4.528 9.96 4.528H3.784C3.656 4.528 3.54933 4.48533 3.464 4.4C3.37867 4.31467 3.336 4.21333 3.336 4.096C3.336 3.968 3.37867 3.86133 3.464 3.776C3.54933 3.68 3.656 3.632 3.784 3.632Z"
                                                fill="#FF2D37"
                                            />
                                        </svg>
                                        mandirisejatiborneo@gmail.com
                                    </Link>
                                </li>
                            </ul>
                            <div className="header__top--right d-flex align-items-center">
                                <ul className="social__share d-flex">
                                    <li className="social__share--list">
                                        <Link
                                            className="social__share--icon"
                                            target="_blank"
                                            href="https://www.facebook.com"
                                        >
                                            <svg
                                                width="9"
                                                height="15"
                                                viewBox="0 0 9 15"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.62891 8.625L8.01172 6.10938H5.57812V4.46875C5.57812 3.75781 5.90625 3.10156 7 3.10156H8.12109V0.941406C8.12109 0.941406 7.10938 0.75 6.15234 0.75C4.15625 0.75 2.84375 1.98047 2.84375 4.16797V6.10938H0.601562V8.625H2.84375V14.75H5.57812V8.625H7.62891Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="visually-hidden">
                                                Facebook
                                            </span>
                                        </Link>
                                    </li>

                                    <li className="social__share--list">
                                        <Link
                                            className="social__share--icon"
                                            target="_blank"
                                            href="https://www.instagram.com"
                                        >
                                            <svg
                                                width="14"
                                                height="13"
                                                viewBox="0 0 14 13"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M7.125 3.60547C5.375 3.60547 3.98047 5.02734 3.98047 6.75C3.98047 8.5 5.375 9.89453 7.125 9.89453C8.84766 9.89453 10.2695 8.5 10.2695 6.75C10.2695 5.02734 8.84766 3.60547 7.125 3.60547ZM7.125 8.80078C6.00391 8.80078 5.07422 7.89844 5.07422 6.75C5.07422 5.62891 5.97656 4.72656 7.125 4.72656C8.24609 4.72656 9.14844 5.62891 9.14844 6.75C9.14844 7.89844 8.24609 8.80078 7.125 8.80078ZM11.1172 3.49609C11.1172 3.08594 10.7891 2.75781 10.3789 2.75781C9.96875 2.75781 9.64062 3.08594 9.64062 3.49609C9.64062 3.90625 9.96875 4.23438 10.3789 4.23438C10.7891 4.23438 11.1172 3.90625 11.1172 3.49609ZM13.1953 4.23438C13.1406 3.25 12.9219 2.375 12.2109 1.66406C11.5 0.953125 10.625 0.734375 9.64062 0.679688C8.62891 0.625 5.59375 0.625 4.58203 0.679688C3.59766 0.734375 2.75 0.953125 2.01172 1.66406C1.30078 2.375 1.08203 3.25 1.02734 4.23438C0.972656 5.24609 0.972656 8.28125 1.02734 9.29297C1.08203 10.2773 1.30078 11.125 2.01172 11.8633C2.75 12.5742 3.59766 12.793 4.58203 12.8477C5.59375 12.9023 8.62891 12.9023 9.64062 12.8477C10.625 12.793 11.5 12.5742 12.2109 11.8633C12.9219 11.125 13.1406 10.2773 13.1953 9.29297C13.25 8.28125 13.25 5.24609 13.1953 4.23438ZM11.8828 10.3594C11.6914 10.9062 11.2539 11.3164 10.7344 11.5352C9.91406 11.8633 8 11.7812 7.125 11.7812C6.22266 11.7812 4.30859 11.8633 3.51562 11.5352C2.96875 11.3164 2.55859 10.9062 2.33984 10.3594C2.01172 9.56641 2.09375 7.65234 2.09375 6.75C2.09375 5.875 2.01172 3.96094 2.33984 3.14062C2.55859 2.62109 2.96875 2.21094 3.51562 1.99219C4.30859 1.66406 6.22266 1.74609 7.125 1.74609C8 1.74609 9.91406 1.66406 10.7344 1.99219C11.2539 2.18359 11.6641 2.62109 11.8828 3.14062C12.2109 3.96094 12.1289 5.875 12.1289 6.75C12.1289 7.65234 12.2109 9.56641 11.8828 10.3594Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="visually-hidden">
                                                Instagram
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="social__share--list">
                                        <Link
                                            className="social__share--icon"
                                            target="_blank"
                                            href="https://www.youtube.com"
                                        >
                                            <svg
                                                width="16"
                                                height="11"
                                                viewBox="0 0 16 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.0117 2.16797C14.8477 1.51172 14.3281 0.992188 13.6992 0.828125C12.5234 0.5 7.875 0.5 7.875 0.5C7.875 0.5 3.19922 0.5 2.02344 0.828125C1.39453 0.992188 0.875 1.51172 0.710938 2.16797C0.382812 3.31641 0.382812 5.77734 0.382812 5.77734C0.382812 5.77734 0.382812 8.21094 0.710938 9.38672C0.875 10.043 1.39453 10.5352 2.02344 10.6992C3.19922 11 7.875 11 7.875 11C7.875 11 12.5234 11 13.6992 10.6992C14.3281 10.5352 14.8477 10.043 15.0117 9.38672C15.3398 8.21094 15.3398 5.77734 15.3398 5.77734C15.3398 5.77734 15.3398 3.31641 15.0117 2.16797ZM6.34375 7.99219V3.5625L10.2266 5.77734L6.34375 7.99219Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span className="visually-hidden">
                                                Youtube
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__header header__sticky">
                    <div className="container">
                        <div className="main__header--inner position__relative d-flex justify-content-between align-items-center">
                            <div className="offcanvas__header--menu__open ">
                                <Link
                                    className="offcanvas__header--menu__open--btn"
                                    href="javascript:void(0)"
                                    data-offcanvas
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ionicon offcanvas__header--menu__open--svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeMiterlimit="10"
                                            strokeWidth="32"
                                            d="M80 160h352M80 256h352M80 352h352"
                                        />
                                    </svg>
                                    <span className="visually-hidden">
                                        Offcanvas Menu Open
                                    </span>
                                </Link>
                            </div>
                            <div className="main__logo">
                                <h1 className="main__logo--title">
                                    <Link className="main__logo--link" href="/">
                                        MSB-STORE
                                    </Link>
                                </h1>
                            </div>
                            <div className="header__search--widget d-none d-lg-block header__sticky--none">
                                <form
                                    className="d-flex header__search--form border-radius-5"
                                    action="#"
                                    onSubmit={() =>
                                        console.log("submit search")
                                    }
                                >
                                    {/* <div className="header__select--categories select">
                                        <select
                                            className="header__select--inner"
                                            onChange={() =>
                                                console.log("Input change")
                                            }
                                        >
                                            <option defaultValue={""} value="">
                                                {" "}
                                                All categories
                                            </option>
                                        </select>
                                    </div> */}
                                    <div className="header__search--box">
                                        <label>
                                            <input
                                                className="header__search--input"
                                                placeholder="Search For Products..."
                                                type="text"
                                                defaultValue={""}
                                                style={{
                                                    fontSize: "1.5rem",
                                                    width: "100%",
                                                }}
                                                value={search}
                                                onChange={(e) =>
                                                    setSearch(e.target.value)
                                                }
                                            />
                                        </label>
                                        <button
                                            className="header__search--button bg__primary text-white"
                                            aria-label="search button"
                                            type="button"
                                            onClick={handleSearch}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.6952 14.4991L11.7663 10.5588C12.7765 9.4008 13.33 7.94381 13.33 6.42703C13.33 2.88322 10.34 0 6.66499 0C2.98997 0 0 2.88322 0 6.42703C0 9.97085 2.98997 12.8541 6.66499 12.8541C8.04464 12.8541 9.35938 12.4528 10.4834 11.6911L14.4422 15.6613C14.6076 15.827 14.8302 15.9184 15.0687 15.9184C15.2944 15.9184 15.5086 15.8354 15.6711 15.6845C16.0166 15.364 16.0276 14.8325 15.6952 14.4991ZM6.66499 1.67662C9.38141 1.67662 11.5913 3.8076 11.5913 6.42703C11.5913 9.04647 9.38141 11.1775 6.66499 11.1775C3.94857 11.1775 1.73869 9.04647 1.73869 6.42703C1.73869 3.8076 3.94857 1.67662 6.66499 1.67662Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="header__account header__sticky--none">
                                <ul className="header__account--wrapper d-flex align-items-center">
                                    <li className="header__account--items d-none d-lg-block">
                                        <Link
                                            className="header__account--btn"
                                            href="/dashboard"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className=" -user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                            <span className="visually-hidden">
                                                My account
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="header__account--items  header__account--search__items mobile__d--block d-sm-2-none">
                                        <Link
                                            className="header__account--btn search__open--btn"
                                            href="javascript:void(0)"
                                            data-offcanvas
                                        >
                                            <svg
                                                className="product__items--action__btn--svg"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22.51"
                                                height="20.443"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="32"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="32"
                                                    d="M338.29 338.29L448 448"
                                                />
                                            </svg>
                                            <span className="visually-hidden">
                                                Search
                                            </span>
                                        </Link>
                                    </li>

                                    <li className="header__account--items header__minicart--items">
                                        <Link
                                            className="header__account--btn minicart__open--btn"
                                            href="/cart"
                                            data-offcanvas
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22.706"
                                                height="22.534"
                                                viewBox="0 0 14.706 13.534"
                                            >
                                                <g transform="translate(0 0)">
                                                    <g>
                                                        <path
                                                            data-name="Path 16787"
                                                            d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                            transform="translate(0 -463.248)"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            data-name="Path 16788"
                                                            d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                            transform="translate(-1.191 -466.622)"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            data-name="Path 16789"
                                                            d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                            transform="translate(-2.875 -466.622)"
                                                            fill="currentColor"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="header__account header__sticky--block">
                                <ul className="header__account--wrapper d-flex align-items-center">
                                    <li className="header__account--items  header__account--search__items d-sm-2-none">
                                        <Link
                                            className="header__account--btn search__open--btn"
                                            href="javascript:void(0)"
                                            data-offcanvas
                                        >
                                            <svg
                                                className="product__items--action__btn--svg"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22.51"
                                                height="20.443"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="32"
                                                />
                                                <path
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="32"
                                                    d="M338.29 338.29L448 448"
                                                />
                                            </svg>
                                            <span className="visually-hidden">
                                                Search
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="header__account--items d-none d-lg-block">
                                        <Link
                                            className="header__account--btn"
                                            href="my-account.html"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className=" -user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle
                                                    cx="12"
                                                    cy="7"
                                                    r="4"
                                                ></circle>
                                            </svg>
                                            <span className="visually-hidden">
                                                My account
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="header__account--items d-none d-lg-block">
                                        <Link
                                            className="header__account--btn"
                                            href="wishlist.html"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className=" -heart"
                                            >
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="header__account--items header__minicart--items">
                                        <Link
                                            className="header__account--btn minicart__open--btn"
                                            href="javascript:void(0)"
                                            data-offcanvas
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22.706"
                                                height="22.534"
                                                viewBox="0 0 14.706 13.534"
                                            >
                                                <g transform="translate(0 0)">
                                                    <g>
                                                        <path
                                                            data-name="Path 16787"
                                                            d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                            transform="translate(0 -463.248)"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            data-name="Path 16788"
                                                            d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                            transform="translate(-1.191 -466.622)"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            data-name="Path 16789"
                                                            d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                            transform="translate(-2.875 -466.622)"
                                                            fill="currentColor"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                            <span className="items__count">
                                                2
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas__header">
                    <div className="offcanvas__inner">
                        <div className="offcanvas__logo">
                            <Link
                                className="offcanvas__logo_link"
                                href="index.html"
                            >
                                <img
                                    src=""
                                    alt="Grocee Logo"
                                    width="158"
                                    height="36"
                                />
                            </Link>
                            <button
                                className="offcanvas__close--btn"
                                data-offcanvas
                            >
                                close
                            </button>
                        </div>
                        <nav className="offcanvas__menu">
                            <ul className="offcanvas__menu_ul">
                                <li className="offcanvas__menu_li">
                                    <Link
                                        className="offcanvas__menu_item"
                                        href="index.html"
                                    >
                                        Home
                                    </Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="index.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home One
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="index-2.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Two
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="index-3.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Three
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="index-4.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Four
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="index-5.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Five
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <Link
                                        className="offcanvas__menu_item"
                                        href=" "
                                    >
                                        Shop
                                    </Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column One
                                            </Link>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href=" "
                                                    >
                                                        Shop Left Sidebar
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-right-sidebar.html"
                                                    >
                                                        Shop Right Sidebar
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-grid.html"
                                                    >
                                                        Shop Grid
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-grid-list.html"
                                                    >
                                                        Shop Grid List
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-list.html"
                                                    >
                                                        Shop List
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column Two
                                            </Link>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-details.html"
                                                    >
                                                        Product Details
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-video.html"
                                                    >
                                                        Video Product
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-details.html"
                                                    >
                                                        Variable Product
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-left-sidebar.html"
                                                    >
                                                        Product Left Sidebar
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-gallery.html"
                                                    >
                                                        Product Gallery
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column Three
                                            </Link>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="my-account.html"
                                                    >
                                                        My Account
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="my-account-2.html"
                                                    >
                                                        My Account 2
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="404.html"
                                                    >
                                                        404 Page
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="login.html"
                                                    >
                                                        Login Page
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="faq.html"
                                                    >
                                                        Faq Page
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column Three
                                            </Link>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="about.html"
                                                    >
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="contact.html"
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="portfolio.html"
                                                    >
                                                        Portfolio
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="compare.html"
                                                    >
                                                        Compare Pages
                                                    </Link>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <Link
                                                        className="offcanvas__sub_menu_item"
                                                        href="checkout.html"
                                                    >
                                                        Checkout page
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <Link
                                        className="offcanvas__menu_item"
                                        href="blog.html"
                                    >
                                        Blog
                                    </Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="blog.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Grid
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="blog-details.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Details
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="blog-left-sidebar.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Left Sidebar
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="blog-right-sidebar.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Right Sidebar
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <Link
                                        className="offcanvas__menu_item"
                                        href="#"
                                    >
                                        Pages
                                    </Link>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="about.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="contact.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="cart.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Cart Page
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="portfolio.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Portfolio Page
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="wishlist.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Wishlist Page
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="login.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Login Page
                                            </Link>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <Link
                                                href="404.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Error Page
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <Link
                                        className="offcanvas__menu_item"
                                        href="about.html"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <Link
                                        className="offcanvas__menu_item"
                                        href="contact.html"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className="offcanvas__account--items">
                                <Link
                                    className="offcanvas__account--items__btn d-flex align-items-center"
                                    href="login.html"
                                >
                                    <span className="offcanvas__account--items__icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20.51"
                                            height="19.443"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="32"
                                            />
                                            <path
                                                d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                                strokeWidth="32"
                                            />
                                        </svg>
                                    </span>
                                    <span className="offcanvas__account--items__label">
                                        Login / Register
                                    </span>
                                </Link>
                            </div>
                            <div className="offcanvas__account--wrapper d-flex">
                                <div className="offcanvas__account--currency">
                                    <Link
                                        className="offcanvas__account--currency__menu d-flex align-items-center text-black"
                                        href="javascript:void(0)"
                                    >
                                        <img src="" alt="currency" />
                                        <span>USD</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9.797"
                                            height="6.05"
                                            viewBox="0 0 9.797 6.05"
                                        >
                                            <path
                                                d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                                opacity="0.7"
                                            />
                                        </svg>
                                    </Link>
                                    <div className="offcanvas__account--currency__submenu">
                                        <ul>
                                            <li className="currency__items">
                                                <Link
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    CAD
                                                </Link>
                                            </li>
                                            <li className="currency__items">
                                                <Link
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    CNY
                                                </Link>
                                            </li>
                                            <li className="currency__items">
                                                <Link
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    EUR
                                                </Link>
                                            </li>
                                            <li className="currency__items">
                                                <Link
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    GBP
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="language__currency--list">
                                    <Link
                                        className="offcanvas__language--switcher"
                                        href="javascript:void(0)"
                                    >
                                        <span>English</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="9.797"
                                            height="6.05"
                                            viewBox="0 0 9.797 6.05"
                                        >
                                            <path
                                                d="M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                                opacity="0.7"
                                            />
                                        </svg>
                                    </Link>
                                    <div className="offcanvas__dropdown--language">
                                        <ul>
                                            <li className="language__items">
                                                <Link
                                                    className="language__text"
                                                    href="#"
                                                >
                                                    France
                                                </Link>
                                            </li>
                                            <li className="language__items">
                                                <Link
                                                    className="language__text"
                                                    href="#"
                                                >
                                                    Russia
                                                </Link>
                                            </li>
                                            <li className="language__items">
                                                <Link
                                                    className="language__text"
                                                    href="#"
                                                >
                                                    Spanish
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="offcanvas__stikcy--toolbar">
                    <ul className="d-flex justify-content-between">
                        <li className="offcanvas__stikcy--toolbar__list">
                            <Link
                                className="offcanvas__stikcy--toolbar__btn"
                                href="index.html"
                            >
                                <span className="offcanvas__stikcy--toolbar__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        width="21.51"
                                        height="21.443"
                                        viewBox="0 0 22 17"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M20.9141 7.93359c.1406.11719.2109.26953.2109.45703 0 .14063-.0469.25782-.1406.35157l-.3516.42187c-.1172.14063-.2578.21094-.4219.21094-.1406 0-.2578-.04688-.3515-.14062l-.9844-.77344V15c0 .3047-.1172.5625-.3516.7734-.2109.2344-.4687.3516-.7734.3516h-4.5c-.3047 0-.5742-.1172-.8086-.3516-.2109-.2109-.3164-.4687-.3164-.7734v-3.6562h-2.25V15c0 .3047-.11719.5625-.35156.7734-.21094.2344-.46875.3516-.77344.3516h-4.5c-.30469 0-.57422-.1172-.80859-.3516-.21094-.2109-.31641-.4687-.31641-.7734V8.46094l-.94922.77344c-.11719.09374-.24609.14062-.38672.14062-.16406 0-.30468-.07031-.42187-.21094l-.35157-.42187C.921875 8.625.875 8.50781.875 8.39062c0-.1875.070312-.33984.21094-.45703L9.73438.832031C10.1094.527344 10.5312.375 11 .375s.8906.152344 1.2656.457031l8.6485 7.101559zm-3.7266 6.50391V7.05469L11 1.99219l-6.1875 5.0625v7.38281h3.375v-3.6563c0-.3046.10547-.5624.31641-.7734.23437-.23436.5039-.35155.80859-.35155h3.375c.3047 0 .5625.11719.7734.35155.2344.211.3516.4688.3516.7734v3.6563h3.375z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="offcanvas__stikcy--toolbar__label">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list">
                            <Link
                                className="offcanvas__stikcy--toolbar__btn"
                                href=" "
                            >
                                <span className="offcanvas__stikcy--toolbar__icon">
                                    <svg
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18.51"
                                        height="17.443"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 48v152H248V80zm-200 0v152H48V80zM48 432V280h152v152zm200 0V280h152v152z"></path>
                                    </svg>
                                </span>
                                <span className="offcanvas__stikcy--toolbar__label">
                                    Shop
                                </span>
                            </Link>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list ">
                            <Link
                                className="offcanvas__stikcy--toolbar__btn search__open--btn"
                                href="javascript:void(0)"
                                data-offcanvas
                            >
                                <span className="offcanvas__stikcy--toolbar__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22.51"
                                        height="20.443"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeMiterlimit="10"
                                            strokeWidth="32"
                                        />
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeMiterlimit="10"
                                            strokeWidth="32"
                                            d="M338.29 338.29L448 448"
                                        />
                                    </svg>
                                </span>
                                <span className="offcanvas__stikcy--toolbar__label">
                                    Search
                                </span>
                            </Link>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list">
                            <Link
                                className="offcanvas__stikcy--toolbar__btn minicart__open--btn"
                                href="javascript:void(0)"
                                data-offcanvas
                            >
                                <span className="offcanvas__stikcy--toolbar__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22.706"
                                        height="22.534"
                                        viewBox="0 0 14.706 13.534"
                                    >
                                        <g transform="translate(0 0)">
                                            <g>
                                                <path
                                                    data-name="Path 16787"
                                                    d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                                    transform="translate(0 -463.248)"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    data-name="Path 16788"
                                                    d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                                    transform="translate(-1.191 -466.622)"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    data-name="Path 16789"
                                                    d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                                    transform="translate(-2.875 -466.622)"
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                                <span className="offcanvas__stikcy--toolbar__label">
                                    Cart
                                </span>
                                <span className="items__count">3</span>
                            </Link>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list">
                            <Link
                                className="offcanvas__stikcy--toolbar__btn"
                                href="wishlist.html"
                            >
                                <span className="offcanvas__stikcy--toolbar__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className=" -heart"
                                    >
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </span>
                                <span className="offcanvas__stikcy--toolbar__label">
                                    Wishlist
                                </span>
                                <span className="items__count">3</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="predictive__search--box ">
                    <div className="predictive__search--box__inner">
                        <h2 className="predictive__search--title">
                            Search Products
                        </h2>
                        <form className="predictive__search--form" action="#">
                            <label>
                                <input
                                    className="predictive__search--input"
                                    placeholder="Search Here"
                                    type="text"
                                />
                            </label>
                            <button
                                className="predictive__search--button text-white"
                                aria-label="search button"
                            >
                                <svg
                                    className="product__items--action__btn--svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30.51"
                                    height="25.443"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                        strokeWidth="32"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        strokeWidth="32"
                                        d="M338.29 338.29L448 448"
                                    />
                                </svg>{" "}
                            </button>
                        </form>
                    </div>
                    <button
                        className="predictive__search--close__btn"
                        aria-label="search close"
                        data-offcanvas
                    >
                        <svg
                            className="predictive__search--close__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="40.51"
                            height="30.443"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="32"
                                d="M368 368L144 144M368 144L144 368"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {children}

            <footer className="footer__section footer__bg">
                <div className="container">
                    <div className="main__footer">
                        <div className="row ">
                            <div className="col-lg-4 col-md-10">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title">
                                        About Us{" "}
                                        <button
                                            className="footer__widget--button"
                                            aria-label="footer widget button"
                                        ></button>
                                        <svg
                                            className="footer__widget--title__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12.355"
                                            height="8.394"
                                            viewBox="0 0 10.355 6.394"
                                        >
                                            <path
                                                d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </h2>
                                    <div className="footer__widget--inner">
                                        <p
                                            className="footer__widget--desc"
                                            style={{ maxWidth: "350px" }}
                                        >
                                            MSB-Store adalah sebuah toko online
                                            yang bergerak di bidang penjualan
                                            barang dan keperluan otomotif. Kami
                                            menyediakan berbagai macam produk
                                            berkualitas tinggi untuk kebutuhan
                                            kendaraan Anda, termasuk suku
                                            cadang, aksesori, dan peralatan
                                            perawatan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title ">
                                        My Account{" "}
                                        <button
                                            className="footer__widget--button"
                                            aria-label="footer widget button"
                                        ></button>
                                        <svg
                                            className="footer__widget--title__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12.355"
                                            height="8.394"
                                            viewBox="0 0 10.355 6.394"
                                        >
                                            <path
                                                d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </h2>
                                    <ul className="footer__widget--menu footer__widget--inner">
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="my-account.html"
                                            >
                                                My Account
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="cart.html"
                                            >
                                                Shopping Cart
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="cart.html"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="login.html"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="checkout.html"
                                            >
                                                Checkout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title ">
                                        Resources{" "}
                                        <button
                                            className="footer__widget--button"
                                            aria-label="footer widget button"
                                        ></button>
                                        <svg
                                            className="footer__widget--title__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12.355"
                                            height="8.394"
                                            viewBox="0 0 10.355 6.394"
                                        >
                                            <path
                                                d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </h2>
                                    <ul className="footer__widget--menu footer__widget--inner">
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="contact.html"
                                            >
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="about.html"
                                            >
                                                About Us
                                            </Link>
                                        </li>

                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="privacy-policy.html"
                                            >
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="faq.html"
                                            >
                                                Frequently
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4">
                                <div className="footer__widget">
                                    <h2 className="footer__widget--title ">
                                        FIND IT FAST{" "}
                                        <button
                                            className="footer__widget--button"
                                            aria-label="footer widget button"
                                        ></button>
                                        <svg
                                            className="footer__widget--title__arrowdown--icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12.355"
                                            height="8.394"
                                            viewBox="0 0 10.355 6.394"
                                        >
                                            <path
                                                d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                                                transform="translate(-6 -8.59)"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </h2>
                                    <ul className="footer__widget--menu footer__widget--inner">
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href=" "
                                            >
                                                Products
                                            </Link>
                                        </li>

                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href=" "
                                            >
                                                Search
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="footer__bottom--inenr d-flex justify-content-between align-items-center">
                            <p
                                className="copyright__content"
                                style={{ margin: "auto" }}
                            >
                                <span className="text__secondary">© 2024</span>{" "}
                                Powered by{" "}
                                <Link
                                    className="copyright__content--link"
                                    href="/"
                                >
                                    Mandiri Sejati Borneo
                                </Link>{" "}
                                . All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
