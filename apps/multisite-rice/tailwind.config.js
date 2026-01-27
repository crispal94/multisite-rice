const { join } = require('path');
const sharedConfig = require('../../libs/ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...sharedConfig,
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...sharedConfig.content,
  ],
};
