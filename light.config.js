const fs = require('fs');

module.exports = (defaultPaths, defaultConfig, flags) => ({
  config: {
    templatesData: {
      requires: {
        fs,
        svgLogo: fs.readFileSync('./app/images/logo.svg'),
      },
    },
  },
});
