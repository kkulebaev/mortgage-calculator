module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-html/vue',
  ],

  rules: {
    'scss/at-import-partial-extension': 'always',
    'color-hex-length': 'long',
  },
}
