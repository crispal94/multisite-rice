'use client';

export const Certifications = () => {
  return (
    <section className="py-16 bg-surface-light dark:bg-surface-dark border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold text-text-main dark:text-white mb-8">
            Our Certifications & Commitments
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                USDA Organic
              </h3>
              <p className="text-xs text-text-muted">
                Certified free of synthetic pesticides and fertilizers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  diversity_3
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                Fair Trade
              </h3>
              <p className="text-xs text-text-muted">
                Direct partnerships ensuring fair wages for farmers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  cruelty_free
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                Non-GMO Project
              </h3>
              <p className="text-xs text-text-muted">
                Verified non-genetically modified organisms.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  recycling
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                Sustainable Packaging
              </h3>
              <p className="text-xs text-text-muted">
                100% biodegradable and recyclable materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
