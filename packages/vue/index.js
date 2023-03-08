module.exports = {
  extends: [
    require.resolve('@kong-dev/eslint-config-base/base'),
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    require.resolve('@kong-dev/eslint-config-base/rules'),
  ],
  rules: {
    'vue/multi-word-component-names': 'warn',
  },
}
