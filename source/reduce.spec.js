import {reduce, reduced} from './reduce'

const reducer = (prev, current, i) => {
  expect(i).toBeNumber()

  return prev + current
}
const initialValue = 1
const list = [1, 2, 3]
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  expect(reduce(reducer, initialValue, list)).toEqual(7)
})

test('with object as iterable', () => {
  expect(() =>
    reduce(reducer, initialValue, {
      a: 1,
      b: 2,
    })
  ).toThrowWithMessage(TypeError, ERROR)
})

test('with undefined as iterable', () => {
  expect(() => reduce(reducer, 0, null)).toThrowWithMessage(TypeError, ERROR)
})

describe('reduced', () => {
  test('without reduced (baseline)', () => {
    let maxIndex
    const reducer = (prev, current, i) => {
      maxIndex = i
      return current === 2 ? current : prev
    }
    expect(reduce(reducer, initialValue, list)).toEqual(2)
    expect(maxIndex).toEqual(2) // did not stop early
  })

  test('with reduced', () => {
    let maxIndex
    const reducer = (prev, current, i) => {
      maxIndex = i
      return current === 2 ? reduced(current) : prev
    }
    expect(reduce(reducer, initialValue, list)).toEqual(2)
    expect(maxIndex).toEqual(1) // stopped early
  })
})
