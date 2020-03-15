export function splitEvery(n, list){
  if (arguments.length === 1) return _list => splitEvery(n, _list)

  if (n < 1) throw new Error('First argument to splitEvery must be a positive integer')
  const willReturn = []
  let counter = 0

  while (counter < list.length){
    willReturn.push(list.slice(counter, counter += n))
  }

  return willReturn
}
