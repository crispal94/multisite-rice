'use client';

export const FeaturedProducts = () => {
  const products = [
    {
      tag: 'Himalayan Origin',
      title: 'Royal Heritage Basmati',
      description: 'Aged for 2 years for perfect fluffiness and aroma.',
      price: '$14.00',
      unit: '/ 2kg',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCHHk5wKYkJ1vXyFRRarZlPRjaqrsqimeiOOsynMmYLkEzn05420HuxWinx6HgeRPJytby-O1El-pchoXqKHkX-EOihpmmMKFqrzGnurb861AXk76lrORli2HQoDA4jE2ISvYq8G6Id7fMt1UEVxuLsKVOnRNuFYzqyzMLDHlJM0W4a9zZK-vci3ETih0MDLJ3ynEefZ-6cbsxG-5QL2NPFrsH_Lu1CoE0XJ0dnS_ZvzK3oqV6C_pdUulZoRGQSPj238ZR0sTSuqhbr',
    },
    {
      tag: 'Thai Hom Mali',
      title: 'Organic White Jasmine',
      description: 'Floral notes with a silky soft texture.',
      price: '$12.50',
      unit: '/ 2kg',
      bestseller: true,
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDbzhPYsl5WLzIYxp6Tt3waxi6q5pp6bTfUICLfz5V1hpliU7Buxyh-XDjJ_UvvtZAZEE__CHgYNcsVyJR2y3OMdsQA9tySh2cJzEDYaksHN3Vq5Ob6jisrg7UA_9t_5lceWBdAL76zvwYDx32soeAUJ9H2es0Br7DewMvxVeOcJIZNnyjcCTcWI1vXtiRrCV5KsVp0XS_l2oXEVk6ar1MYGoXQgJi4arxtKKvXu8E3Isf01h_DgF5EG1LpmB9VEQsTn2At_PLHdnqc',
    },
    {
      tag: 'Superfood',
      title: 'Forbidden Black Rice',
      description: 'High in antioxidants with a nutty flavor profile.',
      price: '$18.00',
      unit: '/ 1kg',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAMpkVtKgnkc04Tw4jdke3u28KuY8ngKO9Q4Q10d1rhju1__p4v11WyeL5k794lPMkZOyZtUzClHKsCmOiK5TSnxptUFOKM5WG4zI3UvrzKX2e3x8a1xEqQrwJGk8pglOf3gz7zXtyISbFV9ajWveoDSQEWC4jojTlw9-ax3sw0uZIChg_92FSoRkhyno0KiyWjgM_-GxRXS03wMKAUUbEWV95sPb42V8a2VWpw3ru-HgaVlsUjemiXEks2f9SD3OFRNY3GJh3EDNJf',
    },
    {
      tag: 'Italian Reserve',
      title: 'Classic Arborio Risotto',
      description: 'Perfectly starchy for creamy, authentic risotto.',
      price: '$15.50',
      unit: '/ 1kg',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZRdVsfIxd5VPXu21pJ1MZF-9wwICQ2FtOvnBtmGFY0PfQtdNhaAXcssbBELaQn8SQxokkhX1zf24KSrHKu8HKP_AewX4yJYL_ZWglOWk8SA-exfhLwYkqpcd1MaI5J5CH-qXNEGeR5GtWn4HuMOalPLbaYSkYwkCirWYH2BXpi5bBHrTIuopTdBIdlUuGrlOmnRHhRNHIfcWi6Pn87IkeC5RrfPWF-heGDuAxFkTTP3ANWcLN611oN3uHKxi-x2VNJIj0wjkuFBFu',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-3xl dark:bg-surface-dark border border-stone-100 dark:border-stone-800 shadow-sm my-8">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="font-display text-2xl font-bold text-text-main dark:text-white">
            Premium Selections
          </h2>
          <p className="text-sm text-text-muted mt-1">
            Our most coveted harvests.
          </p>
        </div>
        <a
          className="text-sm font-semibold text-primary hover:text-primary-hover flex items-center gap-1 group"
          href="#"
        >
          View All Products
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.title}
            className="group flex flex-col bg-background-light dark:bg-stone-800/50 rounded-2xl p-4 transition-all hover:shadow-soft border border-transparent hover:border-stone-200 dark:hover:border-stone-700"
          >
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-stone-100 mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${product.imageUrl}')` }}
              ></div>
              {product.bestseller && (
                <span className="absolute top-3 left-3 px-2 py-1 rounded bg-accent text-white text-[10px] font-bold uppercase tracking-wider">
                  Bestseller
                </span>
              )}
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-stone-600 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-500 shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  favorite
                </span>
              </button>
            </div>
            <div className="flex flex-col flex-grow gap-2">
              <div className="text-xs text-primary font-bold uppercase tracking-wider">
                {product.tag}
              </div>
              <h3 className="font-display text-lg font-semibold text-text-main dark:text-white leading-tight">
                {product.title}
              </h3>
              <p className="text-sm text-text-muted line-clamp-2">
                {product.description}
              </p>
              <div className="mt-auto pt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-text-main dark:text-white">
                  {product.price}{' '}
                  <span className="text-xs font-normal text-stone-500">
                    {product.unit}
                  </span>
                </span>
                <button className="flex items-center justify-center size-9 rounded-full bg-stone-100 dark:bg-stone-700 text-text-main dark:text-white hover:bg-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    add
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
