const { exec } = require('helpers')
const { writeFileSync } = require('fs')

function map(line) {
  if(line.includes('Running')) return '======'
  return line
}
function filter(line) {
  if(line.trim() === '') return false
  if(line.includes('completed.')) return false
  if(line.includes('undefined')) return false

  return true
}

void async function saveBenchmarkResults(){
  const result = await exec({
    cwd     : process.cwd(),
    command : 'node benchmarks/index --all',
  })
  const toSave = result.map(map).filter(filter).join('\n')
  writeFileSync(
    `${__dirname}/benchmarkResults.md`,
    toSave,
  )
}()

