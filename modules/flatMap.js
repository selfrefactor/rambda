export default function flatMap (fn, xs) {
  switch (arguments.length) {
    case 0:
      return flatMap
    case 1:
      return (xs) => flatMap(fn, xs)
    default:
      return [].concat(...xs.map(fn))
  }
}
