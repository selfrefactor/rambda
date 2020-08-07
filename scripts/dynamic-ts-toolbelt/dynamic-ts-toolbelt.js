import { copy, readFile, remove, writeFile } from 'fs-extra'
import { log, scanFolder, spawn } from 'helpers-fn'
import { resolve } from 'path'
import { mapFastAsync, replace } from 'rambdax'

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

    const newContent = content
      .split('\n')
      .map(singleLine => {
        if (singleLine.includes('*')) return singleLine

        return replace(
          /export\s/g, 'export type ', singleLine
        )
      })
      .join('\n')

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

  const filesWithWrongExports = await scanFolder({
    folder   : destinationDir,
    filterFn : x => x.endsWith('_api.ts'),
  })

  await fixWrongExports(filesWithWrongExports)
  await copyToRambdax()
}
