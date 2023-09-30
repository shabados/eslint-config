const {
  rules,
  overrides: [ testOverrides, ...overrides ],
} = require( '.' )

module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: [ '**/*.ts?(x)' ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
      ],
      rules: {
        // No unused variables except when prepended with _ to indicate they're unused but required
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
          },
        ],
        // Although shadow variables can be confusing, disallowing them can lead to terrible naming
        '@typescript-eslint/no-shadow': 'off',
        // Trailing commas result in better diffs and allow generics to work in JSX files
        '@typescript-eslint/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'only-multiline',
            enums: 'always-multiline',
            generics: 'ignore',
            tuples: 'always-multiline',
          },
        ],
        // Ver broken for some types, so ignoring them makes certain TS-only constructs look nicer
        '@typescript-eslint/indent': [
          'error',
          2,
          {
            ignoredNodes: [
              'TSUnionType',
              'TSIntersectionType',
              'PropertyDefinition[decorators]',
              'TSTypeParameterInstantiation',
            ],
          },
        ],
        // Let Typescript infer the return types
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // Sometimes you want to declare a function as async so that it returns a Promisified value
        '@typescript-eslint/require-await': 'off',
        // Use types throughout, not interfaces
        '@typescript-eslint/consistent-type-definitions': [ 'error', 'type' ],
        // Semi colons are visual garbage
        '@typescript-eslint/semi': [ 'error', 'never' ],
        // Typescript types should be delimeted by commas, not semi-colons
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'comma',
            },
            singleline: {
              delimiter: 'comma',
            },
          },
        ],
        // Can be visually verbose to have every class member separated with a newline
        '@typescript-eslint/lines-between-class-members': 'off',
        // Without this, TS path alias imports report missing file extension
        'import/extensions': rules[ 'import/extensions' ],
      },
    },
    {
      ...testOverrides,
      rules: {
        ...testOverrides.rules,
        // In testing, dynamic requires are often required
        '@typescript-eslint/no-var-requires': 'off',
        // Allows destructuring class methods - up to us to determine if it is an issue
        '@typescript-eslint/unbound-method': 'off',
        // Strict type safety can be more of a hindrance in tests sometimes
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        // We don't care about floating promises in tests, and it causes a typing issue with act()
        '@typescript-eslint/no-floating-promises': 'off',
        // We know what we're doing in tests
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    ...overrides,
  ],
}
