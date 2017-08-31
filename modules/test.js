import curry from './internal/curry'

function test (regex, str) {
  return str.search(regex) !== -1
}

export default curry(test)
