import { curryN } from './curryN.js'

export default function _concat(set1, set2){
  set1 = set1 || []
  set2 = set2 || []
  let idx
  const len1 = set1.length
  const len2 = set2.length
  const result = []

  idx = 0
  while (idx < len1){
    result[ result.length ] = set1[ idx ]
    idx += 1
  }
  idx = 0
  while (idx < len2){
    result[ result.length ] = set2[ idx ]
    idx += 1
  }

  return result
}

export function addIndex(originalFunction){
  return curryN(originalFunction.length, function (){
    let idx = 0
    const origFn = arguments[ 0 ]
    const list = arguments[ arguments.length - 1 ]
    const args = Array.prototype.slice.call(arguments, 0)
    args[ 0 ] = function (){
      const result = origFn.apply(this, _concat(arguments, [ idx, list ]))
      idx += 1

      return result
    }

    return originalFunction.apply(this, args)
  })
}
export function addIndexRight(originalFunction){
  return curryN(originalFunction.length, function (){
    const origFn = arguments[ 0 ]
    const list = arguments[ arguments.length - 1 ]
    let idx = list.length - 1
    const args = Array.prototype.slice.call(arguments, 0)
    args[ 0 ] = function (){
      const result = origFn.apply(this, _concat(arguments, [ idx, list ]))
      idx -= 1

      return result
    }

    return originalFunction.apply(this, args)
  })
}
