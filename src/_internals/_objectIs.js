export function _objectIs(a, b){
  if (a === b){
    return a !== 0 || 1 / a === 1 / b
  }

  return a !== a && b !== b
}

export default Object.is || _objectIs
