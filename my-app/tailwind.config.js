const astrowind = require('astrowind');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    // ... otros paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    astrowind(),
    // ... otros plugins
  ],
} 