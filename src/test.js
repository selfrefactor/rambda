export function test(pattern) {
  return str => str.search(pattern) !== -1
}
