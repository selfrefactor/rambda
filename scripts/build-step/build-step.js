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
import { rambdaMethods } from '../constants'
import { scanFolder } from 'helpers-fn'
import { createExportedTypings } from './create-exported-typings'

// Rambdax methods which are used in creation of Rambda method
// ============================================
const rambdaxMethodsAsInternals = [ 'isFunction' ]

async function createMainFile({ allMethods, rambdaMethods, dir }){
  const content = [ ...allMethods, ...rambdaMethods ]
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
  const sourceFileDir = resolve(__dirname, '../../source')
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
    sourceFileDir,
    async dir => scanFolder({folder:dir}),
    filter(x => {
      if (x.endsWith('.spec.js')) return false

      return x.endsWith('.js')
    }),
    mapAsync(async x => {
      const { name } = parse(x)
      if (!x.includes('internals') && !rambdaMethods.includes(name)){
        allMethods.push(name)
      }
      const [ , fileName ] = x.split('source/')
      await copy(x, `${ dir }/src/${ fileName }`)
    })
  )

  await createMainFile({
    allMethods,
    rambdaMethods,
    dir,
  })
}

async function rambdaBuildStep(){
  const sourceFileDir = resolve(__dirname, '../../source')
  const output = resolve(__dirname, '../../src')

  await pipedAsync(
    sourceFileDir,
    async dir => scanFolder({folder:dir}),
    filter(x => {
      if (x.endsWith('.spec.js')) return false

      return x.endsWith('.js')
    }),
    mapAsync(async x => {
      const { name } = parse(x)

      const shouldSkip =
        x.includes('internals') ||
        x.includes('benchmarks') ||
        !rambdaMethods.includes(name) &&
          !rambdaxMethodsAsInternals.includes(name)

      if (shouldSkip) return

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
