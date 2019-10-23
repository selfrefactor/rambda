/**
 * Gives a single-word string type description
 *
 * @func
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} input The inputue to test
 * @return {String}
 * @example
 *
 *      R.type(async () => {}); //=> "Async"
 *      R.type(Promise('foo')); //=> "Promise"
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(Number('foo')); //=> "NaN"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
export function type(input){
  const typeOf = typeof input
  const asStr = input && input.toString ? input.toString() : ''

  if (input === null){
    return 'Null'
  } else if (input === undefined){
    return 'Undefined'
  } else if (typeOf === 'boolean'){
    return 'Boolean'
  } else if (typeOf === 'number'){
    return Number.isNaN(input) ? 'NaN' : 'Number'
  } else if (typeOf === 'string'){
    return 'String'
  } else if (Array.isArray(input)){
    return 'Array'
  } else if (input instanceof RegExp){
    return 'RegExp'
  }

  if ([ 'true', 'false' ].includes(asStr)) return 'Boolean'
  if (!Number.isNaN(Number(asStr))) return 'Number'
  if (asStr.startsWith('async')) return 'Async'
  if (asStr === '[object Promise]') return 'Promise'
  if (typeOf === 'function') return 'Function'
  if (input instanceof String) return 'String'

  return 'Object'
}
