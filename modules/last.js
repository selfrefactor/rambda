export default function last (a) {
  if (typeof a === 'string') {
    return a[ a.length - 1 ] || ''
  }

  return a[ a.length - 1 ]
}
