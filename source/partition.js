function whenObject(predicate, input){
  const yes = {}
  const no = {}
  Object.entries(input).forEach(([ prop, value ]) => {
    if (predicate(value, prop)){
      yes[ prop ] = value
    } else {
      no[ prop ] = value
    }
  })

  return [ yes, no ]
}

export function partition(predicate, input){
  if (arguments.length === 1){
    return listHolder => partition(predicate, listHolder)
  }
  if (!Array.isArray(input)) return whenObject(predicate, input)

  const yes = []
  const no = []
  let counter = -1

  while (counter++ < input.length - 1){
    if (predicate(input[ counter ], counter)){
      yes.push(input[ counter ])
    } else {
      no.push(input[ counter ])
    }
  }

  return [ yes, no ]
}
