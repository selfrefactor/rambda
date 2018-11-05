import { any } from './any'

export function uniqWith(fn, arr) {
  if (arguments.length === 1)
    return arrHolder => uniqWith(fn, arrHolder)

  let index = -1
  const len = arr.length
  const willReturn = []

  while (++index < len) {
    const value = arr[ index ]
    const flag = any(
      willReturnInstance => fn(value, willReturnInstance),
      willReturn
    )

    if (!flag) {
      willReturn.push(value)
    }
  }

  return willReturn
}
