const postcss = require('rollup-plugin-postcss');
const svgr = require('@svgr/rollup').default;

module.exports = {
  rollup(config, options) {
    config.plugins = [
      svgr(),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      ...config.plugins,
    ];

    return config;
  },
};
