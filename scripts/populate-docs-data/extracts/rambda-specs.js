import { mapAsync } from 'rambdax'
import { getMethods } from '../extract-from-typings/get-methods'
import {readFile, existsSync} from 'fs-extra'
import { resolve } from 'path'

async function mapToObjectAsync(iterable, list){
  let toReturn = {}
  const innerIterable = async (x) => {
    const intermediateResult = await iterable(x)
    if(intermediateResult === false) return
    toReturn = {...toReturn, ...intermediateResult}
  }

  await mapAsync(innerIterable, list)
  return toReturn
}

export async function rambdaSpecs(){
  return mapToObjectAsync(async method => {
    const filePath = resolve(
      __dirname, 
      `../../../source/${method}.spec.js`
    )
    if(!existsSync(filePath)) return false
    const rambdaSpec = await readFile(filePath)

    return { [ method ] : rambdaSpec.toString() }
  }, getMethods())
}
