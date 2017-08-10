function ifElse(conditionFn, ifFn, elseFn){
  if(ifFn === undefined){
    return (ifFnHolder, elseFnHolder) => ifElse(conditionFn, ifFnHolder, elseFnHolder)
  }else if(elseFn === undefined){
    return elseFnHolder => ifElse(conditionFn, ifFn, elseFnHolder)
  }
  
  return input => {
    if(conditionFn(input) === true){
      return ifFn(input) 
    }
    return elseFn(input)
  }
}

module.exports = ifElse