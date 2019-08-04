import { defaultTo } from './defaultTo'

/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @category Object
 * @param {*} defaultValue The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const theWall = { mother: 'Waters', comfortablyNumb: 'Gilmour/Waters' }
 *      const authorOfWishYouWereHere = R.prop('wishYouWereHere')
 *      const authorOfAtomHeartMother = R.propOr('Pink Floyd', 'atomHeartMother')
 *
 *      authorOfWishYouWereHere(theWall)  //=> undefined
 *      authorOfAtomHeartMother(theWall) //=> 'Pink Floyd'
 */
export function propOr(defaultValue, p, obj){
  if (arguments.length === 2) return _obj => propOr(defaultValue, p, _obj)
  if (arguments.length === 1) return (_p, _obj) => propOr(defaultValue, _p, _obj)

  if (!obj) return defaultValue

  return defaultTo(
    defaultValue,
    obj[ p ]
  )
}
