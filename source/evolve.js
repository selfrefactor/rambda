import { mapObject } from './mapObject.js'
import { type } from './type.js'

export function evolveFn(rules, obj) {
  return mapObject((x, prop) => {
    if (type(x) === 'Object') {
      const typeRule = type(rules[prop])
      if (typeRule === 'Function') {
        return rules[prop](x)
      }
      if (typeRule === 'Object') {
        return evolveFn(rules[prop], x)
      }

      return x
    }
    if (type(rules[prop]) === 'Function') {
      return rules[prop](x)
    }

    return x
  })(obj)
}

export function evolve(rules) {
  return obj => evolveFn(rules, obj)
}
