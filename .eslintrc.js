module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 'no-console': 0,
    // 'react/jsx-one-expression-per-line': 0,
    // 'jsx-a11y/tabindex-no-positive': 0,
    // 'jsx-a11y/label-has-associated-control': 'off',
    // 'react/function-component-definition': 'off',
    // 'import/no-extraneous-dependencies': 'off',
    // 'react/prop-types': 'off',
    // 'import/prefer-default-export': 'off',
  },
};
