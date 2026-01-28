import { notFound } from 'next/navigation';
import {
  StickyHeader,
  Footer,
  ProductGallery,
  ProductDetails,
  ReviewsSection,
  ProductCard,
  products,
} from '@multisite-rice/ui';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Fallback images if not defined in mock data
  const galleryImages = product.images || [
    { src: product.imageUrl, alt: product.title },
  ];

  // Related products: Exclude current, take 4
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

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
            {product.title}
          </span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
          {/* Gallery */}
          <ProductGallery images={galleryImages} />

          {/* Details */}
          <ProductDetails
            title={product.title}
            subtitle={product.subtitle || 'Colección Premium'}
            price={product.price}
            rating={product.rating}
            reviewCount={product.reviewCount}
            description={product.longDescription || product.description}
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
            {related.map((relatedProduct, index) => (
              <div key={index} className="h-full">
                <ProductCard
                  title={relatedProduct.title}
                  description={relatedProduct.description}
                  price={relatedProduct.price}
                  imageUrl={relatedProduct.imageUrl}
                  badges={relatedProduct.badges}
                  variant="simple"
                  showActions={false}
                  href={`/spp/${relatedProduct.slug}`}
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
