import { without } from './without'

  test('should return a new list without values in the first argument ', () => {
    const itemsToOmit = [ 'A', 'B', 'C' ]
    const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

    expect(without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  })
