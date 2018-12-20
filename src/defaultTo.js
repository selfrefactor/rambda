function flagIs(inputArgument){
  return inputArgument === undefined ||
    inputArgument === null ||
    Number.isNaN(inputArgument) === true
}

export function defaultTo(defaultArgument, ...inputArgument) {
  if (arguments.length === 1) {
    return inputArgumentHolder =>
      defaultTo(defaultArgument, inputArgumentHolder)
  }
  if(arguments.length === 2){
    return flagIs(inputArgument[0]) ?
      defaultArgument :
      inputArgument[0]
  }

  const limit = inputArgument.length - 1
  let len = limit + 1
  let ready = false
  let holder

  while(!ready){
    const instance = inputArgument[limit - len  + 1]

    if(len === 0){
      ready = true
    }else if(flagIs(instance)){
      len = len - 1
    }else{
      holder = instance
      ready = true
    }
  }

  return holder === undefined ?
    defaultArgument :
    holder
}

