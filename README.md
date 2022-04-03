# ESLint Config

This repo contains the Shabad OS ESLint config!

## Usage

### Install dependencies

`npm install --save-dev @shabados/eslint-config`

Recommended to use npm 7+ to automatically install the peer-dependencies. If not, be sure to install them yourself via `npx install-peerdeps --dev @shabados/eslint-config`.

### Create ESLint config

Create an ESLint configuration (`.eslintrc`) in your repository. You'll then add the appropriate flavor to the `extends` property inside the configuration file.

Essentially, there are 3 flavors of configuration that can be mixed and matched:

- `@shabados`
- `@shabados/typescript`
- `@shabados/react`

So, if you've got a TypeScript + React project, the contents of your `.eslintrc` should at least contain:

```
{
    "extends": [
      "@shabados",
      "@shabados/typescript",
      "@shabados/react"
    ]
}
```

The `@shabados` flavor is always required, so have this at a minimum.
