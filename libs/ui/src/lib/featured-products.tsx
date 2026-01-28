'use client';

import Image from 'next/image';

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
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.title}
            className="flex flex-col p-4 rounded-2xl border border-transparent transition-all group bg-background-light dark:bg-stone-800/50 hover:shadow-soft hover:border-stone-200 dark:hover:border-stone-700"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 mb-4">
              <div className="absolute inset-0">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {product.bestseller && (
                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-accent text-white text-[10px] font-bold uppercase tracking-wider">
                  Más Vendido
                </span>
              )}
              <button className="absolute top-3 right-3 p-2 rounded-full shadow-sm opacity-0 backdrop-blur-sm transition-opacity bg-white/90 text-stone-600 group-hover:opacity-100 hover:text-red-500">
                <span className="material-symbols-outlined text-[20px]">
                  favorite
                </span>
              </button>
            </div>
            <div className="flex flex-col flex-grow gap-2">
              <div className="text-xs font-bold tracking-wider uppercase text-primary">
                {product.tag}
              </div>
              <h3 className="text-lg font-semibold leading-tight font-display text-text-main dark:text-white">
                {product.title}
              </h3>
              <p className="text-sm text-text-muted line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center pt-3 mt-auto">
                <span className="text-lg font-bold text-text-main dark:text-white">
                  {product.price}{' '}
                  <span className="text-xs font-normal text-stone-500">
                    {product.unit}
                  </span>
                </span>
                <button className="flex justify-center items-center rounded-full transition-colors size-9 bg-stone-100 dark:bg-stone-700 text-text-main dark:text-white hover:bg-primary hover:text-white">
                  <span className="material-symbols-outlined text-[20px]">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
