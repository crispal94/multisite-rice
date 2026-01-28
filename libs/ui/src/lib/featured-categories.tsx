'use client';

export const FeaturedCategories = () => {
  return (
    <section className="px-4 py-12 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="mb-2 text-3xl font-bold font-display text-text-main dark:text-white">
          Shop by Variety
        </h2>
        <p className="text-text-muted">
          Curated grains from the world's finest harvests.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          {
            title: 'Basmati',
            subtitle: 'Aromatic & Long',
            imageUrl: '/images/basmati_rice.png',
          },
          {
            title: 'Jasmine',
            subtitle: 'Fragrant & Soft',
            imageUrl: '/images/jasmine_rice.png',
          },
          {
            title: 'Black Rice',
            subtitle: 'Nutty & Rich',
            imageUrl: '/images/black_rice.png',
          },
          {
            title: 'Brown Rice',
            subtitle: 'Whole Grain',
            imageUrl: '/images/brown_rice.png',
          },
        ].map((category) => (
          <a
            key={category.title}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-stone-200 cursor-pointer"
            href="#"
          >
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${category.imageUrl}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t to-transparent transition-opacity from-black/60 via-black/20"></div>
            <div className="absolute left-0 bottom-6 w-full text-center text-white">
              <h3 className="mb-1 text-xl font-bold font-display">
                {category.title}
              </h3>
              <p className="text-xs tracking-widest uppercase text-stone-200">
                {category.subtitle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
