## populate

Create JSON data used afterwards by the documentation site.

```bash
node scripts/all-runs/populate-docs-data.js
```

## server:light

Start server with light themes

```bash
NGROK=ON CRON=5 node dist/main.js
```

## docker

```bash
cd $HOME/repos/docker&&./up.sh
```

## niketa:node:a

```bash
cd $HOME/repos/niketa/packages/node&&node ant
```

## niketa:node:b

```bash
cd $HOME/repos/niketa/packages/node&&node bee
```

## niketa:electron

Run tasks `niketa:electron:recalculate` before this

```bash
cd $HOME/repos/niketa/packages/electron&&yarn prod
```

## niketa:electron:recalculate

```bash
cd $HOME/repos/niketa/packages/electron&&node recalculate.js
```

## niketa

Run tasks `niketa:node:a` `niketa:node:b` `niketa:electron` before this in parallel

```bash
echo "NIKETA END"
```

## lint

```bash
prettier --no-semi --no-bracket-spacing --print-width 100 --single-quote --no-bracket-spacing --trailing-comma es5 --write "src/**/*.ts" "test/**/*.ts"
```

## on

Run tasks `docker` `niketa` `server:light` before this in parallel

```bash
echo "END"
```

## on:dark

Run tasks `niketa` `server:dark` before this in parallel

```bash
echo "END"
```
