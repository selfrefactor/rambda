import { spawn } from 'helpers-fn'
import { parse, resolve } from 'path'
import { mapAsync } from 'rambdax'

const base = resolve(__dirname, '../../')

const folders = [
  'source',
  'scripts/all-scripts',
  'scripts/build-step',
  'scripts/consume-typings',
  'scripts/lint',
  'scripts/lint-ts-files',
  'scripts/populate-docs-data',
  'scripts/populate-readme-data',
  'scripts/run-benchmarks',
]

const files = [
  'rambda.js',
  'scripts/run-ramda-specs/run-ramda-specs.js',
  'scripts/run-ramda-specs/run-ramda-specs.spec.js',
  'scripts/run-ramda-specs/import-ramda-specs.spec.js',
  'scripts/run-ramda-specs/import-ramda-specs.js',
]

async function lintFolder(folder){
  await spawn({
    cwd     : `${ base }/${ folder }`,
    command : 'run',
    inputs  : [ 'l' ],
  })
}

async function lintFile(file){
  const filePath = `${ base }/${ file }`
  const { dir, name } = parse(filePath)
  await spawn({
    cwd     : dir,
    command : 'run',
    inputs  : [ 'lintfile', `${ name }.js` ],
  })
}

export async function lint(){
  await mapAsync(lintFolder)(folders)
  await mapAsync(lintFile)(files)
}
