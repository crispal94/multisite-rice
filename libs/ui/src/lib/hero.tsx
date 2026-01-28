'use client';

export const Hero = () => {
  return (
    <section className="overflow-hidden relative px-4 py-8 w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden mx-auto max-w-7xl rounded-3xl border bg-surface-light dark:bg-surface-dark shadow-soft dark:shadow-none border-stone-100 dark:border-stone-800">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
          <div className="flex z-10 flex-col flex-1 gap-6 justify-center p-8 sm:p-12 lg:p-16">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase">
              <span className="text-sm material-symbols-outlined">spa</span>
              100% Certificado Orgánico
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-main dark:text-white leading-[1.1]">
              La Esencia de la <br />
              <span className="italic text-primary">Naturaleza Pura</span>
            </h1>
            <p className="max-w-md text-lg font-light leading-relaxed text-text-muted dark:text-stone-400">
              Experimenta las mejores variedades de arroz ancestral, cultivadas
              con sabiduría tradicional y sostenibilidad moderna. De la granja a
              tu mesa.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-medium text-white shadow-lg shadow-primary/20 hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-stone-900">
                Ver Variedades
              </button>
              <button className="inline-flex justify-center items-center px-8 h-12 text-base font-medium rounded-xl transition-all duration-200 bg-secondary/30 dark:bg-stone-800 text-text-main dark:text-white hover:bg-secondary/50 dark:hover:bg-stone-700">
                Nuestros Orígenes
              </button>
            </div>
            <div className="flex gap-6 items-center pt-6 mt-8 border-t border-stone-100 dark:border-stone-700/50">
              <div>
                <p className="text-2xl font-bold font-display text-text-main dark:text-white">
                  15+
                </p>
                <p className="text-xs font-medium tracking-wider uppercase text-text-muted">
                  Variedades Ancestrales
                </p>
              </div>
              <div className="w-px h-8 bg-stone-200 dark:bg-stone-700"></div>
              <div>
                <p className="text-2xl font-bold font-display text-text-main dark:text-white">
                  100%
                </p>
                <p className="text-xs font-medium tracking-wider uppercase text-text-muted">
                  Origen Orgánico
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-64 lg:h-full lg:w-1/2 bg-stone-200 dark:bg-stone-800">
            <div
              className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover"
              data-alt="Close up of ripe golden rice stalks in a field at sunset"
              style={{
                backgroundImage: "url('/images/hero-rice-sunset.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t to-transparent from-stone-900/20 lg:bg-gradient-to-l lg:from-transparent lg:to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
