module.exports = {
  extends: ['@gitlab/stylelint-config', 'stylelint-config-recommended-vue'],

  rules: {
    'color-hex-length': 'long',
    'selector-class-pattern': null,
    'max-nesting-depth': [
      0,
      {
        ignore: ['pseudo-classes'],
      },
    ],
  },
}
