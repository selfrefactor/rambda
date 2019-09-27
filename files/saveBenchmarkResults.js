const { exec } = require('helpers')
const { replace } = require('rambdax')
const { writeFileSync } = require('fs')
process.env.SKIP_BEAUTIFY = 'ON'

function map(line){
  if (line.includes('Running')){
    return replace(
      'Running ',
      '\n> ',
      line
    )
  }

  return line
}
function filter(line){
  if (line.trim() === '') return false
  if (line.includes('completed.')) return false
  if (line.includes('undefined')) return false

  return true
}

void async function saveBenchmarkResults(){
  const result = await exec({
    cwd     : process.cwd(),
    command : 'node benchmarks/index --all',
  })
  const toSave = result
    .map(map)
    .join('')

  writeFileSync(
    `${ __dirname }/benchmarkResults.md`,
    toSave,
  )
}()
