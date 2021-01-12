module.exports = {
  extends: ['standard', 'standard-jsx'],
  plugins: ['prettier', 'flowtype'],
  env: {
    browser: true,
    es2021: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'array-element-newline': 'off',
    'object-property-newline': 'off',
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
  },
}
