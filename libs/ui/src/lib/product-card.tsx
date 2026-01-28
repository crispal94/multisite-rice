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
    <div className="group relative flex flex-col bg-surface-light rounded-xl shadow-sm border border-secondary/50 overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Badges */}
      {badges.length > 0 && (
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1">
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
                className={`px-2 py-1 ${bgClass} ${textClass} text-[10px] font-bold uppercase tracking-wider rounded-md`}
              >
                {badge.text}
              </span>
            );
          })}
        </div>
      )}

      {/* Favorite Button (Catalog only) */}
      {showActions && (
        <button className="absolute top-3 right-3 z-10 p-2 bg-background-light/90 backdrop-blur rounded-full text-text-muted hover:text-red-500 hover:bg-white transition-all shadow-sm opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100">
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
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Add to Cart Overlay (Catalog only) */}
        {showActions && (
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hidden lg:block">
            <button
              onClick={(e) => e.preventDefault()} // Prevent navigation if clicking add to cart
              className="w-full h-11 bg-primary hover:bg-primary-hover text-background-light font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                shopping_basket
              </span>
              Agregar al Carrito
            </button>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2 flex items-center justify-between">
          {/* Rating */}
          {rating ? (
            <div className="flex items-center gap-1">
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

        <h3 className="text-lg font-bold text-text-main mb-1 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-text-muted mb-4 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-xs text-text-muted line-through">
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
            className="lg:hidden h-10 w-10 bg-secondary/30 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
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
