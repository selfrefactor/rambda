import { mapToObject } from './mapToObject.js'

const list = [ 1, 2, 3 ]
const fn = x => x % 2 ? { [ x ] : x + 1 } : { [ x ] : x + 10 }
const expected = {
  1 : 2,
  2 : 12,
  3 : 4,
}

test('happy', () => {
  const result = mapToObject(fn, list)
  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = mapToObject(fn)(list)
  expect(result).toEqual(expected)
})

test('string.fn test', () => {
  const list = [ 'auto', 'bar=false', 'foo', 'baz=1.5', 's=more', 'k=2' ]
  const fn = x => {
    const [ key, value ] = x.split('=')
    if (value === undefined || value === 'true'){
      return { [ key ] : true }
    }
    if (value === 'false'){
      return { [ key ] : false }
    }

    if (Number.isNaN(Number(value))){
      return { [ key ] : value }
    }

    return { [ key ] : Number(value) }
  }

  const expectedResult = {
    auto : true,
    foo  : true,
    bar  : false,
    baz  : 1.5,
    s    : 'more',
    k    : 2,
  }
  const result = mapToObject(fn, list)

  expect(result).toEqual(expectedResult)
})

test('bad path', () => {
  expect(() => mapToObject(1, null)).toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":"Number","schema":"Function"}
    all inputs: ["Number","Null"]
    all schemas: ["Function","Array"]"
  `)
})
