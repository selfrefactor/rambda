function flagIs(inputArguments){
  return inputArguments === undefined ||
    inputArguments === null ||
    Number.isNaN(inputArguments) === true
}

/**
 * Returns the last argument which is neither `null`, `undefined` nor `NaN`
 * 
 * @func
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} defaultArgument The default value.
 * @param {b} inputArguments `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = ;
 *
 *      R.defaultTo(42, null, undefined, Number('foo'));  //=> 42
 *      R.defaultTo(42, null, undefined, Number('foo'), 1);  //=> 1 
 *      R.defaultTo(42, 1);  //=> 1
 *      R.defaultTo(42, false);  //=> 42
 */
export function defaultTo(defaultArgument, ...inputArguments){
  if (arguments.length === 1){
    return _inputArguments => defaultTo(defaultArgument, _inputArguments)
  } else if (arguments.length === 2){
    return flagIs(inputArguments[ 0 ]) ? defaultArgument : inputArguments[ 0 ]
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

  return holder === undefined ?
    defaultArgument :
    holder
}
