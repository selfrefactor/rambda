const R = require('../rambda')
const Ramda = require('ramda')
const { existsSync } = require('fs')

test('R.T', () => {
  expect(R.T()).toBe(true)
})

test('R.F', () => {
  expect(R.F()).toBe(false)
})

test('R.compose over object', () => {
  const commands = {
    initEpic : () => 'INIT_EPIC_CONTENT',
    epic     : () => 'EPIC_CONTENT',
    exists   : () => 'NEVER',
  }

  const input = {
    initEpicLocation : `${ process.cwd() }/initEpic.ts`,
    epicLocation     : `${ process.cwd() }/epic.ts`,
    existsLocation   : `${ process.cwd() }/rambda.js`,
  }

  const result = R.compose(
    Object.keys,
    R.map((content, commandKey) => content),
    R.map((commandValue, commandKey) => {
      expect(
        typeof commandKey
      ).toEqual('string')

      return { [ commandKey ] : commandValue(input) }
    }),
    R.filter((_, commandKey) => !existsSync(input[ `${ commandKey }Location` ]))
  )(commands)

  expect(
    result.length
  ).toEqual(2)
})

test('flip', () => {
  const fn = R.flip(R.subtract)

  expect(fn(1)(7)).toEqual(6)
  expect(fn(1, 7)).toEqual(6)
})

test('example', () => {
  const url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice'

  expect(R.compose(
    R.join('|'),
    R.append('foo'),
    R.takeLast(4),
    R.map(R.toLower),
    R.filter(val => val.length > 4),
    R.split('/')
  )(url)).toEqual('reference|global_objects|array|slice|foo')
})

test('works with Ramda\'s flip', () => {
  expect(R.compose(
    R.map(Ramda.flip(R.subtract)(10)),
    R.adjust(R.add(1), 0)
  )([ 0, 2, 3, 4, 5, 6, 7, 8, 9 ])).toEqual([ -9, -8, -7, -6, -5, -4, -3, -2, -1 ])
})

test('inc', () => {
  expect(R.inc(4)).toEqual(5)
})

test('dec', () => {
  expect(R.dec(4)).toEqual(3)
})
