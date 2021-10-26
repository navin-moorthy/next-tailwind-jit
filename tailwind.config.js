const path = require("path");

const preset = require("@renderlesskit/react-tailwind/preset");

module.exports = preset({
  mode: "jit",
  purge: [
    path.resolve(__dirname, "./components/**/*"),
    path.resolve(__dirname, "./pages/**/*"),
    path.resolve(__dirname, "./renderlesskit.config.ts"),
    "node_modules/@renderlesskit/react-tailwind/**/*",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
