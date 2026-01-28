'use client';

import Image from 'next/image';

export const FeaturedCategories = () => {
  return (
    <section className="px-4 py-12 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold font-display text-text-main dark:text-white">
          Compra por Variedad
        </h2>
        <p className="text-text-muted">
          Granos seleccionados de las mejores cosechas del mundo.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          {
            title: 'Basmati',
            subtitle: 'Aromático y Largo',
            imageUrl: '/images/basmati_rice.png',
          },
          {
            title: 'Jazmín',
            subtitle: 'Fragante y Suave',
            imageUrl: '/images/jasmine_rice.png',
          },
          {
            title: 'Arroz Negro',
            subtitle: 'Sabor a Nuez e Intenso',
            imageUrl: '/images/black_rice.png',
          },
          {
            title: 'Arroz Integral',
            subtitle: 'Grano Entero',
            imageUrl: '/images/brown_rice.png',
          },
        ].map((category) => (
          <a
            key={category.title}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-200 cursor-pointer"
            href="#"
          >
            <div className="absolute inset-0">
              <Image
                src={category.imageUrl}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t to-transparent transition-opacity from-black/60 via-black/20"></div>
            <div className="absolute left-0 bottom-6 w-full text-center text-white">
              <h3 className="mb-1 text-xl font-bold font-display">
                {category.title}
              </h3>
              <p className="text-xs tracking-widest uppercase text-stone-200">
                {category.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
