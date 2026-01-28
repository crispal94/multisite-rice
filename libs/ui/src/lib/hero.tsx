'use client';

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-surface-light dark:bg-surface-dark shadow-soft dark:shadow-none overflow-hidden border border-stone-100 dark:border-stone-800">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px]">
          <div className="flex flex-1 flex-col justify-center p-8 sm:p-12 lg:p-16 gap-6 z-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase">
              <span className="material-symbols-outlined text-sm">spa</span>
              100% Organic Certified
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-main dark:text-white leading-[1.1]">
              The Essence of <br />
              <span className="text-primary italic">Pure Nature</span>
            </h1>
            <p className="max-w-md text-lg text-text-muted dark:text-stone-400 leading-relaxed font-light">
              Experience the finest heirloom rice varieties, cultivated with
              traditional wisdom and modern sustainability. From farm to your
              table.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-base font-medium text-white shadow-lg shadow-primary/20 hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-stone-900">
                Shop Varieties
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-xl bg-secondary/30 dark:bg-stone-800 px-8 text-base font-medium text-text-main dark:text-white hover:bg-secondary/50 dark:hover:bg-stone-700 transition-all duration-200">
                Our Origins
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 pt-6 border-t border-stone-100 dark:border-stone-700/50">
              <div>
                <p className="text-2xl font-display font-bold text-text-main dark:text-white">
                  15+
                </p>
                <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Heirloom Varieties
                </p>
              </div>
              <div className="h-8 w-px bg-stone-200 dark:bg-stone-700"></div>
              <div>
                <p className="text-2xl font-display font-bold text-text-main dark:text-white">
                  100%
                </p>
                <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                  Organic Sourced
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full lg:h-full lg:w-1/2 bg-stone-200 dark:bg-stone-800">
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
              data-alt="Close up of ripe golden rice stalks in a field at sunset"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA9tigzlP371Jz2loG21BiqDooEQKVkajkVZs3UHlNblhPWe29JavTyDCKdJ3w6zsEWeZr1Qym_bxBd2baZIouc81dvoTsFeE1mvxqCq9n-IBZZ4z6zyNfMcvAVzlAEjM_H0lLuPTT3dvLUnaDJxY0YflJwzUHHoXPnZDD9Ftg9fDHF6MwjB8yLAMu4k8zuiIcW4MMcFIBPFtlWo0z3CMvEvv08oF4K3KMUZuXhOfHmVtQXSdmERlb8yjc4BagYjM55W7MV7SH7Ss_L')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
