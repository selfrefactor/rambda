import { is } from './is'

/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
export function propIs(type, name, obj){
  if (arguments.length === 2) return _obj => propIs(type, name, _obj)
  if (arguments.length === 1) return (_name, _obj) => propIs(type, _name, _obj)

  return is(type, obj[ name ])
}
