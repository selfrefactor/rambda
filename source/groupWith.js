export function groupWith(predicate, list){
  const toReturn = []
  let holder = []

  list.reduce((
    prev, current, i
  ) => {
    if (i > 0 && predicate(prev, current)){
      if (holder.length === 0){
        holder.push(prev)
        holder.push(current)
      } else {
        holder.push(current)
      }
    } else if (i > 0){
      if (holder.length === 0){
        toReturn.push([ prev ])
        if (i === list.length - 1) holder.push(current)
      } else {
        toReturn.push(holder)
        holder = []
      }
    }

    return current
  }, undefined)

  return holder.length === 0 ? toReturn : [ ...toReturn, holder ]
}
