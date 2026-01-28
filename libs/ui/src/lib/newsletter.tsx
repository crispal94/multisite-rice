'use client';

export const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between shadow-xl">
        <div className="relative z-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join our community
          </h2>
          <p className="mt-3 max-w-xl text-lg text-stone-200 font-light">
            Receive exclusive recipes, harvest updates, and special offers on
            our premium grains.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 relative z-10 w-full max-w-md">
          <form className="sm:flex gap-2">
            <label className="sr-only" htmlFor="email-address">
              Email address
            </label>
            <input
              autoComplete="email"
              className="w-full rounded-xl border-white/20 bg-white/10 px-5 py-3 placeholder-stone-300 text-white focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary backdrop-blur-sm outline-none"
              id="email-address"
              name="email"
              placeholder="Enter your email"
              required
              type="email"
            />
            <button
              className="mt-3 flex w-full items-center justify-center rounded-xl border border-transparent bg-secondary px-5 py-3 text-base font-bold text-text-main hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:mt-0 sm:w-auto sm:flex-shrink-0 transition-colors"
              type="submit"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-sm text-stone-300">
            We respect your privacy. Read our{' '}
            <a
              className="font-medium text-white underline decoration-1 underline-offset-2"
              href="#"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-accent/30 blur-3xl"></div>
      </div>
    </div>
  );
};
