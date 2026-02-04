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
            title: 'Arroz Envejecido',
            subtitle: 'Sabor y Textura Superior',
            imageUrl:
              'https://proarroz.com.ec/wp-content/uploads/2022/01/costerito-gouurmet.jpg',
          },
          {
            title: 'Arroz Premium',
            subtitle: 'Selección Especial',
            imageUrl:
              'https://proarroz.com.ec/wp-content/uploads/2022/01/cpremium.jpg',
          },
          {
            title: 'Arroz Blanco',
            subtitle: 'Calidad de Siempre',
            imageUrl:
              'https://proarroz.com.ec/wp-content/uploads/2022/01/sr.jpg',
          },
          {
            title: 'Arroz Tradicional',
            subtitle: 'El Sabor del Ecuador',
            imageUrl:
              'https://proarroz.com.ec/wp-content/uploads/2022/01/ag.jpg',
          },
        ].map((category) => (
          <a
            key={category.title}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-white border border-stone-200 cursor-pointer hover:shadow-lg transition-all"
            href="/mpp"
          >
            <div className="absolute inset-0 p-4">
              <Image
                src={category.imageUrl}
                alt={category.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="absolute inset-0 pt-20 bg-gradient-to-t to-transparent transition-opacity from-black/80 via-black/20"></div>
            <div className="absolute left-0 bottom-6 p-2 w-full text-center text-white">
              <h3 className="mb-1 text-xl font-bold drop-shadow-md font-display">
                {category.title}
              </h3>
              <p className="text-xs tracking-widest uppercase drop-shadow-md text-stone-200">
                {category.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
