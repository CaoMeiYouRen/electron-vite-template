/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        'vue/setup-compiler-macros': true,
    },
    extends: [
        'cmyr/vue',
    ],
    rules: {
        '@typescript-eslint/ban-ts-comment': [2, { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/explicit-function-return-type': 2,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-function': [2, { allow: ['arrowFunctions'] }],
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-var-requires': 0,
        'vue/require-default-prop': 0,
        'vue/multi-word-component-names': 0,
        'vue/no-multiple-template-root': 0,
    },
    overrides: [
        {
            files: ['build/notarize.js'],
            rules: {
                'no-console': 0,
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 0,
            },
        },
    ],
}
