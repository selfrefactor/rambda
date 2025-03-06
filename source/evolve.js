import { mapObject } from './mapObject.js'
import { type } from './type.js'

export function evolve(rules) {
	return obj => mapObject((x, prop) => {
    if (type(x) === 'Object') {
      const typeRule = type(rules[prop])
      if (typeRule === 'Function') {
        return rules[prop](x)
      }
      if (typeRule === 'Object') {
        return evolve(rules[prop], x)
      }

      return x
    }
    if (type(rules[prop]) === 'Function') {
      return rules[prop](x)
    }

    return x
  })(obj)
}
