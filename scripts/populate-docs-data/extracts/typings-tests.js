import { existsSync, readFile } from 'fs-extra'
import { resolve } from 'path'

import { mapToObjectAsync } from '../../../source/mapToObjectAsync'
import { getMethods } from '../extract-from-typings/get-methods'

export async function typingsTests(withRambdax){
  return mapToObjectAsync(async method => {
    const filePath = resolve(__dirname, `../../../source/${ method }-spec.ts`)
    if (!existsSync(filePath)) return false
    const rambdaSpec = await readFile(filePath)

    return { [ method ] : rambdaSpec.toString().trim() }
  }, getMethods(withRambdax))
}
