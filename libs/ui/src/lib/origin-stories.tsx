'use client';

export const OriginStories = () => {
  return (
    <section className="py-16 bg-secondary/10 dark:bg-stone-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-primary font-bold uppercase tracking-wider text-sm">
              Know Your Farmer
            </span>
            <h2 className="font-display text-3xl font-bold text-text-main dark:text-white mt-1">
              Origin Stories
            </h2>
            <p className="text-text-muted mt-2 max-w-lg">
              Every grain has a journey. Discover the people and places behind
              our premium collections.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center size-10 rounded-full border border-stone-300 dark:border-stone-700 text-text-main dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full border border-stone-300 dark:border-stone-700 text-text-main dark:text-stone-300 hover:bg-white dark:hover:bg-stone-800 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all h-full flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="Farmer in rice paddy field in Thailand"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3Cg9-wEeq_rwK4gykLpZbT_NcuSyOHubebKzJp4AccLsTgxsyZgvxiy8wdzN2bdspCNBc26Tl8ZHRFoQgBAIs2Armop3liYBeP073505UzhWv0v6eDdLNWKMh1oD9emjiwOdF3KQ39ANAwkjynZMKJKnC74ZrREjcEvt3Gg97FpvXyQt8smN-q06r-nSw8XkxqrgUAKdbRExZclPSxUzF6kbSO9ky5DrwQeC_XRuCt4hQR3tF7OtPm0Otv--HzqN6Om4sxmWORN06')",
                }}
              ></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  location_on
                </span>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  Chiang Rai, Thailand
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                The Jasmine Harvest
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Meet the cooperative dedicated to preserving the fragrance of
                authentic Hom Mali.
              </p>
              <a
                className="mt-auto inline-flex items-center text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
                <span className="material-symbols-outlined text-sm ml-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all h-full flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="Terraced rice fields in Himalayas"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgj6qlDBtfh_HYVgxxeGCaWuQIpw4oKOw7kBs9Vee11i_icRlPZv-mR38i6YY3iXf1BBqOl3v3ik4qfGOJpYZ_vX75EMfoIaok1BAuUdarug4Qqf-njMk2V0nKRceXeQG9Q-6nrM_j7aN2tWPvhobTJII9yf_j0xLrU4P_DpcTKGXkn3YMMvBushEA4joZ6EVS7cBWAVz9iE9ku96mGJZRO9icAAuoK5U8KtASbwXOlZ_ZWypFidGljh5ZE_T4yoZJQGVNIG9TripW')",
                }}
              ></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  location_on
                </span>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  Uttarakhand, India
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                High Altitude Purity
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Why glacial water makes our Basmati rice exceptionally long and
                fluffy.
              </p>
              <a
                className="mt-auto inline-flex items-center text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
                <span className="material-symbols-outlined text-sm ml-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all h-full flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="Hands holding raw rice grains"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLS0pIm8s7_1APSqPU58OxlH0iRxHZrAEMPx73qnJ8b7tefxZ5kjgjzN3ld_Tef_aSJFEOuORyab1W63ZEKilLgy3yabARQZU0zh-t-d9zsjVG45MDf6ktPwtJanKn8EUEJ-csriP3dRT3ODAi6WoSuEVu0ewJOGiSxfeHMGai_pYMyV3rszAVJinQbawnUJRYnAjjt4FJ3BPjVekQ744KKIfV5EZFOBXnu9gwnoQndxiwtNx6nSBwbjg7VYH0sVbEFQU9tUsujn8i')",
                }}
              ></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  location_on
                </span>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  Piedmont, Italy
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                The Risotto Tradition
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Five generations of family farming in the heart of Italian rice
                country.
              </p>
              <a
                className="mt-auto inline-flex items-center text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
                <span className="material-symbols-outlined text-sm ml-1">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          <div className="group relative bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-card hover:shadow-soft transition-all h-full flex flex-col">
            <div className="aspect-[4/3] overflow-hidden bg-stone-200 relative">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="Traditional rice drying method"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAv2d_nWrIricoGSUKCi6yG82I3dYRTUdQzbl_fRAH21YDV2KqlraTT-NsF32B2IGT6WQLZJoI9HOSZNYOjQQmhFIbVmcLJW9iEUP2d4laFm6gzgcJS0ZuDsjdBLCj_3Gc-cOTukLSHzDkJePlqU9iNVWgyvoNC4HzpyrEcolXcG9teo_j2fccknHsJTP8Jw-edyJlNz5oiAkeyJPfFjiUPoFYDq2cNU8rlTtps8KxsZPZTaUEN-eqpFw3N8r-yFNxB2yew-tRl08SL')",
                }}
              ></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  location_on
                </span>
                <span className="text-xs font-bold text-stone-500 uppercase">
                  Heilongjiang, China
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">
                Ancient Black Grains
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                Rediscovering the "Emperor's Rice" and its modern health
                benefits.
              </p>
              <a
                className="mt-auto inline-flex items-center text-sm font-semibold text-primary"
                href="#"
              >
                Read Story{' '}
                <span className="material-symbols-outlined text-sm ml-1">
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
