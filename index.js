module.exports = {
  extends: [
    require.resolve('./base'),
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    require.resolve('./only-rules'),
  ],
}
