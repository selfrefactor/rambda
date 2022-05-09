import { compose } from './compose.js'
import { map } from './map.js'
import { replace } from './replace.js'
import { sort } from './sort.js'
import { take } from './take.js'
import { type } from './type.js'

const cache = {}

const normalizeObject = obj => {
  const sortFn = (a, b) => a > b ? 1 : -1
  const willReturn = {}
  compose(map(prop => willReturn[ prop ] = obj[ prop ]),
    sort(sortFn))(Object.keys(obj))

  return willReturn
}

const stringify = a => {
  if (type(a) === 'String'){
    return a
  } else if ([ 'Function', 'Async' ].includes(type(a))){
    const compacted = replace(
      /\s{1,}/g, ' ', a.toString()
    )

    return replace(
      /\s/g, '_', take(15, compacted)
    )
  } else if (type(a) === 'Object'){
    return JSON.stringify(normalizeObject(a))
  }

  return JSON.stringify(a)
}

const generateProp = (fn, ...inputArguments) => {
  let propString = ''
  inputArguments.forEach(inputArgument => {
    propString += `${ stringify(inputArgument) }_`
  })

  return `${ propString }${ stringify(fn) }`
}
// with weakmaps
export function memoize(fn, ...inputArguments){
  if (arguments.length === 1){
    return (...inputArgumentsHolder) => memoize(fn, ...inputArgumentsHolder)
  }

  const prop = generateProp(fn, ...inputArguments)
  if (prop in cache) return cache[ prop ]

  if (type(fn) === 'Async'){
    return new Promise(resolve => {
      fn(...inputArguments).then(result => {
        cache[ prop ] = result
        resolve(result)
      })
    })
  }

  const result = fn(...inputArguments)
  cache[ prop ] = result

  return result
}
