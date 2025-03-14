import { cloneList } from './_internals/cloneList.js'
import { includes } from './includes.js'

export function union(x) {
  return y => {
    const toReturn = cloneList(x)

    y.forEach(yInstance => {
      if (!includes(yInstance)(x)) {
        toReturn.push(yInstance)
      }
    })

    return toReturn
  }
}
