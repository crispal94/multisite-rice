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
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/royal_hermitage_basmati_rice.png"
                  alt="Farmer in rice paddy field in Thailand"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Chiang Rai, Tailandia
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                The Jasmine Harvest
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Conoce la cooperativa dedicada a preservar la fragancia del
                auténtico Hom Mali.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
              >
                Leer Historia{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/organic_white_jasmine_rice.png"
                  alt="Terraced rice fields in Himalayas"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Uttarakhand, India
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                Pureza de Gran Altitud
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Por qué el agua glacial hace que nuestro arroz Basmati sea
                excepcionalmente largo y esponjoso.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
              >
                Leer Historia{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/forbidden_black_rice.png"
                  alt="Hands holding raw rice grains"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Piedamonte, Italia
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                La Tradición del Risotto
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Cinco generaciones de agricultura familiar en el corazón de la
                región arrocera de Italia.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
              >
                Leer Historia{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/classic_arborio_rissotto_rice.png"
                  alt="Traditional rice drying method"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Heilongjiang, China
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                Granos Negros Antiguos
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Redescubriendo el "Arroz del Emperador" y sus beneficios
                modernos para la salud.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
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
