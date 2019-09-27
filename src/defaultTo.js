function flagIs(inputArgument){
  return inputArgument === undefined ||
    inputArgument === null ||
    Number.isNaN(inputArgument) === true
}

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} defaultArgument The default value.
 * @param {b} inputArgument `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
export function defaultTo(defaultArgument, ...inputArgument){
  if (arguments.length === 1){
    return _inputArgument => defaultTo(defaultArgument, _inputArgument)
  } else if (arguments.length === 2){
    return flagIs(inputArgument[ 0 ]) ? defaultArgument : inputArgument[ 0 ]
  }

  const limit = inputArgument.length - 1
  let len = limit + 1
  let ready = false
  let holder

  while (!ready){
    const instance = inputArgument[ limit - len + 1 ]

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
