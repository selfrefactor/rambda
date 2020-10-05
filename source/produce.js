import { map } from './map'

export function produce(rules, input){
  if (arguments.length === 1){
    return _input => produce(rules, _input)
  }

  return map(singleRule => singleRule(input), rules)
}
