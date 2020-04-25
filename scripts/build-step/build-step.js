import fdir from 'fdir'
import { copy, outputFile, readJson, remove as removeFS, outputJson } from 'fs-extra'
import { parse, resolve } from 'path'
import { filter, mapAsync, pipedAsync, pick } from 'rambdax'
import {devDependencies} from '../../package.json'
import * as R from '../../rambda.js'
import { createExportedTypings } from './create-exported-typings'

async function createMainFile({ allMethods, ramdaMethods, dir }){
  const content = [ ...allMethods, ...ramdaMethods ]
    .map(x => `export * from './src/${ x }'`)
    .join('\n')

  await outputFile(`${ dir }/rambdax.js`, content)
}

async function rambdaxBuildStep(){
  const buildDeps = [
    "@babel/core",
"@babel/plugin-proposal-object-rest-spread",
"@babel/preset-env",
"rollup",
"rollup-plugin-babel",
"rollup-plugin-cleanup",
"rollup-plugin-commonjs",
"rollup-plugin-json",
"rollup-plugin-node-resolve",
"rollup-plugin-replace",
"rollup-plugin-sourcemaps"
  ]

  const rambdaxDeps = pick(buildDeps, devDependencies)
  const tsToolbelt = resolve(__dirname, '../../_ts-toolbelt')
  const sourceFiles = resolve(__dirname, '../../source')
  const dir = resolve(__dirname, '../../../rambdax')
  const tsToolbeltOutput = `${ dir }/_ts-toolbelt`
  const packageJsonOutput = `${ dir }/package.json`
  const packageJson = await readJson(packageJsonOutput)
  const newPackageJson = {...packageJson, devDependencies: rambdaxDeps}
  
  await outputJson(packageJsonOutput, newPackageJson, {spaces:2})
  await removeFS(tsToolbeltOutput)
  await copy(tsToolbelt, tsToolbeltOutput)

  const allMethods = []
  const ramdaMethods = Object.keys(R)

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

export async function buildStep(withRambdax = false){
  await createExportedTypings(withRambdax)

  if (withRambdax) await rambdaxBuildStep()
}
