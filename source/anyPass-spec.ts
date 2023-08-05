import {anyPass, filter} from 'rambda'

describe('anyPass', () => {
  it('happy', () => {
    const x = anyPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
  it('issue #604', () => {
    const plusEq = function(w: number, x: number, y: number, z: number) {
      return w + x === y + z
    }
    const result = anyPass([plusEq])(3, 3, 3, 3)

    result // $ExpectType boolean
  })
  it('issue #642', () => {
    const isGreater = (num: number) => num > 5
    const pred = anyPass([isGreater])
    const xs = [0, 1, 2, 3]

    const filtered1 = filter(pred)(xs)
    filtered1 // $ExpectType number[]
    const filtered2 = xs.filter(pred)
    filtered2 // $ExpectType number[]
  })
  it('functions as a type guard', () => {
    const isString = (x: unknown): x is string => typeof x === 'string';
    const isNumber = (x: unknown): x is number => typeof x === 'number';
    const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
    
    const isStringNumberOrBoolean = anyPass([isString, isNumber, isBoolean]);

    isStringNumberOrBoolean // $ExpectType (input: unknown) => input is string | number | boolean

    const aValue: unknown = 1;

    if (isStringNumberOrBoolean(aValue)) {
      aValue // $ExpectType string | number | boolean
    }
  })
})
