import curry from './internal/curry'

function match (regex, str) {
  const willReturn = str.match(regex)

  return willReturn === null ?
    [] :
    willReturn
}

export default curry(match)
