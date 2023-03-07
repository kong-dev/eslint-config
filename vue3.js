module.exports = {
  extends: [
    require.resolve('./base'),
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript/recommended',
    require.resolve('./only-rules'),
  ],
  rules: {
    'vue/multi-word-component-names': 'warn',
  },
}
