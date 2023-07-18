import * as R from 'ramda'

import { addIndex } from './addIndex.js'
import { map } from './map.js'

test('with R.pipe', () => {
  const result = R.pipe(R.addIndex(R.map)((x, i) => x + i))([ 1, 2, 3 ])
  expect(result).toEqual([ 1, 3, 5 ])
})

test('happy', () => {
  function mapFn(fn, list){
    const willReturn = []
    list.forEach(item => {
      willReturn.push(fn(item))
    })

    return willReturn
  }
  const mapIndexed = addIndex(mapFn)
  const fn2 = (val, idx) => val + idx + 5
  const result = mapIndexed(fn2, [ 1, 2, 3 ])
  expect(result).toEqual([ 6, 8, 10 ])
})

describe('unary functions like `map`', () => {
  const times2 = function (x){
    return x * 2
  }
  const addIndexParam = function (x, idx){
    return x + idx
  }
  const squareEnds = function (
    x, idx, list
  ){
    return idx === 0 || idx === list.length - 1 ? x * x : x
  }
  const mapIndexed = addIndex(map)

  it('works just like a normal map', () => {
    expect(mapIndexed(times2, [ 1, 2, 3, 4 ])).toEqual([ 2, 4, 6, 8 ])
  })

  it('passes the index as a second parameter to the callback', () => {
    expect(mapIndexed(addIndexParam, [ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      8, 7, 9, 8, 7, 5, 15,
    ])
  })

  it('passes the entire list as a third parameter to the callback', () => {
    expect(mapIndexed(squareEnds, [ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      64, 6, 7, 5, 3, 0, 81,
    ])
  })

  it('acts as a curried function', () => {
    const makeSquareEnds = mapIndexed(squareEnds)
    expect(makeSquareEnds([ 8, 6, 7, 5, 3, 0, 9 ])).toEqual([
      64, 6, 7, 5, 3, 0, 81,
    ])
  })
})
