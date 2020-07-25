import { copy, remove } from 'fs-extra'
import { spawn } from 'helpers-fn'
import { resolve } from 'path'
import { mapAsync } from 'rambdax'

async function moveFile({ filePath, toolbeltPath }){
  const destinationPath = resolve(__dirname,
    `../../_ts-toolbelt/src/${ toolbeltPath }`)

  await copy(
    filePath, destinationPath, { overwrite : true }
  )
}

async function copyToRambdax(){
  const source = resolve(__dirname, '../../_ts-toolbelt/')
  const destination = resolve(__dirname, '../../../rambdax/_ts-toolbelt')
  // await remove(`${ __dirname }/ts-toolbelt`)

  await copy(
    source, destination, { overwrite : true }
  )
}

export async function dynamicTsToolbelt(commitHash){
  const destinationDir = resolve(__dirname, '../../_ts-toolbelt/src')
  await remove(`${ __dirname }/ts-toolbelt`)
  await remove(destinationDir)

  await spawn({
    cwd     : __dirname,
    command : 'git',
    inputs  : [
      'clone',
      '--depth',
      '200',
      'https://github.com/pirix-gh/ts-toolbelt',
    ],
  })
  if (commitHash){
    console.log(commitHash)
    await spawn({
      cwd     : `${ __dirname }/ts-toolbelt`,
      command : 'git',
      inputs  : [ 'reset', '--hard', commitHash ],
    })
  }
  const sourceDir = `${ __dirname }/ts-toolbelt/src`
  await copy(sourceDir, destinationDir)

  const indexFile = {
    filePath     : `${ __dirname }/assets/index.ts`,
    toolbeltPath : 'index.ts',
  }
  const listFile = {
    filePath     : `${ __dirname }/assets/list.ts`,
    toolbeltPath : 'List/_api.ts',
  }
  const functionFile = {
    filePath     : `${ __dirname }/assets/function.ts`,
    toolbeltPath : 'Function/_api.ts',
  }
  const objectFile = {
    filePath     : `${ __dirname }/assets/object.ts`,
    toolbeltPath : 'Object/_api.ts',
  }

  await mapAsync(moveFile)([ indexFile, objectFile, functionFile, listFile ])
  await copyToRambdax()
}
