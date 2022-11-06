module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
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
        shouldMatchCase: true,
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
  },
}
