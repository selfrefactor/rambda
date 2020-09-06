## build:main

```bash
cross-env NODE_ENV=build rollup -c files/rollup.config.js
```

## build:web

```bash
cross-env NODE_ENV=build rollup -c files/rollup.web.config.js
```

## build

Run tasks `build:main` and `build:web`

## lint:js

```bash
jest scripts/lint/lint.spec.js
```

## lint:ts

It required local `yarn install` run as it uses its own dependencies.

```bash
cd scripts/lint-ts-files&&node lint-typings-tests.js
```

## lint

Run tasks `lint:js` and `lint:ts` in parallel.

## docs

It creates JSON data used afterwards by the documentation site.

```bash
jest scripts/populate-docs-data/populate-docs-data.spec.js
```

## readme

It creates `README.md` file for both `Rambda` and `Rambdax` libraries.

```bash
jest scripts/populate-readme-data/populate-readme-data.spec.js
```

## toolbelt

It syncs `ts-toolbelt` dependency with local and Rambdax's `_ts-toolbelt` folders.

```bash
jest scripts/dynamic-ts-toolbelt/dynamic-ts-toolbelt.spec.js
```

## out

It runs all scripts needed to prepare for release.

```bash
jest scripts/all-scripts/all-scripts.spec.js
```

## rambdax

It runs all scripts needed to prepare for `Rambdax` release.

```bash
WITH_RAMBDAX=ON jest scripts/all-scripts/all-scripts.spec.js
```
