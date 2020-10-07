module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'arrow-body-style': 'off',
    'operator-linebreak': 'off',
    'no-nested-ternary': 'off',
    'comma-dangle': 'off',
  },
};
