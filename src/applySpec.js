// recursively traverse the given spec object to find the highest arity function
function __findHighestArity(spec, max = 0){
  for (const key in spec){
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    if (typeof spec[ key ] === 'object'){
      max = Math.max(max, __findHighestArity(spec[ key ]))
    }

    if (typeof spec[ key ] === 'function'){
      max = Math.max(max, spec[ key ].length)
    }
  }

  return max
}

function __filterUndefined(){
  const defined = []
  let i = 0
  const l = arguments.length
  while (i < l){
    if (typeof arguments[ i ] === 'undefined') break
    defined[ i ] = arguments[ i ]
    i++
  }

  return defined
}

export function handleArrayOfFunctions(obj){
  const keys = Object.keys(obj)
  const toReturn = Array(keys.length)

  keys.forEach(x => {
    toReturn[ x ] = obj[ x ]
  })

  return toReturn
}

function __applySpecWithArity(
  spec, arity, cache
){
  const remaining = arity - cache.length

  if (remaining === 1) return x => __applySpecWithArity(
    spec, arity, __filterUndefined(...cache, x)
  )
  if (remaining === 2)
    return (x, y) => __applySpecWithArity(
      spec, arity, __filterUndefined(
        ...cache, x, y
      )
    )
  if (remaining === 3)
    return (
      x, y, z
    ) => __applySpecWithArity(
      spec, arity, __filterUndefined(
        ...cache, x, y, z
      )
    )
  if (remaining === 4)
    return (
      x, y, z, a
    ) =>
      __applySpecWithArity(
        spec, arity, __filterUndefined(
          ...cache, x, y, z, a
        )
      )
  if (remaining > 4)
    return (...args) => __applySpecWithArity(
      spec, arity, __filterUndefined(...cache, ...args)
    )

  const ret = {}

  // apply callbacks to each property in the spec object
  for (const key in spec){
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    // apply the spec recursively
    if (typeof spec[ key ] === 'object'){
      ret[ key ] = __applySpecWithArity(
        spec[ key ], arity, cache
      )
      continue
    }

    // apply spec to the key
    if (typeof spec[ key ] === 'function'){
      ret[ key ] = spec[ key ](...cache)
    }
  }

  return Array.isArray(spec) ? handleArrayOfFunctions(ret) : ret
}

export function applySpec(spec, ...args){
  // get the highest arity spec function, cache the result and pass to __applySpecWithArity
  const arity = __findHighestArity(spec)

  if (arity === 0){
    return () => ({})
  }
  const toReturn = __applySpecWithArity(
    spec, arity, args
  )

  return toReturn
}
