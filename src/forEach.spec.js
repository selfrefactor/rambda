import { forEach } from './forEach'
test('', () => {
  const sideEffect = {}
  forEach(x => sideEffect[ `foo${ x }` ] = x + 10)([ 1, 2 ])

  expect(sideEffect).toStrictEqual({
    foo1 : 11,
    foo2 : 12,
  })
})

test('', () => {
  const list = [
    {
      x : 1,
      y : 2,
    },
    {
      x : 100,
      y : 200,
    },
    {
      x : 300,
      y : 400,
    },
    {
      x : 234,
      y : 345,
    },
  ]
  const sideEffect = {}
  const result = forEach(elem => {
    sideEffect[ elem.x ] = elem.y
  }, list)
  const expectedSideEffect = {
    1   : 2,
    100 : 200,
    300 : 400,
    234 : 345,
  }

  expect(sideEffect).toStrictEqual(expectedSideEffect)
  expect(result).toStrictEqual(list)
})

test('with empty list', () => {
  const list = []
  const result = forEach(x => x * x)(list)

  expect(result).toStrictEqual(list)
})
