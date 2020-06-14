import {
  copy,
  outputFile,
  outputJson,
  readJson,
  remove as removeFS,
} from 'fs-extra'
import { scanFolder } from 'helpers-fn'
import { parse, resolve } from 'path'
import { filter, mapAsync, pick, pipedAsync, remove } from 'rambdax'

import { devDependencies } from '../../package'
import { getRambdaMethods } from '../utils'
import { createExportedTypings } from './create-exported-typings'

// Rambdax methods which are used in creation of Rambda method
// ============================================
const rambdaxMethodsAsInternals = [ 'isFunction' ]

async function createMainFile({ allMethods, dir }){
  const content = allMethods
    .map(x => `export * from './src/${ x }'`)
    .join('\n')

  await outputFile(`${ dir }/rambda.js`, content)
}

async function createMainFileRambdax({ allMethods, rambdaMethods, dir }){
  const content = [ ...allMethods, ...rambdaMethods ]
    .map(x => `export * from './src/${ x }'`)
    .join('\n')

  await outputFile(`${ dir }/rambdax.js`, content)
}

async function rambdaxBuildStep(){
  const rambdaxOutput = resolve(__dirname, '../../../rambdax/src')
  await removeFS(rambdaxOutput)

  const rambdaMethods = await getRambdaMethods()
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
    async dir => scanFolder({ folder : dir }),
    filter(x => {
      if (x.endsWith('.spec.js')) return false
      if (x.includes('benchmark')) return false

      return x.endsWith('.js')
    }),
    mapAsync(async x => {
      const { name } = parse(x)
      const isValidMethod =
        !x.includes('internals') && !rambdaMethods.includes(name)
      if (isValidMethod) allMethods.push(name)

      const [ , fileName ] = x.split('source/')
      await copy(x, `${ dir }/src/${ fileName }`)
    })
  )

  await createMainFileRambdax({
    allMethods,
    rambdaMethods,
    dir,
  })
}

async function rambdaBuildStep(){
  const rambdaMethods = await getRambdaMethods()
  const sourceFileDir = resolve(__dirname, '../../source')
  const output = resolve(__dirname, '../../src')

  await pipedAsync(
    sourceFileDir,
    async dir => scanFolder({ folder : dir }),
    filter(x => {
      if (x.endsWith('.spec.js')) return false

      return x.endsWith('.js')
    }),
    mapAsync(async x => {
      const { name } = parse(x)

      const shouldSkip =
        x.includes('benchmarks') ||
        !rambdaMethods.includes(name) &&
          !rambdaxMethodsAsInternals.includes(name)

      if (shouldSkip && !x.includes('internals')) return

      const [ , fileName ] = x.split('source/')
      await copy(x, `${ output }/${ fileName }`)

      return x.includes('internals') ? undefined : remove('.js', fileName)
    }),
    filter(Boolean),
    filter(x => !rambdaxMethodsAsInternals.includes(x)),
    async allMethods => {
      const dir = resolve(__dirname, '../../')
      await createMainFile({
        allMethods,
        dir,
      })
    }
  )
}

export async function buildStep({ withRambdax }){
  await createExportedTypings(withRambdax)

  if (withRambdax) await rambdaxBuildStep()
  await rambdaBuildStep()
}
