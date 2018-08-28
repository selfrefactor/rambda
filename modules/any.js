export default function any (fn, arr) {
  if (arguments.length === 1) { return arrHolder => any(fn, arrHolder) }

  let counter = 0
  while (counter < arr.length) {
    if (fn(arr[ counter ])) {
      return true
    }
    counter++
  }

  return false
}
