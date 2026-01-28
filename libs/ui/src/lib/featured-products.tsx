'use client';

import { ProductCard } from './product-card';

export const FeaturedProducts = () => {
  const products = [
    {
      tag: 'Origen Himalaya',
      title: 'Basmati Herencia Real',
      description:
        'Envejecido por 2 años para una esponjosidad y aroma perfectos.',
      price: '$14.00',
      unit: '/ 2kg',
      imageUrl: '/images/royal_hermitage_basmati_rice.png',
    },
    {
      tag: 'Thai Hom Mali',
      title: 'Jazmín Blanco Orgánico',
      description: 'Notas florales con una textura suave y sedosa.',
      price: '$12.50',
      unit: '/ 2kg',
      bestseller: true,
      imageUrl: '/images/organic_white_jasmine_rice.png',
    },
    {
      tag: 'Superalimento',
      title: 'Arroz Negro Prohibido',
      description: 'Alto en antioxidantes con un perfil de sabor a nuez.',
      price: '$18.00',
      unit: '/ 1kg',
      imageUrl: '/images/forbidden_black_rice.png',
    },
    {
      tag: 'Reserva Italiana',
      title: 'Risotto Arborio Clásico',
      description:
        'Perfectamente almidonado para un risotto cremoso y auténtico.',
      price: '$15.50',
      unit: '/ 1kg',
      imageUrl: '/images/classic_arborio_rissotto_rice.png',
    },
  ];

  return (
    <section className="px-4 py-12 mx-auto my-8 max-w-7xl bg-white rounded-3xl border shadow-sm sm:px-6 lg:px-8 dark:bg-surface-dark border-stone-100 dark:border-stone-800">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-2xl font-bold font-display text-text-main dark:text-white">
            Selecciones Premium
          </h2>
          <p className="mt-1 text-sm text-text-muted">
            Nuestras cosechas más codiciadas.
          </p>
        </div>
        <a
          className="flex gap-1 items-center text-sm font-semibold text-primary hover:text-primary-hover group"
          href="#"
        >
          Ver Todos los Productos
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            unit={product.unit}
            imageUrl={product.imageUrl}
            badges={[
              { text: product.tag, color: 'primary' }, // Using custom style to match previous 'tag' look roughly or just generic
              ...(product.bestseller
                ? [{ text: 'Más Vendido', color: 'accent' } as const]
                : []),
            ]}
            variant="simple"
            showActions={false}
          />
        ))}
      </div>
    </section>
  );
};
