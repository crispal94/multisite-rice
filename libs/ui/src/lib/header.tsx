'use client';

export const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all border-stone-200 dark:border-stone-800 bg-background-light/90 dark:bg-background-dark/90">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex gap-8 justify-between items-center h-20">
          <div className="flex gap-2 items-center cursor-pointer shrink-0">
            <div className="flex justify-center items-center text-white rounded-xl size-10 bg-primary">
              <span className="text-2xl material-symbols-outlined">
                agriculture
              </span>
            </div>
            <span className="hidden text-2xl font-bold tracking-tight font-display text-primary dark:text-white sm:block">
              Agroindustrias Proarroz Marketplace
            </span>
          </div>
          <div className="hidden w-full max-w-md md:flex">
            <div className="relative w-full group">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 transition-colors pointer-events-none text-stone-400 group-focus-within:text-primary">
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
          <div className="flex gap-6 items-center">
            <nav className="hidden gap-8 items-center text-sm font-medium lg:flex text-text-muted dark:text-stone-300">
              <a className="transition-colors hover:text-primary" href="#">
                Variedades
              </a>
              <a className="transition-colors hover:text-primary" href="#">
                Nuestros Orígenes
              </a>
              <a className="transition-colors hover:text-primary" href="#">
                Recetas
              </a>
              <a className="transition-colors hover:text-primary" href="#">
                Venta al por Mayor
              </a>
            </nav>
            <div className="flex gap-3 items-center">
              <button className="flex justify-center items-center rounded-full transition-colors size-10 hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 md:hidden">
                <span className="material-symbols-outlined text-[24px]">
                  search
                </span>
              </button>
              <button className="flex relative justify-center items-center rounded-full transition-colors size-10 hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 group">
                <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">
                  shopping_basket
                </span>
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                  <span className="inline-flex absolute w-full h-full rounded-full opacity-75 animate-ping bg-accent"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
              </button>
              <button className="flex justify-center items-center rounded-full transition-colors size-10 hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 group">
                <span className="material-symbols-outlined text-[24px] group-hover:text-primary transition-colors">
                  person
                </span>
              </button>
              <button className="flex justify-center items-center rounded-full transition-colors size-10 hover:bg-stone-100 dark:hover:bg-stone-800 text-text-main dark:text-stone-200 lg:hidden">
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
