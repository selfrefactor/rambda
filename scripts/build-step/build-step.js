import fdir from 'fdir'
import {
  copy,
  outputFile,
  outputJson,
  readJson,
  remove as removeFS,
} from 'fs-extra'
import { parse, resolve } from 'path'
import { filter, mapAsync, pick, pipedAsync } from 'rambdax'

import { devDependencies } from '../../package.json'
import * as R from '../../rambda.js'
import { createExportedTypings } from './create-exported-typings'

const ramdaMethods = Object.keys(R)

async function createMainFile({ allMethods, ramdaMethods, dir }){
  const content = [ ...allMethods, ...ramdaMethods ]
    .map(x => `export * from './src/${ x }'`)
    .join('\n')

  await outputFile(`${ dir }/rambdax.js`, content)
}

async function rambdaxBuildStep(){
  const buildDeps = [
    '@babel/core',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/preset-env',
    'rollup',
    'rollup-plugin-babel',
    'rollup-plugin-cleanup',
    'rollup-plugin-commonjs',
    'rollup-plugin-json',
    'rollup-plugin-node-resolve',
    'rollup-plugin-replace',
    'rollup-plugin-sourcemaps',
  ]

  const rambdaxDeps = pick(buildDeps, devDependencies)
  const tsToolbelt = resolve(__dirname, '../../_ts-toolbelt')
  const sourceFiles = resolve(__dirname, '../../source')
  const dir = resolve(__dirname, '../../../rambdax')
  const tsToolbeltOutput = `${ dir }/_ts-toolbelt`
  const packageJsonOutput = `${ dir }/package.json`
  const packageJson = await readJson(packageJsonOutput)
  const newPackageJson = {
    ...packageJson,
    devDependencies : rambdaxDeps,
  }

  await outputJson(
    packageJsonOutput, newPackageJson, { spaces : 2 }
  )
  await removeFS(tsToolbeltOutput)
  await copy(tsToolbelt, tsToolbeltOutput)

  const allMethods = []

  await pipedAsync(
    sourceFiles,
    async x => fdir.async(x),
    filter(x => {
      if (x.endsWith('.spec.js')) return false

      return x.endsWith('.js')
    }),
    mapAsync(async x => {
      const { name } = parse(x)
      if (!x.includes('internals') && !ramdaMethods.includes(name)){
        allMethods.push(name)
      }
      const [ , fileName ] = x.split('source/')
      await copy(x, `${ dir }/src/${ fileName }`)
    })
  )

  await createMainFile({
    allMethods,
    ramdaMethods,
    dir,
  })
}

async function rambdaBuildStep(){
  const sourceFiles = resolve(__dirname, '../../source')
  const output = resolve(__dirname, '../../src')

  await pipedAsync(
    sourceFiles,
    async x => fdir.async(x),
    filter(x => {
      if (x.endsWith('.spec.js')) return false

      return x.endsWith('.js')
    }),
    mapAsync(async x => {
      const { name } = parse(x)
      
      if (!x.includes('internals') || !x.includes('benchmarks') || !ramdaMethods.includes(name)){
        return false
      }

      const [ , fileName ] = x.split('source/')
      await copy(x, `${ output }/${ fileName }`)
    })
  )
}

export async function buildStep({ withRambdax }){
  await createExportedTypings(withRambdax)

  if (withRambdax) await rambdaxBuildStep()
  await rambdaBuildStep()
}
