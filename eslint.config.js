import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

const CUSTOM_PREFIX = 'custom'
const CUSTOM_SPLITTER = '/'

export default [
  {
    name: CUSTOM_PREFIX + CUSTOM_SPLITTER + 'ignores',
    ignores: ['**/*.{test,spec}.ts'],
  },
  {
    name: 'eslint-js/recommended',
    ...js.configs.recommended,
  },
  ...tseslint.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  /* https://stackoverflow.com/questions/78348933/how-to-use-eslint-flat-config-for-vue-with-typescript */
  {
    name: CUSTOM_PREFIX + CUSTOM_SPLITTER + 'setup-vue-and-typescript',
    plugins: {
      'typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
  },

  /* https://github.com/sindresorhus/eslint-plugin-unicorn?tab=readme-ov-file#es-module-recommended */
  {
    name: eslintPluginUnicorn.meta.name,
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },

  {
    name: CUSTOM_PREFIX + CUSTOM_SPLITTER + 'plugin-simple-import-sort',
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  {
    name: CUSTOM_PREFIX + CUSTOM_SPLITTER + 'overrides-rules',
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
    },
  },
]
