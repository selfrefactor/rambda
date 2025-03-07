import { isArray as isArrayMethod } from './_internals/isArray.js'

export function dropWhile(predicate) {
	return iterable => {
  const isArray = isArrayMethod(iterable)
  if (!isArray && typeof iterable !== 'string') {
    throw new Error('`iterable` is neither list nor a string')
  }

  const toReturn = []
  let counter = 0

  while (counter < iterable.length) {
    const item = iterable[counter++]
    if (!predicate(item)) {
      toReturn.push(item)
      break
    }
  }

  while (counter < iterable.length) {
    toReturn.push(iterable[counter++])
  }

  return isArray ? toReturn : toReturn.join('')
}
}
