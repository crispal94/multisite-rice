'use client';

export const Certifications = () => {
  return (
    <section className="py-16 bg-surface-light dark:bg-surface-dark border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-bold text-text-main dark:text-white mb-8">
            Nuestras Certificaciones y Compromisos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                Orgánico USDA
              </h3>
              <p className="text-xs text-text-muted">
                Certificado libre de pesticidas y fertilizantes sintéticos.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  diversity_3
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                Comercio Justo
              </h3>
              <p className="text-xs text-text-muted">
                Asociaciones directas que garantizan salarios justos para los
                agricultores.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  cruelty_free
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                Proyecto Sin OGM
              </h3>
              <p className="text-xs text-text-muted">
                Verificado organismos no modificados genéticamente.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="size-16 rounded-full bg-secondary/20 dark:bg-stone-800 flex items-center justify-center text-primary mb-1">
                <span className="material-symbols-outlined text-3xl">
                  recycling
                </span>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">
                Empaque Sostenible
              </h3>
              <p className="text-xs text-text-muted">
                Materiales 100% biodegradables y reciclables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
