# ESLint Config

The default ESLint config for Shabad OS.

## Usage

**Install**

```shell
npm install --save-dev @shabados/eslint-config
```

npm 7+ automatically installs peer-dependencies. If using a previous npm version, install them manually via:

```shell
npx install-peerdeps --dev @shabados/eslint-config
```

**Configure ESLint**

In your configuration file (e.g. `.eslintrc`), add the appropriate extension(s) from below:

- `@shabados/eslint-config` **(required)**
- `@shabados/eslint-config/typescript` (optional)

For example the `.eslintrc` of a TypeScript project would contain:

```json
{
  "extends": [
    "@shabados/eslint-config",
    "@shabados/eslint-config/typescript"
  ]
}
```

## Community

The easiest way to communicate is via [GitHub issues](https://github.com/shabados/eslint-config/issues). Please search for similar issues regarding your concerns before opening a new issue.

Our intention is to signal a safe open-source community. Please help us foster an atmosphere of kindness, cooperation, and understanding. By participating, you agree to abide by the [code of conduct](https://github.com/shabados/.github/blob/main/CODE_OF_CONDUCT.md).

If you have a concern that doesn't warrant opening a GitHub issue, please reach out to us:

Harjot Singh, Author, Maintainer, Project Lead, and Organization Lead: [@harjot1singh](https://github.com/harjot1singh)

Bhajneet S.K., Committer: [@bhajneet](https://github.com/bhajneet/)
