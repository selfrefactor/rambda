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

export async function dynamicTsToolbelt(){
  const destinationDir = resolve(__dirname, '../../_ts-toolbelt/src')
  await remove(`${ __dirname }/ts-toolbelt`)
  await remove(destinationDir)

  await spawn({
    cwd     : __dirname,
    command : 'git',
    inputs  : [
      'clone',
      '--depth',
      '1',
      'https://github.com/pirix-gh/ts-toolbelt',
    ],
  })
  const sourceDir = `${ __dirname }/ts-toolbelt/src`
  await copy(sourceDir, destinationDir)

  const indexFile = {
    filePath     : `${ __dirname }/assets/index.ts`,
    toolbeltPath : 'index.ts',
  }
  const tupleFile = {
    filePath     : `${ __dirname }/assets/tuple.ts`,
    toolbeltPath : 'List/_api.ts',
  }
  const functionFile = {
    filePath     : `${ __dirname }/assets/function.ts`,
    toolbeltPath : 'Function/_api.ts',
  }

  await mapAsync(moveFile)([ indexFile, tupleFile, functionFile ])
}
