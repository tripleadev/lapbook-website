const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: false,
  devIndicators: {
    autoPrerender: false,
  },
});
