module.exports = {
  presets: ["@babel/preset-flow", "@babel/preset-env"],
  plugins: [
    "@babel/transform-flow-comments",
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-regenerator",
      {
        helpers: true,
        polyfill: true,
        regenerator: false,
      },
    ],
  ],
};
