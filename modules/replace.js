import curryThree from './internal/curryThree'

function replace (regex, replacer, str) {
  return str.replace(regex, replacer)
}

export default curryThree(replace)
