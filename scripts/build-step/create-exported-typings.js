import { outputFile } from 'fs-extra'
import { resolve } from 'path'
import { map, replace, trim } from 'rambdax'

import { getRambdaData, getRambdaxData, intro } from '../utils'
const fixToolbeltImport = replace('../_ts-toolbelt', './_ts-toolbelt')

function attachExports({ methodName, allTypings }){
  return allTypings
    .split('\n')
    .map(line =>
      line.startsWith(methodName) ? `export function ${ line }` : line)
    .join('\n')
}

/**
 * Retrieves the values at given paths of an object.
 */
export async function createExportedTypings(withRambdax = false){
  let toSave = intro

  const applyForSingleMethod = (x, methodName) => {
    const allTypings = attachExports({
      methodName,
      allTypings : x.allTypings,
    })

    if (!x.explanation){
      return toSave += `\n${ allTypings }\n`
    }

    const explanation = x.explanation
      .split('\n')
      .map(trim)
      .map(a => ` * ${ a }`)
      .join('\n')

    const methodData = `/**\n${ explanation }\n */\n${ allTypings }`

    return toSave += `\n${ methodData }\n`
  }

  const methodsData = withRambdax ?
    await getRambdaxData() :
    await getRambdaData()

  map(applyForSingleMethod, methodsData)

  const output = withRambdax ?
    resolve(__dirname, '../../../rambdax/index.d.ts') :
    resolve(__dirname, '../../index.d.ts')

  const finalVersion = fixToolbeltImport(toSave)
  await outputFile(output, finalVersion)

  return finalVersion
}
