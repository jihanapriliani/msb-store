import { Link } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout/Index";
import ProductCard from "@/Components/ProductCard";

export default function LandingPage({ categories, products, user }) {
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
                                                <ProductCard
                                                    product={product}
                                                    index={index}
                                                    user={user}
                                                />
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
