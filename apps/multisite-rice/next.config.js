//@ts-check

const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@multisite-rice/ui'],
  nx: {
    // svgr: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'proarroz.com.ec',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Asegura que webpack resuelva correctamente los módulos del monorepo
    config.resolve.alias = {
      ...config.resolve.alias,
      '@multisite-rice/ui': require('path').resolve(
        __dirname,
        '../../libs/ui/src/index.ts',
      ),
    };
    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
