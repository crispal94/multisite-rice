import {
  StickyHeader,
  Footer,
  ProductGallery,
  ProductDetails,
  ReviewsSection,
  ProductCard,
} from '@multisite-rice/ui';

export default function ProductPage() {
  const safeImages = [
    {
      src: '/images/royal_hermitage_basmati_rice.png',
      alt: 'Basmati',
      badge: 'Cosecha 2023',
    },
    { src: '/images/black_rice.png', alt: 'Textura' }, // Will fail if not exists, but conforming to request code structure.
    { src: '/images/basmati_rice.png', alt: 'Cocinando' },
    { src: '/images/basmati_rice.png', alt: 'Empaque' },
  ];

  const relatedProducts = [
    {
      badges: [
        { text: 'Nueva Cosecha', color: 'text-main', textColor: 'text-white' },
      ], // Matching style manually or using updated ProductCard types
      title: 'Arroz Jazmín Real',
      description: 'Nueva Cosecha',
      price: '$18.00',
      imageUrl: '/images/organic_white_jasmine_rice.png',
      rating: 0,
      country: 'Tailandia',
    },
    {
      badges: [
        {
          text: 'Variedad Herencia',
          color: 'text-main',
          textColor: 'text-white',
        },
      ],
      title: 'Arroz Negro Prohibido',
      description: 'Variedad Herencia',
      price: '$22.00',
      imageUrl: '/images/forbidden_black_rice.png',
      rating: 0,
      country: 'China',
    },
    {
      badges: [
        { text: 'Grano Corto', color: 'text-main', textColor: 'text-white' },
      ],
      title: 'Arroz para Sushi Premium',
      description: 'Grano Corto',
      price: '$16.50',
      imageUrl: '/images/basmati_rice.png',
      rating: 0,
      country: 'Japón',
    },
    {
      badges: [
        { text: 'Tallado a Mano', color: 'text-main', textColor: 'text-white' },
      ],
      title: 'Paleta de Arroz de Bambú',
      description: 'Tallada a Mano',
      price: '$12.00',
      imageUrl: '/images/brown_rice.png', // Placeholder for non-rice item
      rating: 0,
      country: 'Accesorio',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen antialiased transition-colors duration-200 bg-background-light text-text-main">
      <StickyHeader />

      <main className="flex-1 px-4 py-10 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex overflow-x-auto gap-2 items-center mb-8 font-serif text-sm italic whitespace-nowrap text-text-muted no-scrollbar">
          <a className="transition-colors hover:text-primary" href="/">
            Inicio
          </a>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <a className="transition-colors hover:text-primary" href="/mpp">
            Despensa
          </a>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <a className="transition-colors hover:text-primary" href="/mpp">
            Arroz y Granos
          </a>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="not-italic font-medium text-text-main dark:text-white">
            Reserva Real Basmati del Himalaya
          </span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
          {/* Gallery */}
          <ProductGallery images={safeImages} />

          {/* Details */}
          <ProductDetails
            title="Reserva Real Basmati del Himalaya"
            subtitle="Añejado por 24 meses"
            price="$24.00"
            rating={4.8}
            reviewCount={120}
            description="Procedente directamente de los valles alimentados por nieve de Uttarakhand, nuestro Basmati de Reserva es añejado tradicionalmente para reducir el contenido de humedad, resultando en una textura excepcionalmente esponjosa y granos que se alargan al doble de su tamaño al cocinarse."
          />
        </div>

        {/* Reviews */}
        <ReviewsSection />

        {/* Related Products */}
        <section
          aria-labelledby="related-heading"
          className="pt-16 mt-20 border-t sm:mt-28 border-stone-200 dark:border-stone-800"
        >
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2
                id="related-heading"
                className="font-serif text-3xl font-bold text-text-main dark:text-white"
              >
                Esenciales de Despensa
              </h2>
              <p className="mt-2 text-text-muted">
                Curados para combinar perfectamente con tus granos.
              </p>
            </div>
            <a
              href="/mpp"
              className="hidden gap-1 items-center text-sm font-bold text-primary hover:text-primary-hover sm:flex"
            >
              Ver catálogo completo
              <span className="text-sm material-symbols-outlined">
                arrow_forward
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedProducts.map((product, index) => (
              <div key={index} className="h-full">
                <ProductCard
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  // @ts-ignore
                  badges={product.badges}
                  variant="simple"
                  showActions={false}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
