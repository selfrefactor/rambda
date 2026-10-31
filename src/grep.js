export function grep(regexp) {
  return (list) => list.filter((item) => regexp.test(item))
}
