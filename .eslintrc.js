module.exports = {
    env: {
      node: true,
      es6: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['eslint-plugin-prettier'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': ['error'],
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['.'],
        },
      },
    },
  };