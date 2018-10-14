function flatMap (fn, xs) {
  if(arguments.length === 1){
  
    return xsHolder => flatMap(fn, xsHolder)
  }

  return [].concat(...xs.map(fn))
}

test('maps then flattens one level', () => {
  const duplicate = n => [n, n]
  expect(flatMap(duplicate, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('maps then flattens one level - curry', () => {
  const duplicate = n => [n, n]
  expect(flatMap(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('flattens only one level', () => {
  const nest = n => [[n]]
  expect(flatMap(nest, [1, 2, 3])).toEqual([[1], [2], [3]])
})
