export function invert(obj) {
  const willReturn = {}
  Object.keys(obj).forEach((key) => {
    willReturn[obj[key]] = key
  })

  return willReturn
}
