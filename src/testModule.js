export function test(regex, str) {
  if (arguments.length === 1)
    return strHolder => test(regex, strHolder)

  return str.search(regex) !== -1
}
