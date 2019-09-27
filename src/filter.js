function filterObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    if (fn(obj[ prop ], prop, obj)){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} fn
 * @param {Array} list
 * @return {Array} Filterable
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
export function filter(fn, list){
  if (arguments.length === 1) return _list => filter(fn, _list)

  if (list === undefined){
    return []
  }

  if (!Array.isArray(list)){
    return filterObject(fn, list)
  }

  let index = -1
  let resIndex = 0
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]

    if (fn(value, index)){
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}
