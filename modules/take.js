import baseSlice from './internal/baseSlice'
import curry from './internal/curry'

function take (takeNumber, a) {
  if (typeof a === 'string') {
    return a.slice(0, takeNumber)
  }

  return baseSlice(a, 0, takeNumber)
}

export default curry(take)
