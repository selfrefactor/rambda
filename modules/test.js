
export default function test (regex, str) {
  if (str === undefined) {
    return strHolder => test(regex, strHolder)
  }

  return str.search(regex) !== -1
}
