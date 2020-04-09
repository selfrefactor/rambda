import { mapToObjectAsync } from './rambda-specs.js'
import { getMethods } from '../extract-from-typings/get-methods'
import {readFile, existsSync} from 'fs-extra'
import { resolve } from 'path'

export async function typingsTests(){
  return mapToObjectAsync ( async method => {
    const filePath = resolve(
      __dirname, 
      `../../../source/${method}-spec.ts`
    )
    if(!existsSync(filePath)) return false
    const rambdaSpec = await readFile(filePath)

    return { [ method ] : rambdaSpec.toString() }
  }, getMethods())
}
