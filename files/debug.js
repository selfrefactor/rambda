function type (a) {
  const typeOf = typeof a

  if (a === null) {
    return 'Null'
  } else if (a === undefined) {
    return 'Undefined'
  } else if (typeOf === 'boolean') {
    return 'Boolean'
  } else if (typeOf === 'number') {
    return 'Number'
  } else if (typeOf === 'string') {
    return 'String'
  } else if (Array.isArray(a)) {
    return 'Array'
  } else if (a instanceof RegExp) {
    return 'RegExp'
  }

  const asStr = a.toString()

  if (asStr.startsWith('async')) {
    return 'Async'
  } else if (asStr === '[object Promise]') {
    return 'Promise'
  } else if (asStr.includes('function') || asStr.includes('=>')) {
    return 'Function'
  }

  return 'Object'
}


function equals (a, b) {
  if (arguments.length === 1) {
    return bHolder => equals(a, bHolder)
  }

  if (a === b) {
    return true
  }
  const aType = type(a)

  if (aType !== type(b)) {
    return false
  }

  if (aType === 'Array') {
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    return aClone.sort().toString() === bClone.sort().toString()
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a)

    if (aKeys.length === Object.keys(b).length) {
      if (aKeys.length === 0) {
        return true
      }
      let flag = true

      aKeys.forEach(val => {
        if (flag) {
          const aValType = type(a[ val ])
          const bValType = type(b[ val ])

          if (aValType === bValType) {
            if (aValType === 'Object') {
              if (Object.keys(a[ val ]).length === Object.keys(b[ val ]).length) {
                if (Object.keys(a[ val ]).length !== 0) {
                  if (!equals(a[ val ], b[ val ])) {
                    flag = false
                  }
                }
              } else {
                flag = false
              }
            } else if (!equals(a[ val ], b[ val ])) {
              flag = false
            }
          } else {
            flag = false
          }
        }
      })

      return flag
    }
  }

  return false
}

const a = true
const b = false

const x = equals([a,b],[false,true]) 
console.log(x)