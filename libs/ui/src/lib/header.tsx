'use client';

export const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 dark:border-stone-800 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-8">
          <div className="flex shrink-0 items-center gap-2 cursor-pointer">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
              <span className="material-symbols-outlined text-2xl">
                agriculture
              </span>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-primary dark:text-white hidden sm:block">
              Oryza
            </span>
          </div>
          <div className="hidden md:flex max-w-md w-full">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-stone-400 group-focus-within:text-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </div>
              <input
                className="block w-full rounded-xl border-stone-200 dark:border-stone-700 bg-surface-light dark:bg-surface-dark py-2.5 pl-10 pr-4 text-sm text-text-main dark:text-white placeholder-stone-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm outline-none"
                placeholder="Buscar variedades..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-muted dark:text-stone-300">
              <a className="hover:text-primary transition-colors" href="#">
                Variedades
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Nuestros Orígenes
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Recetas
              </a>
              <a className="hover:text-primary transition-colors" href="#">
                Venta al por Mayor
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center size-10 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 transition-colors md:hidden">
                <span className="material-symbols-outlined text-[24px]">
                  search
                </span>
              </button>
              <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 transition-colors group">
                <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">
                  shopping_basket
                </span>
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </button>
              <button className="flex items-center justify-center size-10 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 transition-colors group">
                <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">
                  person
                </span>
              </button>
              <button className="flex items-center justify-center size-10 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 transition-colors lg:hidden">
                <span className="material-symbols-outlined text-[24px]">
                  menu
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
