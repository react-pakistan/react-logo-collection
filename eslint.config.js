module.exports = {
  extends: '@react-pakistan/eslint-config-shared/ts-base/.eslintrc.json',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': ['error', {
      allow: ['_id'],
    }],
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
