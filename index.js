module.exports = {
  env: {
    es6: true,
  },
  globals: {
    JSX: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: [ 'airbnb', 'airbnb/hooks' ],
  plugins: [ 'simple-import-sort', 'workspaces' ],
  rules: {
    // Spacing in brackets is consistent and readable
    'array-bracket-spacing': [ 'error', 'always' ],
    // Spacing in brackets is consistent and readable
    'computed-property-spacing': [ 'error', 'always' ],
    // Spacing in brackets is consistent and readable
    'space-in-parens': [
      'error',
      'always',
      {
        exceptions: [ 'empty' ],
      },
    ],
    // Allow line breaks inside function parameters to enhance readability vs line length
    'function-paren-newline': [ 'error', 'multiline-arguments' ],
    // Doesn't really help to check if the module is on the filesystem, and can harm when using Docker etc: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',
    // Do not require .js/ts extensions, except for .json and asset file types
    'import/extensions': [
      'error',
      {
        json: 'always',
        png: 'always',
        jpg: 'always',
        mp4: 'always',
      },
    ],
    // Preferable, but the author should know best for the situation
    'import/prefer-default-export': 'off',
    // jsx-a11y is not valid for our use-cases
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // Windows users may checkout as CRLF, but check in as LF, which this rule breaks
    'linebreak-style': 'off',
    // There's no need to have more than 1 empty line, ever
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        // eol-last always adds 1 line to the end, so 1 would result in 2 EOL lines
        maxEOF: 0,
        // No need to ever have a newline at the beginning of a file
        maxBOF: 0,
      },
    ],
    // Sometimes you want the side-effects that constructing something will cause
    'no-new': 'off',
    // No unused variables except when prepended with _ to indicate that they're unused but required
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'no-void': 'off',
    // https://eslint.org/docs/rules/no-shadow seems sensible to not have shadow variables, but can get annoying real quick, especially in the case of reducers
    'no-shadow': 'off',
    // TypeScript would catch this anyway, and it's noisy to add braces to suppress this warning
    'no-promise-executor-return': 'off',
    // Be consistent about where the object braces go
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    // Object properties either on the same line, or all on separate, consistently
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    // No need to have the .jsx file extension
    'react/jsx-filename-extension': 'off',
    // React 17+ does not need to import react
    'react/jsx-uses-react': 'off',
    // In TypeScript projects, validating prop types has low utility
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // No need to sort methods in class components and it can mess with member/function declarations
    'react/sort-comp': 'off',
    // There's no point disabling prop spreading, it can be useful if not abused
    'react/jsx-props-no-spreading': 'off',
    // Allow components to be rendered as inline functions to allow for render prop pattern
    'react/no-unstable-nested-components': [ 'error', { allowAsProps: true } ],
    // Semi colons are visual garbage
    semi: [ 'error', 'never' ],
    // When semi-colons are required (e.g. inline array operations)
    // place them at the start of statement
    'semi-style': [ 'error', 'first' ],
    // Prefer passing in ES6 default values to function components (ideal solution resolve #113)
    'react/require-default-props': 'off',
    // Prefer arrow functions for all React functional components
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // Doesn't matter where we'd like to initialise React state in class components
    'react/state-in-constructor': 'off',
    // Sort imports alphabetically and separate groups with a newline
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      extends: [ 'plugin:jest/recommended', 'plugin:jest/style' ],
      files: [
        '**/test/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
        '**/__mocks__/**/*[.jt]s?(x)',
      ],
      env: {
        jest: true,
      },
      rules: {
        // In testing, devDependencies are often imported, and this rule would complain
        'import/no-extraneous-dependencies': 'off',
        // Requiring in local scopes is useful in tests
        'global-require': 'off',
        // It's useful to not have assertions in smoke/crash tests
        'jest/expect-expect': 'off',
        // Logging is fine in tests and scripts
        'no-console': 'off',
      },
    },
    {
      files: [
        '*.config.?(c|m)[jt]s',
        '**/scripts/**/*.?(c|m)[jt]s',
        'dangerfile.[jt]s',
        'danger/**/*.[jt]s',
        'infrastructure/**/*.[jt]s',
      ],
      rules: {
        // devDependencies do need to be imported in config/scripts
        'import/no-extraneous-dependencies': 'off',
        // Logging is fine in config/scripts
        'no-console': 'off',
      },
    },
  ],
}
