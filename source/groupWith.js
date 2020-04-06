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
    const initialState = toReturn.length === 0
    const lastCall = i === list.length - 1

    if (initialState){
      if (okPredicate){
        if (lastCall){
          toReturn.push([ ...holder, prev, current ])

          return current
        }

        holder.push(prev)

        return current
      }

      if (lastCall){
        toReturn.push([ ...holder, prev ])
        toReturn.push([ current ])

        return current
      }

      toReturn.push([ ...holder, prev ])
      holder = []

      return current
    }

    if (lastCall){
      if (okPredicate){
        toReturn.push([ ...holder, prev, current ])

        return current
      }

      if (holderIsEmpty){
        toReturn.push([ prev ])
        toReturn.push([ current ])

        return current
      }

      toReturn.push([ ...holder, prev ])
      toReturn.push([ current ])

      return current
    }

    if (okPredicate){
      holder.push(current)

      return current
    }

    if (holderIsEmpty){
      toReturn.push([ prev ])

      return current
    }

    toReturn.push([ ...holder, prev ])
    holder = []

    return current
  }, undefined)

  return toReturn
}
