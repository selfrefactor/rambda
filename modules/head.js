export default function head (a) {
  if (typeof a === 'string') {
    return a[ 0 ] || ''
  }

  return a[ 0 ]
}
