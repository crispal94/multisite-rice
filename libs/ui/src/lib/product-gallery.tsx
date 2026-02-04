'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: {
    src: string;
    alt: string;
    badge?: string;
  }[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 sticky top-24">
      <div className="relative w-full overflow-hidden rounded-2xl bg-surface-light dark:bg-stone-800 aspect-[4/5] group shadow-sm border border-secondary/30">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          fill
          className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {images[selectedImage].badge && (
          <div className="absolute top-6 left-6">
            <span className="bg-accent text-white text-xs font-serif font-bold px-4 py-2 rounded-full shadow-sm">
              {images[selectedImage].badge}
            </span>
          </div>
        )}
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-24 w-24 flex-none overflow-hidden rounded-xl shadow-sm transition-all duration-200 border-2 ${
              selectedImage === index
                ? 'border-primary ring-0'
                : 'border-transparent bg-surface-light dark:bg-stone-800 hover:opacity-75'
            }`}
          >
            <Image
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
