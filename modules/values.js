export default function values (obj) {
  const willReturn = []

  for (const key in obj) {
    willReturn.push(obj[ key ])
  }

  return willReturn
}
