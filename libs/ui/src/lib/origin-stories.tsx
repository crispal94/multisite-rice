'use client';

export const OriginStories = () => {
  return (
    <section className="py-16 bg-secondary/10 dark:bg-stone-900/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 justify-between mb-10 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold tracking-wider uppercase text-primary">
              Know Your Farmer
            </span>
            <h2 className="mt-1 text-3xl font-bold font-display text-text-main dark:text-white">
              Origin Stories
            </h2>
            <p className="mt-2 max-w-lg text-text-muted">
              Every grain has a journey. Discover the people and places behind
              our premium collections.
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
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Farmer in rice paddy field in Thailand"
                style={{
                  backgroundImage:
                    "url('/images/royal_hermitage_basmati_rice.png')",
                }}
              ></div>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-sm material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="text-xs font-bold uppercase text-stone-500">
                  Chiang Rai, Thailand
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                The Jasmine Harvest
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Meet the cooperative dedicated to preserving the fragrance of
                authentic Hom Mali.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Terraced rice fields in Himalayas"
                style={{
                  backgroundImage:
                    "url('/images/organic_white_jasmine_rice.png')",
                }}
              ></div>
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
                High Altitude Purity
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Why glacial water makes our Basmati rice exceptionally long and
                fluffy.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Hands holding raw rice grains"
                style={{
                  backgroundImage: "url('/images/forbidden_black_rice.png')",
                }}
              ></div>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <div className="flex gap-2 items-center mb-2">
                <span className="text-sm material-symbols-outlined text-primary">
                  location_on
                </span>
                <span className="text-xs font-bold uppercase text-stone-500">
                  Piedmont, Italy
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors font-display text-text-main dark:text-white group-hover:text-primary">
                The Risotto Tradition
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Five generations of family farming in the heart of Italian rice
                country.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
                <span className="ml-1 text-sm material-symbols-outlined">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col h-full rounded-xl transition-all group bg-surface-light dark:bg-surface-dark shadow-card hover:shadow-soft">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Traditional rice drying method"
                style={{
                  backgroundImage:
                    "url('/images/classic_arborio_rissotto_rice.png')",
                }}
              ></div>
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
                Ancient Black Grains
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-text-muted">
                Rediscovering the "Emperor's Rice" and its modern health
                benefits.
              </p>
              <a
                className="inline-flex items-center mt-auto text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
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
