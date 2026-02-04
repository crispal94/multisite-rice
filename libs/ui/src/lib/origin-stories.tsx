'use client';

import Image from 'next/image';

export const OriginStories = () => {
  return (
    <section className="py-16 bg-secondary/10 dark:bg-stone-900/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 justify-between mb-10 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold tracking-wider uppercase text-primary">
              Conoce a tu Agricultor
            </span>
            <h2 className="mt-1 text-3xl font-bold font-display text-text-main dark:text-white">
              Historias de Origen
            </h2>
            <p className="mt-2 max-w-lg text-text-muted">
              Cada grano tiene un viaje. Descubre las personas y lugares detrás
              de nuestras colecciones premium.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex justify-center items-center rounded-full border transition-colors size-10 border-stone-300 dark:border-stone-700 text-text-main dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex justify-center items-center rounded-full border transition-colors size-10 border-stone-300 dark:border-stone-700 text-text-main dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-white relative border-b border-secondary/20">
              <div className="absolute inset-0 p-4">
                <Image
                  src="https://proarroz.com.ec/wp-content/uploads/2022/01/costerito-gouurmet.jpg"
                  alt="Costerito Gourmet Bag"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-sm material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="text-xs font-bold uppercase text-stone-500">
                  Guayas, Ecuador
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                El Arte del Añejamiento
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Descubre cómo nuestros 24 meses de reposo natural transforman
                cada grano de Costerito Gourmet.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="/spp/costerito-gourmet"
              >
                Leer Historia{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-white relative border-b border-secondary/20">
              <div className="absolute inset-0 p-4">
                <Image
                  src="https://proarroz.com.ec/wp-content/uploads/2022/01/cpremium.jpg"
                  alt="Costerito Premium Bag"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-sm material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="text-xs font-bold uppercase text-stone-500">
                  Daule, Ecuador
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                Selección Electrónica
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                La tecnología de punta nos permite garantizar un arroz 99% libre
                de granos partidos.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="/spp/costerito-premium"
              >
                Leer Historia{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-white relative border-b border-secondary/20">
              <div className="absolute inset-0 p-4">
                <Image
                  src="https://proarroz.com.ec/wp-content/uploads/2022/01/sr.jpg"
                  alt="Super Reina Rice Bag"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-sm material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="text-xs font-bold uppercase text-stone-500">
                  Los Rios, Ecuador
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                Calidad de Siempre
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Super Reina ha acompañado a las familias ecuatorianas por
                generaciones, brindando rendimiento y sabor.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="/spp/arroz-super-reina"
              >
                Leer Historia{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-white relative border-b border-secondary/20">
              <div className="absolute inset-0 p-4">
                <Image
                  src="https://proarroz.com.ec/wp-content/uploads/2022/01/ag.jpg"
                  alt="Arroz Gavilan Bag"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-sm material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="text-xs font-bold uppercase text-stone-500">
                  Manabí, Ecuador
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                Tradición y Sabor
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Un arroz que rinde homenaje a nuestras raíces y a la cocina
                tradicional de la costa.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="/spp/arroz-gavilan"
              >
                Leer Historia{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
