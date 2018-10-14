export default function complement (fn) {
  return input => !fn(input)
}
