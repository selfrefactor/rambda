import fdir from 'fdir'
import { outputFile, readFile } from 'fs-extra'
import { execSafe, spawn } from 'helpers-fn'
import { parse } from 'path'
import { mapAsync, replace } from 'rambdax'

import * as R from '../../rambda'

const cloneCommandInputs = 'clone --depth 1 https://github.com/ramda/ramda'.split(' ')

async function cloneRamda(){
  await execSafe({
    command : 'rm -rf ramda',
    cwd     : __dirname,
  })

  await spawn({
    cwd     : __dirname,
    command : 'git',
    inputs  : cloneCommandInputs,
  })

  await spawn({
    cwd     : `${ __dirname }/ramda`,
    command : 'npm',
    inputs  : [ 'i' ],
  })
}

async function replaceImports(){
  const toReturn = [ 'lenses' ]
  const rambdaKeys = Object.keys(R)

  const allFiles = await fdir.async(`${ __dirname }/ramda/test`)
  const goodFiles = allFiles.filter(filePath => {
    if (!filePath.endsWith('.js')) return false
    if (filePath.endsWith('lenses.js')) return true
    const { name } = parse(filePath)
    toReturn.push(name)

    return rambdaKeys.includes(name)
  })
  const replaceImport = async function (filePath){
    const content = await readFile(filePath)
    const newContent = replace(
      'require(\'../source\')',
      'require(\'../../../../dist/rambda.js\')',
      content.toString()
    )

    await outputFile(filePath, newContent)
  }

  await mapAsync(replaceImport, goodFiles)

  return toReturn
}

export async function importRamdaSpecs(withInitialStep = false){
  if (withInitialStep) await cloneRamda()

  return replaceImports()
}
