import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { mapToObject } from 'rambdax'

import { getMethods } from '../extract-from-typings/get-methods'

export function failedRamdaTests(){
  const base = resolve(__dirname, '../../run-ramda-specs/failing_tests/')

  return mapToObject(method => {
    const maybePath = `${ base }/${ method }.js`
    if (!existsSync(maybePath)) return false
    const failingSpecs = readFileSync(maybePath).toString()

    return { [ method ] : failingSpecs }
  })(getMethods())
}
