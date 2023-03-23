module.exports = {
  extends: [
    require.resolve('@kong-dev/eslint-config-base/base'),
    'eslint:recommended',
    'taro/react',
    'plugin:@typescript-eslint/recommended',
    require.resolve('@kong-dev/eslint-config-base/rules'),
  ],
}
