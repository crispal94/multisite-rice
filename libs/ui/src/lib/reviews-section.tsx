'use client';

export const ReviewsSection = () => {
  return (
    <section
      className="mt-20 sm:mt-28 border-t border-stone-200 dark:border-stone-800 pt-16"
      id="reviews"
    >
      <h2 className="text-3xl font-serif font-bold text-text-main dark:text-white mb-10">
        De Nuestra Comunidad
      </h2>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
        {/* Rating Summary */}
        <div className="lg:col-span-4">
          <div className="flex flex-col gap-4 bg-surface-light dark:bg-stone-800/50 p-8 rounded-2xl border border-stone-100 dark:border-stone-700 shadow-sm">
            <div className="flex items-end gap-3">
              <p className="text-6xl font-serif font-bold text-text-main dark:text-white">
                4.8
              </p>
              <div className="mb-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`material-symbols-outlined text-accent text-[24px] ${star < 5 ? 'fill-current' : ''}`}
                    >
                      {star === 5 ? 'star_half' : 'star'}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-text-muted dark:text-stone-400 mt-1">
                  Basado en 120 catas verificadas
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              {[
                { star: 5, pct: '80%' },
                { star: 4, pct: '15%' },
                { star: 3, pct: '3%' },
                { star: 2, pct: '1%' },
                { star: 1, pct: '1%' },
              ].map((item) => (
                <div key={item.star} className="flex items-center gap-3">
                  <p className="text-sm font-medium text-text-muted dark:text-stone-300 w-3">
                    {item.star}
                  </p>
                  <div className="flex-1 h-2 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: item.pct }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-xl border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-800 py-3 text-sm font-bold text-text-main dark:text-white hover:bg-surface-light dark:hover:bg-stone-700 transition-colors">
              Escribir una reseña
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="mt-12 lg:mt-0 lg:col-span-8 space-y-10">
          {/* Review 1 */}
          <div className="border-b border-stone-200 dark:border-stone-800 pb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-serif">
                  MK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main dark:text-white">
                    Michael K.
                  </h4>
                  <div className="flex items-center text-accent text-[14px]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined fill-current"
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted dark:text-stone-400">
                21 de Octubre, 2023
              </p>
            </div>
            <h5 className="text-lg font-serif font-bold text-text-main dark:text-white">
              El aroma es increíble
            </h5>
            <p className="mt-2 text-text-muted dark:text-stone-300 leading-relaxed">
              Abrí la bolsa y toda la cocina olió a flores. Se cocina con granos
              perfectamente definidos cada vez, nunca pastoso. Definitivamente
              vale la pena el precio premium para ocasiones especiales.
            </p>
          </div>

          {/* Review 2 */}
          <div className="border-b border-stone-200 dark:border-stone-800 pb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-serif">
                  AL
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main dark:text-white">
                    Sarah L.
                  </h4>
                  <div className="flex items-center text-accent text-[14px]">
                    {[1, 2, 3, 4].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined fill-current"
                      >
                        star
                      </span>
                    ))}
                    <span className="material-symbols-outlined text-stone-300">
                      star
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted dark:text-stone-400">
                14 de Septiembre, 2023
              </p>
            </div>
            <h5 className="text-lg font-serif font-bold text-text-main dark:text-white">
              Excelente longitud de grano
            </h5>
            <p className="mt-2 text-text-muted dark:text-stone-300 leading-relaxed">
              La elongación al cocinar es impresionante. Mi biryani quedó de
              calidad restaurante. El empaque también era muy resistente, aunque
              desearía que viniera en un tamaño de muestra más pequeño de 500g.
            </p>
          </div>

          {/* Review 3 */}
          <div className="pb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-serif">
                  JD
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main dark:text-white">
                    John D.
                  </h4>
                  <div className="flex items-center text-accent text-[14px]">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined fill-current"
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-text-muted dark:text-stone-400">
                30 de Agosto, 2023
              </p>
            </div>
            <h5 className="text-lg font-serif font-bold text-text-main dark:text-white">
              Mi arroz básico ahora
            </h5>
            <p className="mt-2 text-text-muted dark:text-stone-300 leading-relaxed">
              Cambiamos de las marcas del supermercado a esto y realmente puedes
              notar la diferencia. La textura es ligera y esponjosa. ¡Altamente
              recomiendo comprar la bolsa de 5kg!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
