export function groupWith(predicate, list){
  if (!Array.isArray(list))
    throw new TypeError('list.reduce is not a function')

  const clone = list.slice()
  const toReturn = []
  let holder = []

  clone.reduce((
    prev, current, i
  ) => {
    if (i === 0) return current

    const okPredicate = predicate(prev, current)
    const holderIsEmpty = holder.length === 0
    const lastCall = i === list.length - 1

    if (okPredicate){
      if (holderIsEmpty) holder.push(prev)
      holder.push(current)
      if (lastCall) toReturn.push(holder)

      return current
    }

    if (holderIsEmpty){
      toReturn.push([ prev ])
      if (lastCall) toReturn.push([ current ])

      return current
    }

    toReturn.push(holder)
    if (lastCall) toReturn.push([ current ])
    holder = []

    return current
  }, undefined)

  return toReturn
}
