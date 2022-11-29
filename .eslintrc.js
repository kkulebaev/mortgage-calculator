module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'unicorn', 'simple-import-sort'],
  rules: {
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-api-style': ['error', ['composition']],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true,
      },
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: false,
      },
    ],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['vue'],
        threshold: 5,
      },
    ],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
        style: {
          lang: 'postcss',
        },
      },
    ],
    'vue/require-name-property': 'error',
    'vue/no-v-html': 'off',
    'vue/prefer-true-attribute-shorthand': ['error', 'never'],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.test.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
