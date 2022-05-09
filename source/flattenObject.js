import { type } from './type.js'

export function flattenObjectHelper(obj, accumulator = []){
  const willReturn = {}
  Object.keys(obj).forEach(key => {
    const typeIs = type(obj[ key ])
    if (typeIs === 'Object'){
      const [ flatResultValue, flatResultPath ] = flattenObjectHelper(obj[ key ],
        [ ...accumulator, key ])
      willReturn[ flatResultPath.join('.') ] = flatResultValue

      return
    } else if (accumulator.length > 0){
      const finalKey = [ ...accumulator, key ].join('.')
      willReturn[ finalKey ] = obj[ key ]

      return
    }
    willReturn[ key ] = obj[ key ]
  })
  if (accumulator.length > 0) return [ willReturn, accumulator ]

  return willReturn
}

export function transformFlatObject(obj){
  const willReturn = {}

  const transformFlatObjectFn = objLocal => {
    const willReturnLocal = {}
    Object.keys(objLocal).forEach(key => {
      const typeIs = type(objLocal[ key ])
      if (typeIs === 'Object'){
        transformFlatObjectFn(objLocal[ key ])

        return
      }
      willReturnLocal[ key ] = objLocal[ key ]
      willReturn[ key ] = objLocal[ key ]
    })

    return willReturnLocal
  }

  Object.keys(obj).forEach(key => {
    const typeIs = type(obj[ key ])
    if (typeIs === 'Object'){
      transformFlatObjectFn(obj[ key ], key)

      return
    }
    willReturn[ key ] = obj[ key ]
  })

  return willReturn
}

export function flattenObject(obj){
  const willReturn = {}

  Object.keys(obj).forEach(key => {
    const typeIs = type(obj[ key ])
    if (typeIs === 'Object'){
      const flatObject = flattenObjectHelper(obj[ key ])
      const transformed = transformFlatObject(flatObject)

      Object.keys(transformed).forEach(keyTransformed => {
        willReturn[ `${ key }.${ keyTransformed }` ] = transformed[ keyTransformed ]
      })
    } else {
      willReturn[ key ] = obj[ key ]
    }
  })

  return willReturn
}
