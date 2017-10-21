const filePath = process.argv[ 2 ]

if (filePath === undefined) {
  console.log('Provide file path')

  return
}

const lint = require('lint-fn')

lint({ filePath })
  .then(() => {
    console.log(`Linting ${ filePath } is done.`)
  })
  .catch(console.log)
