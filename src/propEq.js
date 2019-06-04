/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.whereEq`](#whereEq).
 *
 * @func
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} key
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      const kids = [abby, fred, rusty, alois];
 *      const hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
export function propEq(key, val, obj){
  if (val === undefined){
    return (_val, _obj) => propEq(key, _val, _obj)
  } else if (obj === undefined){
    return _obj => propEq(key, val, _obj)
  }

  return obj[ key ] === val
}
