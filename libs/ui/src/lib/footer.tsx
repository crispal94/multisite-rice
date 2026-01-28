'use client';

export const Footer = () => {
  return (
    <footer className="bg-secondary/10 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-xl">
                  agriculture
                </span>
              </div>
              <span className="text-xl font-display font-bold text-text-main dark:text-white">
                Oryza
              </span>
            </div>
            <p className="text-text-muted dark:text-stone-400 text-sm leading-relaxed max-w-xs mb-6">
              Cultivating the world's finest organic rice varieties while
              supporting sustainable farming communities across the globe.
            </p>
            <div className="flex gap-4">
              <a
                className="text-stone-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                className="text-stone-400 hover:text-primary transition-colors"
                href="#"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  All Varieties
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Organic Basmati
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Jasmine Rice
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Specialty Grains
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Bulk Wholesale
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white mb-4">
              Learn
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Our Farmers
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Farming Practices
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Recipes & Ti
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Sustainability Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-main dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  About Oryza
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-muted hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-200 dark:border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-400">
            © 2024 Oryza Organic Rice Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-stone-400 font-serif italic text-lg">
              Visa
            </span>
            <span className="text-stone-400 font-sans font-bold text-lg">
              Mastercard
            </span>
            <span className="text-stone-400 font-sans font-bold text-lg">
              Amex
            </span>
            <span className="text-stone-400 font-sans font-bold text-lg">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
