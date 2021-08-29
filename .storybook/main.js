module.exports = {
  stories: ['./../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-tailwind-dark-mode',
    'storybook-formik/register',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config, { configType }) => {
    const assetRule = config.module.rules.find(({ test }) => test?.test('.svg'));
    // exclude svg from the default storybook file-loader
    assetRule.exclude = /\.svg$/;

    // add svgr loader to handle svgs
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
