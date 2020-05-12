## lint:js

It lints all files and folders but it requires `npm i -g run-fn`

```bash
jest scripts/lint/lint.spec.js
```

## lint:ts

It lints all files and folders but it requires `npm i -g run-fn`

```bash
jest scripts/lint/lint.spec.js
```

## lint

Run tasks `lint:js` and `lint:ts` in parallel.

## docs

It creates JSON data used afterwards by the documentation site

```bash
jest scripts/populate-docs-data/populate-docs-data.spec.js
```

## readme

It creates `README.md` file for both `Rambda` and `Rambdax` libraries

```bash
jest scripts/populate-readme-data/populate-readme-data.spec.js
```

## out

It runs all scripts needed for a build and documentation

```bash
jest scripts/all-scripts/all-scripts.spec.js
```
