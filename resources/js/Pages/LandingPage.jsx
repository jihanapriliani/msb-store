import { Link, Head } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";

export default function LandingPage({ categories, products }) {
    console.log(products);

    console.log("ISI GAMBARNYA", products[0].images[0].image);

    return (
        <GuestLayout>
            <main classNameName="main__content_wrapper">
                {/* START SECTION 1 */}

                {/* END SECTION 1 */}

                {/* START SECTION 2 */}
                <section class="categories__section section--padding">
                    <div class="container">
                        <div class="section__heading border-bottom mb-30">
                            <h2 class="section__heading--maintitle">
                                Shop by <span>Categories</span>
                            </h2>
                        </div>
                        <div class="categories__inner--style3 d-flex">
                            {categories.map((category, index) => (
                                <div
                                    class="categories__card--style3 text-center"
                                    key={index}
                                >
                                    <a
                                        class="categories__card--link"
                                        href="shop.html"
                                    >
                                        <div class="categories__thumbnail">
                                            <img
                                                class="categories__thumbnail--img w-32 h-32"
                                                src={
                                                    window.location.origin +
                                                    "/" +
                                                    category.image
                                                }
                                                alt="categories-img"
                                            />
                                        </div>
                                        <div class="categories__content style3">
                                            <h2 class="categories__content--title">
                                                {category.display_name}
                                            </h2>
                                            <span class="categories__content--subtitle">
                                                Tyres Sensor
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* END SECTION 2 */}

                {/* START SECTION 3 */}
                <section class="product__section section--padding  pt-0">
                    <div class="container">
                        <div class="section__heading section__heading--flex border-bottom d-flex justify-content-between mb-30">
                            <h2 class="section__heading--maintitle">
                                Populer <span>Products</span>
                            </h2>
                        </div>

                        <div class="product__section--inner">
                            <div class="tab-content" id="nav-tabContent">
                                <div
                                    id="recent"
                                    class="tab-pane fade show active"
                                    role="tabpanel"
                                >
                                    <div class="product__wrapper">
                                        <div class="row mb--n30">
                                            {products.map((product, index) => (
                                                <div
                                                    key={index}
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

                                                            <ul class="product__card--action d-flex align-items-center justify-content-center"></ul>
                                                        </div>
                                                        <div class="product__card--content">
                                                            <h3 class="product__card--title">
                                                                <a
                                                                    style={{
                                                                        fontSize:
                                                                            "2rem",
                                                                    }}
                                                                    href="product-details.html"
                                                                >
                                                                    {
                                                                        product.name
                                                                    }{" "}
                                                                </a>
                                                            </h3>
                                                            <div
                                                                class="product__card--price"
                                                                style={{
                                                                    fontSize:
                                                                        "1.2rem",
                                                                }}
                                                            >
                                                                Rp{" "}
                                                                {product.price.toLocaleString()}
                                                            </div>
                                                            <div class="product__card--footer">
                                                                <a
                                                                    className="product__card--btn primary__btn text-white"
                                                                    href="cart.html"
                                                                >
                                                                    Add to cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </article>
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
