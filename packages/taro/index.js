module.exports = {
  extends: [
    require.resolve('@kong-dev/eslint-config-base/base'),
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'taro/react',
    require.resolve('@kong-dev/eslint-config-base/rules'),
  ],
}
