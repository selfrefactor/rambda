export function where(conditions, obj){
  if (obj === undefined){
    return objHolder => where(conditions, objHolder)
  }
  let flag = true
  for (const prop in conditions){
    const result = conditions[ prop ](obj[ prop ])
    if (flag && result === false){
      flag = false
    }
  }

  return flag
}
