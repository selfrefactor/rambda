export default function type (a) {
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
