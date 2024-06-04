import { Link, Head } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";

import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import axios from "axios";

import ImageGallery from "@/Components/ProductImageGallery";

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LineIcon,
    LineShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
} from "react-share";

export default function DetailProduct({ product, user, productCart }) {
    const [amount, setAmount] = useState(1);

    const shareUrl = `https://mandirisejatiborneo.store/detail-product/${product.id}`;

    useEffect(() => {
        if (productCart && productCart !== 0) {
            setAmount(productCart.amount);
        }
    }, [productCart]);

    const handleAddProductToCart = (productId, isBuyNow) => {
        if (user) {
            if (isBuyNow) {
                axios
                    .post(`/api/add-product-to-cart`, {
                        product_id: productId,
                        user_id: user.id,
                        amount: amount,
                    })
                    .then((res) => {
                        window.location.href = "/cart";
                    })
                    .catch((err) => console.log(err));
            } else {
                axios
                    .post(`/api/add-product-to-cart`, {
                        product_id: productId,
                        user_id: user.id,
                        amount: amount,
                    })
                    .then((res) => {
                        Swal.fire({
                            icon: "success",
                            title: "Produk berhasil masuk keranjang",
                            showCancelButton: true,
                            confirmButtonText: "Lanjut Belanja",
                            cancelButtonText: "Halaman Keranjang",
                            customClass: {
                                confirmButton: "btn btn-secondary ",
                                cancelButton: "btn btn-danger ml-2",
                            },
                            buttonsStyling: false,
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            } else if (
                                result.dismiss === Swal.DismissReason.cancel
                            ) {
                                window.location.href = "/cart";
                            }
                        });
                    })
                    .catch((err) => console.log(err));
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Login untuk menambahkan barang ke keranjang",
                confirmButtonText: "Oke",
                customClass: {
                    confirmButton: "btn btn-danger",
                },
                buttonsStyling: false,
            });
        }
    };

    const handleIncreaseAmount = () => {
        if (product.stock >= amount + 1) {
            setAmount(amount + 1);
        } else {
            Swal.fire({
                icon: "error",
                title: "Pembelian tidak boleh melewati stock!",
                confirmButtonText: "Oke",
                customClass: {
                    confirmButton: "btn btn-danger",
                },
                buttonsStyling: false,
            });
        }
    };

    const handleDecreaseAmount = () => {
        if (amount - 1 >= 1) {
            setAmount(amount - 1);
        }
    };

    console.log("ISI PRODUCT IMAGES", product.images);

    return (
        <GuestLayout>
            <Head title={product.name} />
            <main className="main__content_wrapper">
                <section className="product__details--section section--padding">
                    <div className="container">
                        <div className="row row-cols-lg-2 row-cols-md-2">
                            <div className="col">
                                <div className="product__details--media">
                                    <ImageGallery images={product.images} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="product__details--info">
                                    <form action="#">
                                        <p
                                            className="product__details--info__title mb-15"
                                            style={{ fontSize: "3.5rem" }}
                                        >
                                            {product.name}
                                        </p>
                                        <div className="product__details--info__price mb-12">
                                            <span className="current__price">
                                                Rp{" "}
                                                {product.price.toLocaleString()}
                                            </span>
                                        </div>

                                        <div className="product__variant--list mb-15">
                                            <div className="product__details--info__meta">
                                                <p className="product__details--info__meta--list">
                                                    <strong>Kategori:</strong>{" "}
                                                    <span>
                                                        {
                                                            product.category
                                                                .display_name
                                                        }
                                                    </span>{" "}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="product__variant--list mb-15">
                                            <div className="product__details--info__meta">
                                                <p className="product__details--info__meta--list">
                                                    <strong>Stok :</strong>{" "}
                                                    <span>{product.stock}</span>{" "}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="product__variant--list mb-15">
                                            <div className="product__details--info__meta">
                                                <p className="product__details--info__meta--list">
                                                    <strong>Berat :</strong>{" "}
                                                    <span>
                                                        {product.unit_weight} Kg
                                                    </span>{" "}
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",

                                                maxWidth: "37%",
                                            }}
                                        >
                                            <div>
                                                <FacebookShareButton
                                                    url={shareUrl}
                                                    title={product.name}
                                                >
                                                    <FacebookIcon
                                                        size={32}
                                                        round
                                                    />
                                                </FacebookShareButton>
                                            </div>

                                            <div>
                                                <TwitterShareButton
                                                    url={shareUrl}
                                                    title={product.name}
                                                >
                                                    <XIcon size={32} round />
                                                </TwitterShareButton>
                                            </div>

                                            <div>
                                                <TelegramShareButton
                                                    url={shareUrl}
                                                    title={product.name}
                                                >
                                                    <TelegramIcon
                                                        size={32}
                                                        round
                                                    />
                                                </TelegramShareButton>
                                            </div>

                                            <div>
                                                <WhatsappShareButton
                                                    url={shareUrl}
                                                    separator=":: "
                                                    title={product.name}
                                                >
                                                    <WhatsappIcon
                                                        size={32}
                                                        round
                                                    />
                                                </WhatsappShareButton>
                                            </div>

                                            <div>
                                                <EmailShareButton
                                                    url={shareUrl}
                                                    subject={product.name}
                                                    body="body"
                                                >
                                                    <EmailIcon
                                                        size={32}
                                                        round
                                                    />
                                                </EmailShareButton>
                                            </div>

                                            <div>
                                                <LineShareButton
                                                    url={shareUrl}
                                                    title={product.name}
                                                >
                                                    <LineIcon size={32} round />
                                                </LineShareButton>
                                            </div>
                                        </div>

                                        {product.stock <= 0 ? (
                                            <div>
                                                <h3
                                                    style={{
                                                        margin: "5rem 0",
                                                        fontSize: "3rem",
                                                        color: "red",
                                                    }}
                                                >
                                                    STOK HABIS!
                                                </h3>
                                            </div>
                                        ) : (
                                            <div className="product__variant mt-8">
                                                <div className="product__variant--list quantity d-flex align-items-center mb-20">
                                                    <div className="quantity__box">
                                                        <button
                                                            type="button"
                                                            className="quantity__value quickview__value--quantity decrease"
                                                            aria-label="quantity value"
                                                            value="Decrease Value"
                                                            onClick={() =>
                                                                handleDecreaseAmount()
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <label>
                                                            <input
                                                                type="number"
                                                                className="quantity__number quickview__value--number"
                                                                value={amount}
                                                                min={1}
                                                            />
                                                        </label>
                                                        <button
                                                            type="button"
                                                            className="quantity__value quickview__value--quantity increase"
                                                            aria-label="quantity value"
                                                            value="Increase Value"
                                                            onClick={() =>
                                                                handleIncreaseAmount()
                                                            }
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        className="primary__btn quickview__cart--btn"
                                                        type="button"
                                                        onClick={() =>
                                                            handleAddProductToCart(
                                                                product.id,
                                                                false
                                                            )
                                                        }
                                                    >
                                                        {productCart
                                                            ? "Perbarui Keranjang"
                                                            : "Tambah Keranjang"}
                                                    </button>
                                                </div>
                                                <div className="product__variant--list mb-15">
                                                    <button
                                                        className="variant__buy--now__btn primary__btn"
                                                        type="button"
                                                        onClick={() =>
                                                            handleAddProductToCart(
                                                                product.id,
                                                                true
                                                            )
                                                        }
                                                    >
                                                        Beli Sekarang!
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="product__details--tab__section section--padding">
                    <div className="container">
                        <div className="row row-cols-1">
                            <div className="col">
                                <ul className="product__tab--one product__details--tab d-flex">
                                    <li
                                        className="product__details--tab__list active"
                                        data-toggle="tab"
                                        data-target="#description"
                                    >
                                        Deskripsi Produk
                                    </li>
                                </ul>
                                <div className="product__details--tab__inner border-radius-10">
                                    <div className="tab_content">
                                        <div
                                            id="description"
                                            className="tab_pane active show"
                                        >
                                            <div className="product__tab--content">
                                                <div className="product__tab--content__step mb-30">
                                                    <p className="product__tab--content__desc">
                                                        {product.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </GuestLayout>
    );
}
