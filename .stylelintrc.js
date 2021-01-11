module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'order/order': null,
    'max-nesting-depth': 5,
    'selector-max-compound-selectors': 10,
    'selector-max-id': 5,
    'selector-no-qualifying-type': null,
  },
}
