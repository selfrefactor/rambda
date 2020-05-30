import { move } from 'fs-extra'
import { spawn } from 'helpers-fn'
import { resolve } from 'path'

export async function dynamicTsToolbelt(){
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
  // const sourceDir = resolve(__dirname, '../../node_modules/ts-toolbelt')
  // const destinationDir = resolve(__dirname, '../../__toolbelt')
  // await move(sourceDir, destinationDir)
}
