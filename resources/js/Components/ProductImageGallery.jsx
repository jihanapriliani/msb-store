import React, { useState } from "react";

const ProductImages = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="product-images">
            <div className="product-display">
                <img
                    src={
                        window.location.origin +
                        "/" +
                        (selectedImage.image ?? "assets/images/default.png")
                    }
                    className="h-[30rem] w-[100%] object-cover rounded-xl"
                    alt="Product Display"
                />
            </div>
            <div className="product-thumbnails flex gap-3 mt-4 ">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={
                            window.location.origin +
                            "/" +
                            (image.image ?? "assets/images/default.png")
                        }
                        alt={`Thumbnail ${index}`}
                        className={
                            selectedImage === image
                                ? "border-2 border-red-500 w-[75px] h-[75px] rounded-xl object-cover"
                                : "w-[75px] h-[75px] rounded-xl object-cover"
                        }
                        onClick={() => handleThumbnailClick(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
