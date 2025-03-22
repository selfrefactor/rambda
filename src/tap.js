export function tap(fn) {
  return x => {
    fn(x)

    return x
  }
}
