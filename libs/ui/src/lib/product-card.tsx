'use client';

import Link from 'next/link';
import Image from 'next/image';

interface Badge {
  text: string;
  color: 'primary' | 'secondary' | 'accent' | 'red' | 'text-main';
  textColor?: string;
}

export interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  badges?: Badge[];
  unit?: string;
  rating?: number;
  reviewCount?: number;
  country?: string;
  showActions?: boolean;
  variant?: 'simple' | 'catalog';
  href?: string;
}

export const ProductCard = ({
  title,
  description,
  price,
  originalPrice,
  imageUrl,
  badges = [],
  unit,
  rating,
  reviewCount,
  country,
  showActions = false,
  variant = 'simple',
  href,
}: ProductCardProps) => {
  const CardContent = (
    <div className="flex overflow-hidden relative flex-col h-full rounded-xl border shadow-sm transition-all duration-300 group bg-surface-light border-secondary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      {/* Badges */}
      {badges.length > 0 && (
        <div className="flex absolute top-3 left-3 z-10 flex-wrap gap-1">
          {badges.map((badge, index) => {
            // Map color prop to Tailwind classes
            let bgClass = 'bg-primary';
            let textClass = 'text-background-light';

            if (badge.color === 'secondary') {
              bgClass = 'bg-secondary';
              textClass = 'text-text-main';
            } else if (badge.color === 'accent') {
              bgClass = 'bg-accent';
              textClass = 'text-white';
            } else if (badge.color === 'red') {
              bgClass = 'bg-red-600';
              textClass = 'text-white';
            } else if (badge.color === 'text-main') {
              bgClass = 'bg-text-main';
              textClass = 'text-white';
            }

            if (badge.textColor) textClass = badge.textColor;

            return (
              <span
                key={index}
                className={`px-2 py-1 font-bold tracking-wider uppercase rounded-md ${bgClass} ${textClass} text-[10px]`}
              >
                {badge.text}
              </span>
            );
          })}
        </div>
      )}

      {/* Favorite Button (Catalog only) */}
      {showActions && (
        <button className="absolute top-3 right-3 z-10 p-2 rounded-full shadow-sm opacity-0 backdrop-blur transition-all transform scale-90 bg-background-light/90 text-text-muted hover:text-red-500 hover:bg-white group-hover:opacity-100 group-hover:scale-100">
          <span className="material-symbols-outlined text-[20px] block">
            favorite
          </span>
        </button>
      )}

      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Add to Cart Overlay (Catalog only) */}
        {showActions && (
          <div className="hidden absolute inset-x-0 bottom-0 p-4 transition-transform duration-300 translate-y-full group-hover:translate-y-0 lg:block">
            <button
              onClick={(e) => e.preventDefault()} // Prevent navigation if clicking add to cart
              className="flex gap-2 justify-center items-center w-full h-11 font-semibold rounded-lg shadow-lg transition-colors bg-primary hover:bg-primary-hover text-background-light"
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_basket
              </span>
              Agregar al Carrito
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        <div className="flex justify-between items-center mb-2">
          {/* Rating */}
          {rating ? (
            <div className="flex gap-1 items-center">
              <span
                className="material-symbols-outlined text-accent text-[16px] fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-xs font-medium text-text-muted">
                {rating} {reviewCount ? `(${reviewCount})` : ''}
              </span>
            </div>
          ) : (
            <div />
          )}

          {country && (
            <span className="text-[10px] text-text-muted border border-secondary px-1.5 py-0.5 rounded">
              {country}
            </span>
          )}
        </div>

        <h3 className="mb-1 text-lg font-bold transition-colors text-text-main line-clamp-1 group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-4 text-sm text-text-muted line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-xs line-through text-text-muted">
                {originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-primary">
              {price}{' '}
              {unit && (
                <span className="text-sm font-normal text-text-muted">
                  {unit}
                </span>
              )}
            </span>
          </div>

          {/* Mobile/Small Add Button */}
          <button
            onClick={(e) => e.preventDefault()}
            className="flex justify-center items-center w-10 h-10 rounded-lg transition-colors lg:hidden bg-secondary/30 text-primary hover:bg-primary hover:text-white"
          >
            <span className="material-symbols-outlined text-[20px]">
              {showActions ? 'add' : 'arrow_forward'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
