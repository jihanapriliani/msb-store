import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

import "../../../assets/guest-layout/css/style.css";
import "../../../assets/guest-layout/css/custom.css";
import "../../../assets/guest-layout/css/vendor/bootstrap.min.css";

export default function Guest({ children }) {
    return (
        <>
            <header className="header__section">
                <div className="header__topbar border-bottom">
                    <div className="container">
                        <div className="header__topbar--inner d-flex align-items-center justify-content-between">
                            <ul className="header__topbar--info d-none d-lg-flex">
                                <li className="header__info--list">
                                    <a className="header__info--link" href=" ">
                                        DELIVERY
                                    </a>
                                </li>
                                <li className="header__info--list">
                                    <a
                                        className="header__info--link"
                                        href="privacy-policy.html"
                                    >
                                        GUARANTEE
                                    </a>
                                </li>
                                <li className="header__info--list">
                                    <a
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
                                    </a>
                                </li>
                            </ul>
                            <div className="header__top--right d-flex align-items-center">
                                <ul className="social__share d-flex">
                                    <li className="social__share--list">
                                        <a
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
                                        </a>
                                    </li>

                                    <li className="social__share--list">
                                        <a
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
                                        </a>
                                    </li>
                                    <li className="social__share--list">
                                        <a
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
                                        </a>
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
                                <a
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
                                </a>
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
                                >
                                    <div className="header__select--categories select">
                                        <select className="header__select--inner">
                                            <option defaultValue={1} value="1">
                                                {" "}
                                                All categories
                                            </option>
                                        </select>
                                    </div>
                                    <div className="header__search--box">
                                        <label>
                                            <input
                                                className="header__search--input"
                                                placeholder="Search For Products..."
                                                type="text"
                                            />
                                        </label>
                                        <button
                                            className="header__search--button bg__primary text-white"
                                            aria-label="search button"
                                            type="submit"
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
                                        <a
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
                                        </a>
                                    </li>
                                    <li className="header__account--items d-none d-lg-block">
                                        <a
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
                                        </a>
                                    </li>
                                    <li className="header__account--items d-none d-lg-block">
                                        <a
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
                                        </a>
                                    </li>
                                    <li className="header__account--items header__minicart--items">
                                        <a
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
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="offcanvas__header">
                    <div className="offcanvas__inner">
                        <div className="offcanvas__logo">
                            <a
                                className="offcanvas__logo_link"
                                href="index.html"
                            >
                                <img
                                    src="assets/img/logo/nav-log.webp"
                                    alt="Grocee Logo"
                                    width="158"
                                    height="36"
                                />
                            </a>
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
                                    <a
                                        className="offcanvas__menu_item"
                                        href="index.html"
                                    >
                                        Home
                                    </a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="index.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home One
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="index-2.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Two
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="index-3.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Three
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="index-4.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Four
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="index-5.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Home Five
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <a
                                        className="offcanvas__menu_item"
                                        href=" "
                                    >
                                        Shop
                                    </a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column One
                                            </a>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href=" "
                                                    >
                                                        Shop Left Sidebar
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-right-sidebar.html"
                                                    >
                                                        Shop Right Sidebar
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-grid.html"
                                                    >
                                                        Shop Grid
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-grid-list.html"
                                                    >
                                                        Shop Grid List
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="shop-list.html"
                                                    >
                                                        Shop List
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column Two
                                            </a>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-details.html"
                                                    >
                                                        Product Details
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-video.html"
                                                    >
                                                        Video Product
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-details.html"
                                                    >
                                                        Variable Product
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-left-sidebar.html"
                                                    >
                                                        Product Left Sidebar
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="product-gallery.html"
                                                    >
                                                        Product Gallery
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column Three
                                            </a>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="my-account.html"
                                                    >
                                                        My Account
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="my-account-2.html"
                                                    >
                                                        My Account 2
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="404.html"
                                                    >
                                                        404 Page
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="login.html"
                                                    >
                                                        Login Page
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="faq.html"
                                                    >
                                                        Faq Page
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="#"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Column Three
                                            </a>
                                            <ul className="offcanvas__sub_menu">
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="about.html"
                                                    >
                                                        About Us
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="contact.html"
                                                    >
                                                        Contact Us
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="portfolio.html"
                                                    >
                                                        Portfolio
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="compare.html"
                                                    >
                                                        Compare Pages
                                                    </a>
                                                </li>
                                                <li className="offcanvas__sub_menu_li">
                                                    <a
                                                        className="offcanvas__sub_menu_item"
                                                        href="checkout.html"
                                                    >
                                                        Checkout page
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <a
                                        className="offcanvas__menu_item"
                                        href="blog.html"
                                    >
                                        Blog
                                    </a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="blog.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Grid
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="blog-details.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Details
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="blog-left-sidebar.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Left Sidebar
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="blog-right-sidebar.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Blog Right Sidebar
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <a
                                        className="offcanvas__menu_item"
                                        href="#"
                                    >
                                        Pages
                                    </a>
                                    <ul className="offcanvas__sub_menu">
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="about.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="contact.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="cart.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Cart Page
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="portfolio.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Portfolio Page
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="wishlist.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Wishlist Page
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="login.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Login Page
                                            </a>
                                        </li>
                                        <li className="offcanvas__sub_menu_li">
                                            <a
                                                href="404.html"
                                                className="offcanvas__sub_menu_item"
                                            >
                                                Error Page
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <a
                                        className="offcanvas__menu_item"
                                        href="about.html"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="offcanvas__menu_li">
                                    <a
                                        className="offcanvas__menu_item"
                                        href="contact.html"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="offcanvas__account--items">
                                <a
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
                                </a>
                            </div>
                            <div className="offcanvas__account--wrapper d-flex">
                                <div className="offcanvas__account--currency">
                                    <a
                                        className="offcanvas__account--currency__menu d-flex align-items-center text-black"
                                        href="javascript:void(0)"
                                    >
                                        <img
                                            src="assets/img/icon/usd-icon.webp"
                                            alt="currency"
                                        />
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
                                    </a>
                                    <div className="offcanvas__account--currency__submenu">
                                        <ul>
                                            <li className="currency__items">
                                                <a
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    CAD
                                                </a>
                                            </li>
                                            <li className="currency__items">
                                                <a
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    CNY
                                                </a>
                                            </li>
                                            <li className="currency__items">
                                                <a
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    EUR
                                                </a>
                                            </li>
                                            <li className="currency__items">
                                                <a
                                                    className="currency__text"
                                                    href="#"
                                                >
                                                    GBP
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="language__currency--list">
                                    <a
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
                                    </a>
                                    <div className="offcanvas__dropdown--language">
                                        <ul>
                                            <li className="language__items">
                                                <a
                                                    className="language__text"
                                                    href="#"
                                                >
                                                    France
                                                </a>
                                            </li>
                                            <li className="language__items">
                                                <a
                                                    className="language__text"
                                                    href="#"
                                                >
                                                    Russia
                                                </a>
                                            </li>
                                            <li className="language__items">
                                                <a
                                                    className="language__text"
                                                    href="#"
                                                >
                                                    Spanish
                                                </a>
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
                            <a
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
                            </a>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list">
                            <a
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
                            </a>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list ">
                            <a
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
                            </a>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list">
                            <a
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
                            </a>
                        </li>
                        <li className="offcanvas__stikcy--toolbar__list">
                            <a
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
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="offCanvas__minicart">
                    <div className="minicart__header ">
                        <div className="minicart__header--top d-flex justify-content-between align-items-center">
                            <h3 className="minicart__title"> Shopping Cart</h3>
                            <button
                                className="minicart__close--btn"
                                aria-label="minicart close btn"
                                data-offcanvas
                            >
                                <svg
                                    className="minicart__close--icon"
                                    xmlns="http://www.w3.org/2000/svg"
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
                        <p className="minicart__header--desc">
                            The organic foods products are limited
                        </p>
                    </div>
                    <div className="minicart__product">
                        <div className="minicart__product--items d-flex">
                            <div className="minicart__thumb">
                                <a href="product-details.html">
                                    <img
                                        src="assets/img/product/small-product/product1.webp"
                                        alt="prduct-img"
                                    />
                                </a>
                            </div>
                            <div className="minicart__text">
                                <h4 className="minicart__subtitle">
                                    <a href="product-details.html">
                                        Car & Motorbike Care.
                                    </a>
                                </h4>
                                <span className="color__variant">
                                    <b>Color:</b> Beige
                                </span>
                                <div className="minicart__price">
                                    <span className="minicart__current--price">
                                        $125.00
                                    </span>
                                    <span className="minicart__old--price">
                                        $140.00
                                    </span>
                                </div>
                                <div className="minicart__text--footer d-flex align-items-center">
                                    <div className="quantity__box minicart__quantity">
                                        <button
                                            type="button"
                                            className="quantity__value decrease"
                                            aria-label="quantity value"
                                            value="Decrease Value"
                                        >
                                            -
                                        </button>
                                        <label>
                                            <input
                                                type="number"
                                                className="quantity__number"
                                                value="1"
                                                data-counter
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            className="quantity__value increase"
                                            aria-label="quantity value"
                                            value="Increase Value"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="minicart__product--remove"
                                        type="button"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="minicart__product--items d-flex">
                            <div className="minicart__thumb">
                                <a href="product-details.html">
                                    <img
                                        src="assets/img/product/small-product/product2.webp"
                                        alt="prduct-img"
                                    />
                                </a>
                            </div>
                            <div className="minicart__text">
                                <h4 className="minicart__subtitle">
                                    <a href="product-details.html">
                                        Engine And Drivetrain.
                                    </a>
                                </h4>
                                <span className="color__variant">
                                    <b>Color:</b> Green
                                </span>
                                <div className="minicart__price">
                                    <span className="minicart__current--price">
                                        $115.00
                                    </span>
                                    <span className="minicart__old--price">
                                        $130.00
                                    </span>
                                </div>
                                <div className="minicart__text--footer d-flex align-items-center">
                                    <div className="quantity__box minicart__quantity">
                                        <button
                                            type="button"
                                            className="quantity__value decrease"
                                            aria-label="quantity value"
                                            value="Decrease Value"
                                        >
                                            -
                                        </button>
                                        <label>
                                            <input
                                                type="number"
                                                className="quantity__number"
                                                value="1"
                                                data-counter
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            className="quantity__value increase"
                                            aria-label="quantity value"
                                            value="Increase Value"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="minicart__product--remove"
                                        type="button"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="minicart__amount">
                        <div className="minicart__amount_list d-flex justify-content-between">
                            <span>Sub Total:</span>
                            <span>
                                <b>$240.00</b>
                            </span>
                        </div>
                        <div className="minicart__amount_list d-flex justify-content-between">
                            <span>Total:</span>
                            <span>
                                <b>$240.00</b>
                            </span>
                        </div>
                    </div>
                    <div className="minicart__conditions text-center">
                        <input
                            className="minicart__conditions--input"
                            id="accept"
                            type="checkbox"
                        />
                        <label
                            className="minicart__conditions--label"
                            htmlFor="accept"
                        >
                            I agree with the{" "}
                            <a
                                className="minicart__conditions--link"
                                href="privacy-policy.html"
                            >
                                Privacy Policy
                            </a>
                        </label>
                    </div>
                    <div className="minicart__button d-flex justify-content-center">
                        <a
                            className="primary__btn minicart__button--link"
                            href="cart.html"
                        >
                            View cart
                        </a>
                        <a
                            className="primary__btn minicart__button--link"
                            href="checkout.html"
                        >
                            Checkout
                        </a>
                    </div>
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
                                        <p className="footer__widget--desc">
                                            MSB merupakan sebuah toko online
                                            yang bergerak dibidang penjualan
                                            barang dan keperluan otomotif.
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
                                            <a
                                                className="footer__widget--menu__text"
                                                href="my-account.html"
                                            >
                                                My Account
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href="cart.html"
                                            >
                                                Shopping Cart
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href="cart.html"
                                            >
                                                Login
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href="login.html"
                                            >
                                                Register
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href="checkout.html"
                                            >
                                                Checkout
                                            </a>
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
                                            <a
                                                className="footer__widget--menu__text"
                                                href="contact.html"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href="about.html"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <Link
                                                className="footer__widget--menu__text"
                                                href="/cart"
                                            >
                                                Wishlist
                                            </Link>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href="privacy-policy.html"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href="faq.html"
                                            >
                                                Frequently
                                            </a>
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
                                            <a
                                                className="footer__widget--menu__text"
                                                href=" "
                                            >
                                                Smartphone ablet
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href=" "
                                            >
                                                Computer Laptop
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href=" "
                                            >
                                                TV & Audio
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href=" "
                                            >
                                                Car Accessories
                                            </a>
                                        </li>
                                        <li className="footer__widget--menu__list">
                                            <a
                                                className="footer__widget--menu__text"
                                                href=" "
                                            >
                                                Cameras Photos
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shipping__inner d-flex">
                        <div className="shipping__items d-flex align-items-center">
                            <div className="shipping__icon text-white">
                                <svg
                                    width="38"
                                    height="35"
                                    viewBox="0 0 38 35"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 10.4315V14.4875C0 15.435 0.781458 16.2008 1.73129 16.2008H3.27884V32.3184C3.27884 33.7058 4.42779 34.8352 5.82973 34.8429H32.0509C33.4528 34.8429 34.594 33.7058 34.6018 32.3184V16.1938H36.1493C37.0991 16.1938 37.8806 15.4281 37.8806 14.4805V10.4245C37.8806 9.47692 37.0991 8.71112 36.1493 8.71112H28.42C29.3544 7.84699 29.9214 6.6871 30.021 5.42094C30.1281 4.07921 29.6994 2.77522 28.8182 1.75943C27.9373 0.736001 26.7041 0.114302 25.348 0.0159745C23.9922 -0.0900256 22.6746 0.334271 21.6481 1.20635C19.9476 2.6468 18.7067 4.8755 17.8332 6.98294C17.1361 5.40604 16.1786 3.7914 14.8995 2.70738C13.1069 1.19115 10.4028 1.39583 8.87062 3.17736C8.12764 4.03385 7.76754 5.13315 7.85957 6.2553C7.9362 7.18001 8.304 8.03689 8.90907 8.71917H1.73901C0.781536 8.71917 0.00772156 9.48492 7.87486e-05 10.4325L0 10.4315ZM1.83065 14.3888V10.5226H11.7206C11.7588 10.5302 11.8049 10.5302 11.8431 10.5302C11.889 10.5302 11.9274 10.5302 11.9733 10.5226H25.1796C25.2178 10.5302 25.2562 10.5302 25.2944 10.5302C25.3326 10.5302 25.3633 10.5302 25.4015 10.5226H36.0415V14.3888H33.6975H33.6744H4.18971H4.16663H1.83029H1.83065ZM32.7706 32.3177C32.7706 32.7118 32.4413 33.0378 32.043 33.0378H22.8732V16.1927H32.7703L32.7706 32.3177ZM16.8295 16.1931H21.0427V33.0382H16.8295V16.1931ZM14.9985 33.0382H5.82871C5.43044 33.0382 5.10111 32.7123 5.10111 32.3181V16.1936H14.9982L14.9985 33.0382ZM13.635 4.018C13.6581 4.03323 13.6809 4.05577 13.6963 4.071C15.0293 5.2004 15.9714 7.16413 16.561 8.71055H12.0185C11.4824 8.46048 10.9767 8.14187 10.5172 7.76299C9.4753 6.91376 9.32205 5.37498 10.1801 4.34391C11.0456 3.32048 12.5931 3.16882 13.635 4.018L13.635 4.018ZM19.112 8.71845C19.8322 6.73982 21.0655 4.08654 22.8272 2.58551C24.1983 1.43326 26.259 1.59256 27.4233 2.9495C28.5876 4.29886 28.4266 6.33808 27.0632 7.49797C26.4658 7.98319 25.8068 8.40015 25.102 8.72609H19.1116L19.112 8.71845Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="shipping__content">
                                <h2 className="shipping__content--title text-white h3">
                                    Free Shipping
                                </h2>
                                <p className="shipping__content--desc">
                                    Free shipping over $100
                                </p>
                            </div>
                        </div>
                        <div className="shipping__items d-flex align-items-center">
                            <div className="shipping__icon text-white">
                                <svg
                                    width="39"
                                    height="37"
                                    viewBox="0 0 39 37"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M34.4506 19.1161C34.0912 19.1161 33.8007 18.84 33.8007 18.4995V16.6495C33.8007 10.0795 27.5195 4.93302 19.5002 4.93302C11.4809 4.93302 5.20048 10.0797 5.20048 16.6495V18.4995C5.20048 18.84 4.90993 19.1161 4.55057 19.1161C4.19093 19.1161 3.90039 18.84 3.90039 18.4995V16.6495C3.90039 9.38758 10.7529 3.69946 19.5004 3.69946C28.2482 3.69946 35.1004 9.38758 35.1004 16.6495V18.4995C35.1004 18.84 34.8098 19.1161 34.4505 19.1161"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M6.50032 19.1436C3.66377 19.381 1.30023 21.1391 1.30023 23.1249C1.30023 25.1104 3.66377 26.8686 6.50032 27.106V19.1436ZM7.15023 28.3665C3.27419 28.3665 0 25.9657 0 23.1249C0 20.2838 3.27405 17.8831 7.15023 17.8831C7.5096 17.8831 7.80013 18.1595 7.80013 18.4999V27.7499C7.80013 28.0904 7.50959 28.3665 7.15023 28.3665V28.3665Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M38.3502 23.4334C37.9908 23.4334 37.7003 23.157 37.7003 22.8166V19.1165C37.7003 7.75154 31.0662 1.23356 19.4998 1.23356C7.76363 1.23356 1.30008 7.58444 1.30008 19.1165V22.8166C1.30008 23.157 1.00954 23.4334 0.650178 23.4334C0.290536 23.4334 0 23.157 0 22.8166V19.1165C0 6.96727 7.10774 0 19.5 0C31.8922 0 39 6.96793 39 19.1165V22.8166C39 23.157 38.7094 23.4334 38.3501 23.4334"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5016 36.9998C19.1422 36.9998 18.8517 36.7237 18.8517 36.3833C18.8517 35.0229 20.0176 33.9164 21.4516 33.9164H24.3428C26.3658 33.9164 28.2167 32.5944 28.9507 30.6278C29.0704 30.3065 29.4409 30.1369 29.7801 30.2518C30.1188 30.3659 30.2957 30.7179 30.176 31.0384C29.2595 33.4978 26.915 35.1499 24.3428 35.1499H21.4515C20.7347 35.1499 20.1517 35.703 20.1517 36.3833C20.1517 36.7237 19.8612 36.9999 19.5015 36.9999"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5001 37C19.1407 37 18.8502 36.7238 18.8502 36.3834C18.8502 35.703 18.2672 35.15 17.5501 35.15H14.6591C12.0875 35.15 9.743 33.4984 8.8265 31.0398C8.7068 30.7185 8.88363 30.3665 9.22178 30.2529C9.56292 30.1388 9.93206 30.3079 10.0518 30.6284C10.7855 32.5951 12.6367 33.9166 14.6591 33.9166H17.5501C18.984 33.9166 20.1503 35.023 20.1503 36.3834C20.1503 36.7238 19.8597 37 19.5001 37"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.10186 16.6499C8.38502 16.6499 7.80177 17.203 7.80177 17.8834V28.9834C7.80177 29.6635 8.38502 30.2166 9.10186 30.2166C9.81869 30.2166 10.4019 29.6635 10.4019 28.9834V17.8834C10.4019 17.203 9.81869 16.6499 9.10186 16.6499ZM9.10186 31.45C7.66791 31.45 6.50195 30.3438 6.50195 28.9834V17.8834C6.50195 16.5229 7.66791 15.4165 9.10186 15.4165C10.5358 15.4165 11.7018 16.5229 11.7018 17.8834V28.9834C11.7018 30.3438 10.5358 31.45 9.10186 31.45Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M32.5013 19.1435V27.1058C35.3378 26.8683 37.7013 25.1102 37.7013 23.1247C37.7013 21.1389 35.3378 19.3808 32.5013 19.1433V19.1435ZM31.8513 28.3663C31.4917 28.3663 31.2012 28.0901 31.2012 27.7497V18.4997C31.2012 18.1592 31.4917 17.8828 31.8513 17.8828C35.7271 17.8828 39.0009 20.2836 39.0009 23.1247C39.0009 25.9655 35.7268 28.3663 31.8513 28.3663"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M29.901 16.6499C29.1839 16.6499 28.6009 17.203 28.6009 17.8834V28.9834C28.6009 29.6635 29.1839 30.2166 29.901 30.2166C30.6178 30.2166 31.2008 29.6635 31.2008 28.9834V17.8834C31.2008 17.203 30.6178 16.6499 29.901 16.6499ZM29.901 31.45C28.467 31.45 27.3008 30.3438 27.3008 28.9834V17.8834C27.3008 16.5229 28.467 15.4165 29.901 15.4165C31.3346 15.4165 32.5009 16.5229 32.5009 17.8834V28.9834C32.5009 30.3438 31.3346 31.45 29.901 31.45Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.4979 18.4998C16.6309 18.4998 14.2981 20.7129 14.2981 23.4332C14.2981 26.1533 16.6309 28.3664 19.4979 28.3664C22.3653 28.3664 24.698 26.1533 24.698 23.4332C24.698 20.7129 22.3653 18.4998 19.4979 18.4998ZM19.4979 29.5998C15.9138 29.5998 12.998 26.8333 12.998 23.4332C12.998 20.0328 15.9138 17.2664 19.4979 17.2664C23.0821 17.2664 25.9981 20.0328 25.9981 23.4332C25.9981 26.8333 23.0821 29.5998 19.4979 29.5998Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.5018 18.4998C18.7063 18.4998 17.5518 20.4221 17.5518 23.4332C17.5518 26.4444 18.7063 28.3664 19.5018 28.3664C20.2975 28.3664 21.4518 26.4444 21.4518 23.4332C21.4518 20.4221 20.2975 18.4998 19.5018 18.4998ZM19.5018 29.5998C17.6486 29.5998 16.252 26.9487 16.252 23.4332C16.252 19.9175 17.6486 17.2664 19.5018 17.2664C21.3549 17.2664 22.7519 19.9175 22.7519 23.4332C22.7519 26.9487 21.3549 29.5998 19.5018 29.5998Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clipRule="evenodd"
                                        d="M25.3479 24.0498H13.648C13.2886 24.0498 12.998 23.7737 12.998 23.4332C12.998 23.0928 13.2886 22.8164 13.648 22.8164H25.3479C25.7076 22.8164 25.9981 23.0928 25.9981 23.4332C25.9981 23.7737 25.7076 24.0498 25.3479 24.0498Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="shipping__content">
                                <h2 className="shipping__content--title text-white h3">
                                    Support 24/7
                                </h2>
                                <p className="shipping__content--desc">
                                    Contact us 24 hours a day
                                </p>
                            </div>
                        </div>
                        <div className="shipping__items d-flex align-items-center">
                            <div className="shipping__icon text-white">
                                <svg
                                    width="43"
                                    height="36"
                                    viewBox="0 0 43 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.53678 0.000286987C2.45745 0.000286987 0.753906 1.5443 0.753906 3.42892V25.7142C0.753906 27.5988 2.45745 29.1428 4.53678 29.1428H17.1318C17.3825 29.1428 17.6229 29.0524 17.8002 28.8917C17.9778 28.731 18.0772 28.5129 18.0772 28.2856C18.0772 28.0583 17.9778 27.8402 17.8002 27.6795C17.6229 27.5187 17.3825 27.4283 17.1318 27.4283H4.53678C3.47255 27.4283 2.6455 26.6787 2.6455 25.7142V6.00033H12.1027V13.7145H12.1024C12.1027 14.0609 12.3332 14.3735 12.6862 14.506C13.0396 14.6386 13.4462 14.5654 13.7169 14.3203L16.831 11.4978L19.9452 14.3203C20.2156 14.5654 20.6222 14.6386 20.9755 14.506C21.3289 14.3734 21.5594 14.0609 21.5594 13.7145V6.00033H31.0166V12.9446V12.9443C31.0166 13.1716 31.116 13.3897 31.2933 13.5504C31.471 13.7111 31.7113 13.8015 31.9621 13.8015C32.2128 13.8015 32.4535 13.7111 32.6308 13.5504C32.8081 13.3897 32.9079 13.1716 32.9079 12.9443V3.42864C32.9079 1.54402 31.2043 0 29.125 0L4.53678 0.000286987ZM4.53678 1.71446H12.1022V4.28586H2.64583V3.42892C2.64583 2.46435 3.47288 1.71475 4.5371 1.71475L4.53678 1.71446ZM13.994 1.71446H19.6681V11.6452L17.4998 9.67993H17.4995C17.1303 9.3453 16.5315 9.3453 16.1623 9.67993L13.994 11.6455L13.994 1.71446ZM21.5594 1.71446H29.1248C30.189 1.71446 31.0161 2.46406 31.0161 3.42863V4.28586H21.5589L21.5594 1.71446Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M6.42781 19.7144C5.90568 19.7144 5.48234 20.0983 5.48234 20.5716C5.48234 20.7989 5.58176 21.017 5.75908 21.1777C5.93671 21.3384 6.17704 21.4288 6.42782 21.4288H12.102C12.3527 21.4288 12.5934 21.3384 12.7707 21.1777C12.948 21.017 13.0478 20.7989 13.0478 20.5716C13.0478 20.3443 12.948 20.1262 12.7707 19.9655C12.5934 19.8048 12.3527 19.7144 12.102 19.7144H6.42781Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M6.42781 23.1431C5.90568 23.1431 5.48234 23.5268 5.48234 24.0003C5.48234 24.2276 5.58176 24.4454 5.75908 24.6064C5.93671 24.7671 6.17704 24.8572 6.42782 24.8572H14.939C15.1898 24.8572 15.4305 24.7671 15.6078 24.6064C15.7851 24.4454 15.8848 24.2276 15.8848 24.0003C15.8848 23.773 15.7851 23.5549 15.6078 23.3942C15.4305 23.2335 15.1898 23.1431 14.939 23.1431H6.42781Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M15.8854 20.5716C15.8854 20.7989 15.7857 21.017 15.6084 21.1777C15.431 21.3384 15.1904 21.4288 14.9396 21.4288C14.4175 21.4288 13.9941 21.0448 13.9941 20.5716C13.9941 20.0983 14.4175 19.7144 14.9396 19.7144C15.1904 19.7144 15.431 19.8048 15.6084 19.9655C15.7857 20.1262 15.8854 20.3443 15.8854 20.5716Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M31.0182 15.4287C24.7617 15.4287 19.6699 20.0437 19.6699 25.7143C19.6699 31.3849 24.7617 35.9999 31.0182 35.9999C37.2747 35.9999 42.3665 31.3849 42.3665 25.7143C42.3665 20.0437 37.2747 15.4287 31.0182 15.4287ZM31.0182 17.1429C36.2522 17.1429 40.4754 20.9702 40.4754 25.7145C40.4754 30.4583 36.2527 34.2861 31.0182 34.2861C25.7842 34.2861 21.561 30.4588 21.561 25.7145C21.561 20.9706 25.7837 17.1429 31.0182 17.1429Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M28.3654 20.8229L25.7886 23.1616C25.4194 23.4962 25.4194 24.0389 25.7886 24.3735L28.3654 26.7122C28.7346 27.0468 29.3333 27.0468 29.7026 26.7122C30.0724 26.3778 30.073 25.8354 29.7045 25.5003L28.816 24.695H33.3319C34.6855 24.695 35.7459 25.6573 35.7459 26.8864C35.7459 28.1155 34.6855 29.0778 33.3319 29.0778H27.235C26.7129 29.0778 26.2892 29.4615 26.2892 29.935C26.2892 30.4083 26.7125 30.7923 27.235 30.7923H33.3322C35.7019 30.7923 37.6375 29.035 37.6375 26.8867C37.6375 24.7383 35.7016 22.9811 33.3322 22.9811H28.6608L29.7045 22.0352C30.073 21.7 30.0724 21.1573 29.7026 20.8232C29.2805 20.4576 28.728 20.5021 28.3654 20.8232V20.8229Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="shipping__content">
                                <h2 className="shipping__content--title text-white h3">
                                    100% Money Back
                                </h2>
                                <p className="shipping__content--desc">
                                    You have 30 days to Return
                                </p>
                            </div>
                        </div>
                        <div className="shipping__items d-flex align-items-center">
                            <div className="shipping__icon text-white">
                                <svg
                                    width="28"
                                    height="33"
                                    viewBox="0 0 28 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.9418 19.3345C12.9838 19.3466 12.0694 19.6922 11.3955 20.2974C10.7218 20.9024 10.3429 21.7181 10.3399 22.569C10.3371 23.4196 10.7108 24.2376 11.3807 24.8459V26.2996C11.3807 27.1301 11.8795 27.8975 12.6895 28.3128C13.4998 28.7278 14.4977 28.7278 15.3078 28.3128C16.1178 27.8975 16.6169 27.1301 16.6169 26.2996V24.8459C17.292 24.2291 17.6632 23.3993 17.6496 22.5392C17.6356 21.6793 17.2379 20.8592 16.5435 20.2596C15.8488 19.66 14.9145 19.3296 13.946 19.3416L13.9418 19.3345ZM14.7526 23.5072C14.445 23.7034 14.2626 24.0192 14.2631 24.3557V26.2857C14.2631 26.4172 14.1429 26.5239 13.9948 26.5239C13.8465 26.5239 13.7266 26.4172 13.7266 26.2857V24.3695C13.7268 24.0333 13.5446 23.7173 13.237 23.521C12.957 23.3234 12.7797 23.033 12.7453 22.7167C12.7109 22.4004 12.8229 22.0853 13.0551 21.8437C13.2873 21.6021 13.62 21.4544 13.9771 21.4348H13.9968C14.3618 21.4406 14.7073 21.5818 14.9497 21.8246C15.1917 22.0671 15.3083 22.3888 15.2709 22.7111C15.2335 23.0337 15.0455 23.3274 14.7527 23.521L14.7526 23.5072Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M13.9961 0.000558845C11.1916 0.000558845 8.50207 0.989734 6.51933 2.75044C4.53631 4.51115 3.42224 6.89914 3.42224 9.38902V13.2348C2.56092 13.3204 1.76512 13.6848 1.18731 14.2581C0.609256 14.8316 0.289622 15.574 0.289062 16.3437V29.8705C0.289062 30.7005 0.660322 31.4966 1.32145 32.0834C1.98256 32.6703 2.87891 33 3.81374 33H24.1398C25.0746 33 25.9713 32.6704 26.6324 32.0834C27.2932 31.4966 27.6647 30.7005 27.6647 29.8705V16.3437C27.6642 15.574 27.3446 14.8315 26.7665 14.2581C26.1884 13.6848 25.3929 13.3204 24.5316 13.2348V9.37158C24.5264 6.89069 23.4153 4.51214 21.4413 2.75597C19.4672 0.999855 16.7908 0.00925217 13.9966 0L13.9961 0.000558845ZM13.9961 2.08708V2.08684C16.174 2.09144 18.2608 2.86278 19.7992 4.23179C21.3372 5.6008 22.201 7.45564 22.201 9.38934V13.2145L5.77179 13.2143V9.3891V9.38934C5.77179 7.45253 6.63836 5.59521 8.18072 4.22576C9.72315 2.85626 11.8149 2.0869 13.9963 2.0869L13.9961 2.08708ZM25.3341 16.3441V29.8709V29.8707C25.3341 30.1474 25.2103 30.4125 24.9899 30.6083C24.7694 30.804 24.4708 30.9139 24.1591 30.9139H3.81347C3.50204 30.9139 3.20317 30.804 2.9827 30.6083C2.76252 30.4125 2.63876 30.1474 2.63876 29.8707V16.3439C2.63876 16.0671 2.76251 15.8017 2.9827 15.6062C3.20316 15.4105 3.50203 15.3006 3.81347 15.3006H24.1395C24.4545 15.296 24.7585 15.4037 24.9831 15.5999C25.2076 15.7962 25.3341 16.0642 25.3341 16.3438L25.3341 16.3441Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="shipping__content">
                                <h2 className="shipping__content--title text-white h3">
                                    Payment Secure
                                </h2>
                                <p className="shipping__content--desc">
                                    We ensure secure payment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="footer__bottom--inenr d-flex justify-content-between align-items-center">
                            <div className="footer__logo">
                                <a
                                    className="footer__logo--link"
                                    href="index.html"
                                >
                                    <img
                                        src="assets/img/logo/nav-log-light.webp"
                                        alt="logo-img"
                                    />
                                </a>
                            </div>
                            <p className="copyright__content">
                                <span className="text__secondary">© 2024</span>{" "}
                                Powered by{" "}
                                <a
                                    className="copyright__content--link"
                                    target="_blank"
                                    href="https://themeforest.net/search/hooktheme"
                                >
                                    Mandiri Sejati Borneo
                                </a>{" "}
                                . All Rights Reserved.
                            </p>
                            <div className="footer__payment">
                                <img
                                    src="assets/img/icon/payment-img.webp"
                                    alt="payment-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
