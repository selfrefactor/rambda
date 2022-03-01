// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
export function _objectIs(a, b){
  // SameValue algorithm
  if (a === b){
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b
  }

  // Step 6.a: NaN === NaN
  return a !== a && b !== b
}

export default Object.is || _objectIs
