import fdir from 'fdir'
import { copy, outputFile } from 'fs-extra'
import { parse, resolve } from 'path'
import { filter, mapAsync, pipedAsync } from 'rambdax'

import * as R from '../../rambda.js'
import { createExportedTypings } from './create-exported-typings'

async function createMainFile({ allMethods, ramdaMethods, dir }){
  const content = [ ...allMethods, ...ramdaMethods ]
    .map(x => `export * from './src/${ x }'`)
    .join('\n')

  await outputFile(`${ dir }/rambdax.js`, content)
}

async function rambdaxBuildStep(){
  const sourceFiles = resolve(__dirname, '../../source')
  const dir = resolve(__dirname, '../../../rambdax')
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
