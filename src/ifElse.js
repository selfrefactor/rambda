/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
export function ifElse(condition, onTrue, onFalse){
  if (onTrue === undefined){
    return (_onTrue, _onFalse) => ifElse(condition, _onTrue, _onFalse)
  } else if (onFalse === undefined){
    return _onFalse => ifElse(condition, onTrue, _onFalse)
  }

  return input => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(input)

    if (conditionResult === true){
      return onTrue(input)
    }

    return onFalse(input)
  }
}
