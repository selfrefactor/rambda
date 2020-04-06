import { execSafe, spawn } from 'helpers-fn'
import fdir from 'fdir'
import * as R from '../../rambda'
import { parse } from 'path'
import { replace, mapAsync } from 'rambdax'
import { outputFile, readFile } from 'fs-extra'

const cloneCommandInputs = 'clone --depth 1 https://github.com/ramda/ramda'.split(' ')

async function cloneRamda(skipDepInstall){
  await execSafe({
    command : 'rm -rf ramda',
    cwd     : __dirname,
  })
  
  await spawn({
    cwd     : __dirname,
    command : 'git',
    inputs  : cloneCommandInputs,
  })
  
  if (!skipDepInstall){
    await spawn({
      cwd     : `${ __dirname }/ramda`,
      command : 'npm',
      inputs  : [ 'i' ],
    })
  }
}

async function replaceImports() {
  const rambdaKeys = Object.keys(R)

  const allFiles = await fdir.async(
    `${__dirname}/ramda/test`
  )
  const goodFiles = allFiles.filter(filePath => {
    if(!filePath.endsWith('.js')) return false
    if(filePath.endsWith('lenses.js')) return true
    const {name} = parse(filePath)
    return rambdaKeys.includes(name)
  })
  const replaceImport = async function(filePath){
    const content = await readFile(filePath)
    const newContent = replace(
      `require('../source')`,
      `require('../../../../dist/rambda.js')`,
      content.toString()
    )

    await outputFile(filePath, newContent)
  }

  await mapAsync(replaceImport,goodFiles)
}

export async function importRamdaSpecs({ skipDepInstall }){
  await cloneRamda(skipDepInstall)
  await replaceImports()  
}
