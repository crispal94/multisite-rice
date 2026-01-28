import {
  StickyHeader,
  Hero,
  FeaturedCategories,
  FeaturedProducts,
  OriginStories,
  Certifications,
  Newsletter,
  Footer,
} from '@multisite-rice/ui';

export default function Index() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-sans text-stone-900 selection:bg-primary/20">
      <StickyHeader />
      <main className="flex flex-col gap-8">
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
        <OriginStories />
        <Certifications />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
