function flagIs(inputArguments){
  return (
    inputArguments === undefined ||
    inputArguments === null ||
    Number.isNaN(inputArguments) === true
  )
}

export function defaultTo(defaultArgument, ...inputArguments){
  if (arguments.length === 1){
    return (..._inputArguments) =>
      defaultTo(defaultArgument, ..._inputArguments)
  }

  const limit = inputArguments.length - 1
  let len = limit + 1
  let ready = false
  let holder

  while (!ready){
    const instance = inputArguments[ limit - len + 1 ]

    if (len === 0){
      ready = true
    } else if (flagIs(instance)){
      len -= 1
    } else {
      holder = instance
      ready = true
    }
  }

  return holder === undefined ? defaultArgument : holder
}
