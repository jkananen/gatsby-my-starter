module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': 'never',
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4',
    },
  },
}
