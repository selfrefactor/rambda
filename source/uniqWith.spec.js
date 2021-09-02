import {uniqWith} from './uniqWith'
import {uniqWith as uniqWithRamda} from 'ramda'

const list = [{a: 1}, {a: 1}]

test('happy', () => {
  const fn = (x, y) => x.a === y.a

  const result = uniqWith(fn, list)
  expect(result).toEqual([{a: 1}])
})

test('with list of strings', () => {
  const fn = (x, y) => x.length === y.length
  const list = ['0', '11', '222', '33', '4', '55']
  const result = uniqWith(fn)(list)
  const resultRamda = uniqWithRamda(fn, list)
  expect(result).toEqual(['0', '11', '222'])
  expect(resultRamda).toEqual(['0', '11', '222'])
})
