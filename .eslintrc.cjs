/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ['plugin:astro/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        sourceType: 'module',
        ecmaVersion: 'latest'
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro']
            },
            ignorePatterns: ['node_modules/**/*', '*TW*'],
            rules: {
                // override/add rules settings here, such as:
                // "astro/no-set-html-directive": "error"
                "quotes": [2, "single", { "avoidEscape": true }],
                "jsx-quotes": [2, "prefer-single"]
            }
        }
    ]
}