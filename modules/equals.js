import type from './type'

export default function equals (a, b) {
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
