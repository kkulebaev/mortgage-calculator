export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue'],

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
