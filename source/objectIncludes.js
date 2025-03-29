import { equals } from './equals.js'
import { filterObject } from './filterObject.js'

export function objectIncludes(condition) {
  return obj => {
    const result = filterObject((conditionValue, conditionProp) =>
      equals(conditionValue)(obj[conditionProp]),
    )(condition)

    return Object.keys(result).length === Object.keys(condition).length
  }
}
