module.exports = {
  // ...existing config
  ignoreWarnings: [
    {
      module: /face-api\.js/,
      message: /Failed to parse source map/,
    },
  ],
};
