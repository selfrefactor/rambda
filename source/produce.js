import { map } from './map.js'
import { type } from './type.js'

export function produce(rules, input){
  if (arguments.length === 1){
    return _input => produce(rules, _input)
  }

  return map(singleRule =>
    type(singleRule) === 'Object' ?
      produce(singleRule, input) :
      singleRule(input),
  rules)
}
