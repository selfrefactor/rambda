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

    if(aClone.toString() !== bClone.toString()){
      
      return false
    }
    let loopArrayFlag = true

    aClone.forEach((aCloneInstance, aCloneIndex)=>{
      if(loopArrayFlag){

        if(
          aCloneInstance !== bClone[aCloneIndex] &&
          !equals(aCloneInstance, bClone[aCloneIndex])
        ){
          loopArrayFlag = false 
        }

      }
    })

    return loopArrayFlag
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a)

    if (aKeys.length !== Object.keys(b).length) {

      return false
    }

    let loopObjectFlag = true
    aKeys.forEach(aKeyInstance => {
      if(loopObjectFlag){
        const aValue = a[ aKeyInstance ]
        const bValue = b[ aKeyInstance ]

        if(
          aValue !== bValue &&
          !equals(aValue, bValue)
        ){
          loopObjectFlag = false 
        }

      }
    })

    return loopObjectFlag
  }

  return false
}

  const objFirst = {a: {b: 1, c:1}}
  const objSecond = {a: {b: 2,c: 1}}

  const x = [10,objFirst, null, '', []]
  const y = [10,objSecond, null, '', []]

  const result = equals(x,y)
console.log(result)