export function grep(regexp) {
  return (list) => list.filter((item) => item.search(regexp) !== -1)
}
