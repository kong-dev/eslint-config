module.exports = {
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/ban-ts-comment': ['error', {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      minimumDescriptionLength: 3
    }],
    '@typescript-eslint/ban-tslint-comment': 'error',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    '@typescript-eslint/consistent-type-imports': ['error', {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
      fixStyle: 'separate-type-imports',
    }],
    '@typescript-eslint/method-signature-style': 'warn',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', {
      ignoreParameters: true,
      ignoreProperties: true,
    }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^ignore',
        destructuredArrayIgnorePattern: '^_',
      }
    ],
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/explicit-function-return-type': ['warn', {
          allowedNames: [
            'render',
          ],
          allowExpressions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
          allowDirectConstAssertionInArrowFunctions: true
        }],
        '@typescript-eslint/no-floating-promises': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'warn',
        '@typescript-eslint/prefer-includes': 'warn',
        '@typescript-eslint/prefer-nullish-coalescing': ['warn', {
          ignoreConditionalTests: false,
          ignoreMixedLogicalExpressions: false
        }],
        '@typescript-eslint/prefer-optional-chain': 'warn',
        '@typescript-eslint/prefer-readonly': 'warn',
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/require-array-sort-compare': ['warn', { ignoreStringArrays: true }],
        '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        '@typescript-eslint/strict-boolean-expressions': ['error', {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false
        }],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
      }
    }
  ],
}
