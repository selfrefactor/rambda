import baseSlice from './internal/baseSlice'
import curry from './internal/curry'

function takeLast (takeNumber, a) {
  const len = a.length
  takeNumber = takeNumber > len ?
    len :
    takeNumber

  if (typeof a === 'string') {
    return a.slice(len - takeNumber)
  }
  takeNumber = len - takeNumber

  return baseSlice(a, takeNumber, len)
}

export default curry(takeLast)
