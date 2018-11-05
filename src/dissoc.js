export function dissoc(prop, obj) {
  if (arguments.length === 1) {
    return objHolder => dissoc(prop, objHolder)
  }

  if (obj === null || obj === undefined) {
    return {}
  }

  const willReturn = {}
  for (const p in obj) {
    willReturn[ p ] = obj[ p ]
  }
  delete willReturn[ prop ]

  return willReturn
}
