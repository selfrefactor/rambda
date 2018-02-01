import omit from './omit'

export default function dissoc (prop, obj) {
  if(arguments.length === 1){
    
    return objHolder => dissoc(prop, objHolder)
  }
  if (obj === null || obj === undefined) {
    return undefined
  }
  const willReturn = {}

  for (const key in obj) {
    if (key !== `${prop}`) {
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}
