const m = (s) => `^(@/)?(${s}/(.*)$)|^(@/)?(${s}$)`;

/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: "always",
  printWidth: 100,
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    m("react"),
    m("next"),
    "<THIRD_PARTY_MODULES>",
    m("types"),
    m("config"),
    m("constants"),
    m("lib/theme"),
    m("lib"),
    m("stores"),
    m("hooks"),
    m("styles"),
    m("@radix-ui"),
    m("components/ui"),
    m("components"),
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};
