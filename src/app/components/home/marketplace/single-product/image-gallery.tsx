import React from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({
  images,
  productName,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <div className="pt-7">
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-4">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex gap-4 p-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square w-[234px] h-[178px] rounded-xl overflow-hidden border-4 outline outline-3 outline-white ${
              selectedImage === index ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={img}
              alt={`${productName} ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
