'use client';

import { ProductCard } from './product-card';
import { products } from './data/mock-products';

export const FeaturedProducts = () => {
  // Select first 4 products to feature
  const featuredItems = products.slice(0, 4);

  return (
    <section className="px-4 py-12 mx-auto my-8 max-w-7xl bg-white rounded-3xl border shadow-sm sm:px-6 lg:px-8 dark:bg-surface-dark border-stone-100 dark:border-stone-800">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-bold font-display text-text-main dark:text-white">
            Selecciones Premium
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            Nuestras cosechas más codiciadas de Ecuador.
          </p>
        </div>
        <a
          className="flex gap-1 items-center text-sm font-semibold text-primary hover:text-primary-hover group"
          href="/mpp"
        >
          Ver Todos los Productos
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredItems.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
            imageUrl={product.imageUrl}
            badges={product.badges}
            rating={product.rating}
            reviewCount={product.reviewCount}
            country={product.country}
            variant="simple"
            showActions={false}
            href={`/spp/${product.slug}`}
          />
        ))}
      </div>
    </section>
  );
};
