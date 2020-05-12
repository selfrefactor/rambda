import { outputFile } from 'fs-extra'
import { resolve } from 'path'
import { remove, replace } from 'rambdax'

import { getOrigin } from '../populate-docs-data/constants.js'
import { extractExplanation } from '../populate-docs-data/extract-from-typings/extract-explanation'

const fixToolbeltImport = replace('../_ts-toolbelt', './_ts-toolbelt')

export async function createExportedTypings(withRambdax = false){
  let typescriptDefinitions = getOrigin(withRambdax)
  const explanations = extractExplanation()

  Object.keys(explanations).forEach(methodName => {
    const regex = new RegExp(`\/\*\nMethod: ${ methodName }(\n|[^@])+`, 'gm')
    const replacer = `\n\t${ explanations[ methodName ] }\n*/`

    const newContent = replace(
      regex, replacer, typescriptDefinitions
    )
    const cleaner = replace(
      '*/@SINGLE_MARKER', '*/', newContent
    )
    typescriptDefinitions = cleaner
  })

  const toSave = remove([ /\/\*\nMethod:(\n|[^@])+/gm, /@SINGLE_MARKER/g ],
    typescriptDefinitions)

  const output = withRambdax ?
    resolve(__dirname, '../../../rambdax/index.d.ts') :
    resolve(__dirname, '../../index.d.ts')

  await outputFile(output, fixToolbeltImport(toSave))
}
