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
