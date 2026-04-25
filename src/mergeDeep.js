import { type } from './type.js'

const isObject = (x) => type(x) === 'Object'

function mergeDeepFn(source, objectWithNewProps) {
  return [source, objectWithNewProps].reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeepFn(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export function mergeDeep(source) {
  return (objectWithNewProps) => mergeDeepFn(source, objectWithNewProps)
}
