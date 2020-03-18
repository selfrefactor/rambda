import { type } from './type'

export function mergeDeep(target, source){
  if (arguments.length === 1){
    return sourceHolder => mergeDeep(target, sourceHolder)
  }
  const willReturn = JSON.parse(JSON.stringify(target))
  Object.keys(source).forEach(key => {
    if (type(source[ key ]) === 'Object'){
      if (type(target[ key ]) === 'Object'){
        willReturn[ key ] = mergeDeep(target[ key ],
          source[ key ])
      } else {
        willReturn[ key ] = source[ key ]
      }
    } else {
      willReturn[ key ] = source[ key ]
    }
  })

  return willReturn
}
