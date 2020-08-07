import { includes } from './includes'

export function union(x, y){
  if (arguments.length === 1) return _y => union(x, _y)

  const toReturn = x.slice()

  y.forEach(yInstance => {
    if (!includes(yInstance, x)) toReturn.push(yInstance)
  })

  return toReturn
}
