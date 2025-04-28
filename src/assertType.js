export function assertType(fn) {
  return (x) => {
    if (fn(x)) {
      return x
    }
    throw new Error('type assertion failed in R.assertType')
  }
}