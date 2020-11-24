const {resolve} = require('path')
const {readFile, writeFile} = require('fs-extra')
const outputPath = resolve(__dirname, '../../package.hjson')
const {version: libVersion, devDependencies} = require(
  '../../package.json'
)
const {forEach, remove} = require('rambdax')
const {count, indent} = require('string-fn')

function applyChange(content, version, dependency){
  return content.split('\n').map(line => {
    if(line.startsWith('const VERSION =')){
      return `const VERSION = ${libVersion}`
    }
    if(!line.trim().startsWith(`${dependency}:`)) return line

    const currentVersion = (remove(`${dependency}:`, line)).trim()
    if(!currentVersion.includes('.')) return line
    if(currentVersion === version) return line

    const padding = count(line, ' ')

    return indent(`${dependency}: ${version}`, padding - 1)
  }).join('\n')
}

void async function afterDepsUpdate(){
  let content = (await readFile(outputPath)).toString()

  forEach((x, prop) => {
    content = applyChange(content, x, prop)
  }, devDependencies)

  await writeFile(outputPath, content)
}()