export function tally(list) {
  const willReturn = {}
  list.forEach((item) => {
    willReturn[item] = (willReturn[item] || 0) + 1
  })

  return willReturn
}
