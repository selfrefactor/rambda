import baseSlice from './internal/baseSlice'

export default function init (a) {
  if (typeof a === 'string') {
    return a.slice(0, -1)
  }

  return a.length ?
    baseSlice(a, 0, -1) :
    []
}
