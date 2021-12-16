import {chain} from './chain'
import {chain as chainRamda} from 'ramda'

const duplicate = n => [n, n]

test('happy', () => {
  const fn = x => [x * 2]
  const list = [1, 2, 3]

  const result = chain(fn, list)

  expect(result).toEqual([2, 4, 6])
})

test('maps then flattens one level', () => {
  expect(chain(duplicate, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('maps then flattens one level - curry', () => {
  expect(chain(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('flattens only one level', () => {
  const nest = n => [[n]]
  expect(chain(nest, [1, 2, 3])).toEqual([[1], [2], [3]])
})

test('can compose', () => {
  function dec(x) {
    return [x - 1]
  }
  function times2(x) {
    return [x * 2]
  }

  var mdouble = chain(times2)
  var mdec = chain(dec)
  expect(mdec(mdouble([10, 20, 30]))).toEqual([19, 39, 59])
})

test('@types/ramda broken test', () => {
  const score = {
    maths: 90,
    physics: 80,
  }

  const calculateTotal = score => {
    const {maths, physics} = score
    return maths + physics
  }

  const assocTotalToScore = (total, score) => ({...score, total})

  const calculateAndAssocTotalToScore = chainRamda(
    assocTotalToScore,
    calculateTotal
  )
  expect(() => calculateAndAssocTotalToScore(score)).toThrow()
})
