// Lodash's `set` method
// ============================================
const FUNC_ERROR_TEXT = 'Expected a function'

const HASH_UNDEFINED = '__lodash_hash_undefined__'

const INFINITY = 1 / 0,
  MAX_SAFE_INTEGER = 9007199254740991

const funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  symbolTag = '[object Symbol]'

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/,
  reLeadingDot = /^\./,
  rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g

const reRegExpChar = /[\\^$.*+?()[\]{}|]/g

const reEscapeChar = /\\(\\)?/g

const reIsHostCtor = /^\[object .+?Constructor\]$/

const reIsUint = /^(?:0|[1-9]\d*)$/

const freeGlobal =
  typeof global === 'object' && global && global.Object === Object && global

const freeSelf =
  typeof self === 'object' && self && self.Object === Object && self

const root = freeGlobal || freeSelf || Function('return this')()

function getValue(object, key){
  return object == null ? undefined : object[ key ]
}

function isHostObject(value){
  let result = false
  if (value != null && typeof value.toString !== 'function'){
    try {
      result = Boolean(String(value))
    } catch (e){}
  }

  return result
}

const arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype

const coreJsData = root[ '__core-js_shared__' ]

const maskSrcKey = (function (){
  const uid = (/[^.]+$/).exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '')

  return uid ? 'Symbol(src)_1.' + uid : ''
})()

const funcToString = funcProto.toString

const { hasOwnProperty } = objectProto

const objectToString = objectProto.toString

const reIsNative = RegExp('^' +
    funcToString
      .call(hasOwnProperty)
      .replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        '$1.*?') +
    '$')

const { Symbol } = root,
  { splice } = arrayProto

const Map = getNative(root, 'Map'),
  nativeCreate = getNative(Object, 'create')

const symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined

function Hash(entries){
  let index = -1,
    length = entries ? entries.length : 0

  this.clear()
  while (++index < length){
    const entry = entries[ index ]
    this.set(entry[ 0 ], entry[ 1 ])
  }
}

function hashClear(){
  this.__data__ = nativeCreate ? nativeCreate(null) : {}
}

function hashDelete(key){
  return this.has(key) && delete this.__data__[ key ]
}

function hashGet(key){
  const data = this.__data__
  if (nativeCreate){
    const result = data[ key ]

    return result === HASH_UNDEFINED ? undefined : result
  }

  return hasOwnProperty.call(data, key) ? data[ key ] : undefined
}

function hashHas(key){
  const data = this.__data__

  return nativeCreate ?
    data[ key ] !== undefined :
    hasOwnProperty.call(data, key)
}

function hashSet(key, value){
  const data = this.__data__
  data[ key ] = nativeCreate && value === undefined ? HASH_UNDEFINED : value

  return this
}

Hash.prototype.clear = hashClear
Hash.prototype.delete = hashDelete
Hash.prototype.get = hashGet
Hash.prototype.has = hashHas
Hash.prototype.set = hashSet

function ListCache(entries){
  let index = -1
  const length = entries ? entries.length : 0

  this.clear()
  while (++index < length){
    const entry = entries[ index ]
    this.set(entry[ 0 ], entry[ 1 ])
  }
}

function listCacheClear(){
  this.__data__ = []
}

function listCacheDelete(key){
  const data = this.__data__,
    index = assocIndexOf(data, key)

  if (index < 0){
    return false
  }
  const lastIndex = data.length - 1
  if (index == lastIndex){
    data.pop()
  } else {
    splice.call(
      data, index, 1
    )
  }

  return true
}

function listCacheGet(key){
  const data = this.__data__,
    index = assocIndexOf(data, key)

  return index < 0 ? undefined : data[ index ][ 1 ]
}

function listCacheHas(key){
  return assocIndexOf(this.__data__, key) > -1
}

function listCacheSet(key, value){
  const data = this.__data__,
    index = assocIndexOf(data, key)

  if (index < 0){
    data.push([ key, value ])
  } else {
    data[ index ][ 1 ] = value
  }

  return this
}

ListCache.prototype.clear = listCacheClear
ListCache.prototype.delete = listCacheDelete
ListCache.prototype.get = listCacheGet
ListCache.prototype.has = listCacheHas
ListCache.prototype.set = listCacheSet

function MapCache(entries){
  let index = -1
  const length = entries ? entries.length : 0

  this.clear()
  while (++index < length){
    const entry = entries[ index ]
    this.set(entry[ 0 ], entry[ 1 ])
  }
}

function mapCacheClear(){
  this.__data__ = {
    hash   : new Hash(),
    map    : new (Map || ListCache)(),
    string : new Hash(),
  }
}

function mapCacheDelete(key){
  return getMapData(this, key).delete(key)
}

function mapCacheGet(key){
  return getMapData(this, key).get(key)
}

function mapCacheHas(key){
  return getMapData(this, key).has(key)
}

function mapCacheSet(key, value){
  getMapData(this, key).set(key, value)

  return this
}

MapCache.prototype.clear = mapCacheClear
MapCache.prototype.delete = mapCacheDelete
MapCache.prototype.get = mapCacheGet
MapCache.prototype.has = mapCacheHas
MapCache.prototype.set = mapCacheSet

function assignValue(
  object, key, value
){
  const objValue = object[ key ]
  if (
    !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
    value === undefined && !(key in object)
  ){
    object[ key ] = value
  }
}

function assocIndexOf(array, key){
  let { length } = array
  while (length--){
    if (eq(array[ length ][ 0 ], key)){
      return length
    }
  }

  return -1
}

function baseIsNative(value){
  if (!isObject(value) || isMasked(value)){
    return false
  }
  const pattern =
    isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor

  return pattern.test(toSource(value))
}

function baseSet(
  object, path, value, customizer
){
  if (!isObject(object)){
    return object
  }
  path = isKey(path, object) ? [ path ] : castPath(path)

  let index = -1
  let nested = object
  const { length } = path
  const lastIndex = length - 1

  while (nested != null && ++index < length){
    let key = toKey(path[ index ]),
      newValue = value

    if (index != lastIndex){
      const objValue = nested[ key ]
      newValue = customizer ? customizer(
        objValue, key, nested
      ) : undefined
      if (newValue === undefined){
        newValue = isObject(objValue) ?
          objValue :
          isIndex(path[ index + 1 ]) ?
            [] :
            {}
      }
    }
    assignValue(
      nested, key, newValue
    )
    nested = nested[ key ]
  }

  return object
}

function baseToString(value){
  if (typeof value === 'string'){
    return value
  }
  if (isSymbol(value)){
    return symbolToString ? symbolToString.call(value) : ''
  }
  const result = String(value)

  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function castPath(value){
  return isArray(value) ? value : stringToPath(value)
}

function getMapData(map, key){
  const data = map.__data__

  return isKeyable(key) ?
    data[ typeof key === 'string' ? 'string' : 'hash' ] :
    data.map
}

function getNative(object, key){
  const value = getValue(object, key)

  return baseIsNative(value) ? value : undefined
}

function isIndex(value, length){
  length = length == null ? MAX_SAFE_INTEGER : length

  return (
    Boolean(length) &&
    (typeof value === 'number' || reIsUint.test(value)) &&
    value > -1 &&
    value % 1 == 0 &&
    value < length
  )
}

function isKey(value, object){
  if (isArray(value)){
    return false
  }
  const type = typeof value
  if (
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean' ||
    value == null ||
    isSymbol(value)
  ){
    return true
  }

  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    object != null && value in Object(object)
  )
}

function isKeyable(value){
  const type = typeof value

  return type == 'string' ||
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean' ?
    value !== '__proto__' :
    value === null
}

function isMasked(func){
  return Boolean(maskSrcKey) && maskSrcKey in func
}

var stringToPath = memoize(string => {
  string = toString(string)

  const result = []
  if (reLeadingDot.test(string)){
    result.push('')
  }
  string.replace(rePropName, (
    match, number, quote, string
  ) => {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match)
  })

  return result
})

function toKey(value){
  if (typeof value === 'string' || isSymbol(value)){
    return value
  }
  const result = String(value)

  return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

function toSource(func){
  if (func != null){
    try {
      return funcToString.call(func)
    } catch (e){}
    try {
      return String(func)
    } catch (e){}
  }

  return ''
}

function memoize(func, resolver){
  if (
    typeof func !== 'function' ||
    resolver && typeof resolver !== 'function'
  ){
    throw new TypeError(FUNC_ERROR_TEXT)
  }
  var memoized = function (){
    const args = arguments,
      key = resolver ? resolver.apply(this, args) : args[ 0 ],
      { cache } = memoized

    if (cache.has(key)){
      return cache.get(key)
    }
    const result = func.apply(this, args)
    memoized.cache = cache.set(key, result)

    return result
  }
  memoized.cache = new (memoize.Cache || MapCache)()

  return memoized
}

memoize.Cache = MapCache

function eq(value, other){
  return value === other || value !== value && other !== other
}

var { isArray } = Array

function isFunction(value){
  const tag = isObject(value) ? objectToString.call(value) : ''

  return tag == funcTag || tag == genTag
}

function isObject(value){
  const type = typeof value

  return Boolean(value) && (type == 'object' || type == 'function')
}

function isObjectLike(value){
  return Boolean(value) && typeof value === 'object'
}

function isSymbol(value){
  return (
    typeof value === 'symbol' ||
    isObjectLike(value) && objectToString.call(value) == symbolTag
  )
}

function toString(value){
  return value == null ? '' : baseToString(value)
}

export function set(
  object, path, value
){
  return object == null ? object : baseSet(
    object, path, value
  )
}
