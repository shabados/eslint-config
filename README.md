# ESLint Config

This repo contains the Shabad OS ESLint config!

## Usage

### Install dependencies

`npm install --save-dev @shabados/eslint-config`

Recommended to use npm 7+ to automatically install the peer-dependencies. If not, be sure to install them yourself via `npx install-peerdeps --dev @shabados/eslint-config`.

### Create ESLint config

Create an ESLint configuration (`.eslintrc`) in your repository. You'll then add the appropriate flavor to the `extends` property inside the configuration file.

Essentially, there are 2 flavors of configuration that can be referenced:

- `@shabados/eslint-config`
- `@shabados/eslint-config/typescript`

So, if you've got a TypeScript project, the contents of your `.eslintrc` should contain:

```
{
    "extends": [
      "@shabados/eslint-config",
      "@shabados/eslint-config/typescript",
    ]
}
```

The `@shabados/eslint-config` flavor is always required, so have this at a minimum.
