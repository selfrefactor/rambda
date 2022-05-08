const { exec } = require('helpers-fn')
const [,,publishType] = process.argv

const cwd = __dirname

void async function publish(){
  console.log(`publishType`, publishType)
  if(!['minor', 'major', 'patch'].includes(publishType)){
    throw new Error(`wrong publishType - ${publishType}`)
  }

  await exec({cwd, command: `run bump ${publishType}`})
  await exec({cwd, command: `eggs publish --release-type ${publishType} --yes`})
  await exec({cwd, command: `yarn github`})
  await exec({cwd, command: `yarn docs`})
  await exec({cwd, command: `run d ${publishType} release`})
  console.log(a)
}()
