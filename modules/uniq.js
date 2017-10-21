import contains from './contains'

export default function uniq (arr) {
  let index = -1
  const willReturn = []

  while (++index < arr.length) {
    const value = arr[ index ]

    if (!contains(value, willReturn)) {
      willReturn.push(value)
    }
  }

  return willReturn
}
