import curryThree from './internal/curryThree'

function propEq (key, val, obj) {
  return obj[ key ] === val
}

export default curryThree(propEq)
