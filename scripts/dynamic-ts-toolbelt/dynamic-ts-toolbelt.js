import { copy, remove, readFile, writeFile } from 'fs-extra'
import { scanFolder, spawn, log } from 'helpers-fn'
import { resolve } from 'path'
import { mapAsync, mapFastAsync, replace } from 'rambdax'

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
  await remove(`${ __dirname }/ts-toolbelt`)

  await copy(
    source, destination, { overwrite : true }
  )
}

async function fixWrongExports(files){
  await mapFastAsync(async filePath => {
    const content = (await readFile(filePath)).toString()
    const newContent = replace(/export\s/g, 'export type ', content)
    await writeFile(filePath, newContent)
  })(files)
}

export async function dynamicTsToolbelt(commitHash){
  const destinationDir = resolve(__dirname, '../../_ts-toolbelt/src')

  await remove(`${ __dirname }/ts-toolbelt`)
  await remove(destinationDir)

  log('start clone', 'info')
  await spawn({
    cwd     : __dirname,
    command : 'git',
    inputs  : [ 'clone', 'https://github.com/pirix-gh/ts-toolbelt' ],
  })
  log('end clone', 'info')
  if (commitHash){
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

  const filesWithWrongExports = await scanFolder({ 
    folder: destinationDir, 
    filterFn: x => x.endsWith('_api.ts')
  })

  await fixWrongExports(filesWithWrongExports)
  await copyToRambdax()
}
