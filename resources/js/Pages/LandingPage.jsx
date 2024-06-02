import { Head, Link } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import ProductCard from "@/Components/ProductCard";

import { Carousel } from "flowbite-react";

export default function LandingPage({ categories, products, user }) {
    return (
        <GuestLayout>
            <Head title="Beranda" />

            <main className="main__content_wrapper">
                {/* START SECTION 1 */}
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-[50vh] container">
                    <Carousel>
                        <img
                            src="/assets/images/banner-1.png"
                            className="object-fit object-center"
                            alt="..."
                        />
                        <img
                            src="/assets/images/banner-2.png"
                            className="object-fit object-center"
                            alt="..."
                        />
                        <img
                            src="/assets/images/banner-1.png"
                            className="object-fit object-center"
                            alt="..."
                        />
                        <img
                            src="/assets/images/banner-2.png"
                            className="object-fit object-center"
                            alt="..."
                        />
                        <img
                            src="/assets/images/banner-1.png"
                            className="object-fit object-center"
                            alt="..."
                        />
                    </Carousel>
                </div>
                {/* END SECTION 1 */}

                {/* START SECTION 2 */}
                <section className="categories__section section--padding">
                    <div className="container">
                        <div className="section__heading border-bottom mb-30">
                            <h2
                                className="section__heading--maintitle"
                                style={{ fontSize: "2rem", fontWeight: "bold" }}
                            >
                                Berdasarkan{" "}
                                <span style={{ fontWeight: "500" }}>
                                    Kategori
                                </span>
                            </h2>
                        </div>
                        <div className="categories__inner--style3 d-flex">
                            {categories.map((category, index) => (
                                <div
                                    className="categories__card--style3 text-center"
                                    key={index}
                                >
                                    <Link
                                        className="categories__card--link"
                                        href={route("shop", {
                                            categories: category.id,
                                        })}
                                    >
                                        <div className="categories__thumbnail">
                                            <img
                                                className="categories__thumbnail--img w-32 h-32"
                                                src={
                                                    window.location.origin +
                                                    "/" +
                                                    (category.image ??
                                                        "assets/images/default.png")
                                                }
                                                alt="categories-img"
                                            />
                                        </div>
                                        <div className="categories__content style3">
                                            <h2 className="categories__content--title">
                                                {category.display_name}
                                            </h2>
                                            {/* <span className="categories__content--subtitle">
                                                Tyres Sensor
                                            </span> */}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* END SECTION 2 */}

                {/* START SECTION 3 */}
                <section className="product__section section--padding  pt-0">
                    <div className="container">
                        <div className="section__heading section__heading--flex border-bottom d-flex justify-content-between mb-30">
                            <h2
                                className="section__heading--maintitle"
                                style={{ fontSize: "2rem", fontWeight: "bold" }}
                            >
                                Produk{" "}
                                <span style={{ fontWeight: "500" }}>
                                    Teratas
                                </span>
                            </h2>
                        </div>

                        <div className="product__section--inner">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    id="recent"
                                    className="tab-pane fade show active"
                                    role="tabpanel"
                                >
                                    <div className="product__wrapper">
                                        <div className="row mb--n30">
                                            {products.map((product, index) => (
                                                <div
                                                    key={index}
                                                    className="col-lg-3 col-md-4 col-sm-6 col-6 custom-col mb-30"
                                                >
                                                    <ProductCard
                                                        product={product}
                                                        user={user}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* END SECTION 3 */}

                {/* START SECTION 4 */}

                {/* END SECTION 4 */}

                {/* START SECTION 5 */}

                {/* END SECTION 5 */}
            </main>
        </GuestLayout>
    );
}
