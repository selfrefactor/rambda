const {lintFn} = require('lint-fn')
const filePath = `${__dirname}/index.d.ts`

void (async function lint() {
  console.time('lint')
  await lintFn(filePath, 'outer')
  console.timeEnd('lint')
})()