import { mapToObject } from 'rambdax'

import allDifferences from '../../run-ramda-specs/allDifferences.json'
import { getMethods } from '../extract-from-typings/get-methods'

export function failedTestsCount(){
  return mapToObject(method => {
    const explanation = allDifferences[ method ]
    if (!explanation) return false

    return { [ method ] : explanation.count }
  })(getMethods())
}
