import { equals } from './equals'
import { filter } from './filter'
import { type } from './type'

export function whereEq(rule, input){
  if (arguments.length === 1){
    return inputHolder => whereEq(rule, inputHolder)
  }
  if (type(input) !== 'Object') return false

  const result = filter((ruleValue, ruleProp) => equals(ruleValue, input[ ruleProp ]),
    rule)

  return Object.keys(result).length === Object.keys(rule).length
}
