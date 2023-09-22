const { execCommand } = require('./execCommand')
const [ , , publishType ] = process.argv

void (async function publish(){
  if (![ 'minor', 'major', 'patch' ].includes(publishType)){
    throw new Error(`wrong publishType - ${ publishType }`)
  }

  await execCommand(`run bump ${ publishType }`)
  // await execCommand(`eggs publish --release-type ${ publishType } --yes`)
  await execCommand('yarn github')
  await execCommand('run d release')
})()
