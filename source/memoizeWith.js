export function memoizeWith(keyGen, fn){
  if (arguments.length === 1){
    return _fn => memoizeWith(keyGen, _fn)
  }
  const cache = new Map()

  return function (){
    const key = keyGen.apply(this, arguments)
    if (!cache.has(key)){
      cache.set(key, fn.apply(this, arguments))
    }

    return cache.get(key)
  }
}
