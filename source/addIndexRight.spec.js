import { addIndexRight } from './addIndexRight.js'
import { map } from './map.js'

test('happy', () => {
  function mapFn(fn, list){
    const willReturn = []
    list.forEach(item => {
      willReturn.push(fn(item))
    })

    return willReturn
  }
  const mapIndexed = addIndexRight(mapFn)
  const fn2 = (val, idx) => val + idx + 5
  expect(mapIndexed(fn2, [ 1, 2, 3 ])).toEqual([ 8, 8, 8 ])
  const revmap = (fn, ary) => map(fn, ary)
  const revmapIndexed = addIndexRight(revmap)
  const result = revmapIndexed((val, idx) => idx + '-' + val,
    [ 'f', 'o', 'o', 'b', 'a', 'r' ])

  expect(result).toEqual([ '5-f', '4-o', '3-o', '2-b', '1-a', '0-r' ])
})
