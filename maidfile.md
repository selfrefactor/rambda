## populate

Create JSON data used afterwards by the documentation site.

```bash
node scripts/all-runs/populate-docs-data.js
```

## tslint:origin

```bash
tslint --fix files/index.d.ts
```

## tsformat:origin

```bash
tsfmt -r files/index.d.ts
```

## tslint

Run tasks `tslint:origin`, and `tsformat:origin`.
