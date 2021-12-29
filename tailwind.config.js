module.exports = {
  presets: [require("@renderlesskit/react-tailwind/preset")],
  content: [
    "./components/**/*",
    "./pages/**/*",
    "./renderlesskit.config.ts",
    "node_modules/@renderlesskit/react-tailwind/**/*",
  ],
  theme: {},
  variants: {},
  plugins: [],
};
