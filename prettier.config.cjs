/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require('prettier-config-standard'),
  //pluginSearchDirs: [__dirname],
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.*',
      options: {
        trailingComma: 'all',
        bracketSameLine: false,
        useTabs: false,
        printWidth: 120,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: "all",
        endOfLine: "auto",
        printWidth: 80 // default
      }
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      }
    }
  ]
}
