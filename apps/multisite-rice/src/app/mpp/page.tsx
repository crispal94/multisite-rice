import {
  StickyHeader,
  Footer,
  ProductFilters,
  SortControl,
  ProductCard,
  products,
} from '@multisite-rice/ui';

export default function CatalogPage() {
  /* products import handled via top-level import now */

  return (
    <div className="flex flex-col min-h-screen antialiased bg-background-light text-text-main">
      <StickyHeader />

      <div className="flex-1 max-w-[1440px] w-full mx-auto px-4 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex mb-8">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/"
                className="inline-flex items-center text-sm font-medium transition-colors text-text-muted hover:text-primary"
              >
                Inicio
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-1 text-sm material-symbols-outlined text-text-muted/50">
                  chevron_right
                </span>
                <a
                  href="#"
                  className="text-sm font-medium transition-colors ms-1 text-text-muted hover:text-primary md:ms-2"
                >
                  Colecciones
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-1 text-sm material-symbols-outlined text-text-muted/50">
                  chevron_right
                </span>
                <span className="text-sm font-medium ms-1 text-primary md:ms-2">
                  Arroz Especial
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="hidden flex-shrink-0 w-full lg:w-64 lg:block">
            <ProductFilters />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex flex-col gap-4 justify-between md:flex-row md:items-end">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-black tracking-tight md:text-4xl text-text-main">
                    Catálogo de Arroz Especial
                  </h1>
                  <p className="text-lg text-text-muted">
                    Variedades premium, orgánicas y tradicionales seleccionadas
                    para las mejores mesas.
                  </p>
                </div>
                {/* Mobile Filter Button */}
                <button className="flex gap-2 justify-center items-center px-4 py-2 w-full font-medium rounded-lg border shadow-sm lg:hidden md:w-auto bg-surface-light border-secondary text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    filter_list
                  </span>
                  Filtros
                </button>
              </div>

              {/* Sort and Count */}
              <div className="flex flex-col gap-4 justify-between py-4 sm:flex-row sm:items-center border-y border-secondary">
                <p className="text-sm text-text-muted">
                  Mostrando{' '}
                  <span className="font-bold text-primary">
                    {products.length}
                  </span>{' '}
                  de <span className="font-bold text-text-main">42</span>{' '}
                  variedades
                </p>
                <div className="flex gap-3 items-center">
                  <SortControl />
                  <div className="mx-1 w-px h-6 bg-secondary"></div>
                  <div className="flex p-1 rounded-lg bg-secondary/50">
                    <button className="p-1.5 rounded-md bg-surface-light shadow-sm text-primary">
                      <span className="material-symbols-outlined text-[20px] block">
                        grid_view
                      </span>
                    </button>
                    <button className="p-1.5 rounded-md text-text-muted hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px] block">
                        view_list
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <div key={index} className="h-full">
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    badges={product.badges}
                    originalPrice={product.originalPrice}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    country={product.country}
                    showActions={true}
                    variant="catalog"
                    href={`/spp/${product.slug}`}
                  />
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-16">
              <button className="flex gap-2 items-center px-8 py-3 font-semibold rounded-lg shadow-sm transition-colors bg-primary text-surface-light hover:bg-primary-hover group">
                Cargar Más Variedades
                <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">
                  expand_more
                </span>
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
