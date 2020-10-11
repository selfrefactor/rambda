import { profileMethodAsync } from './_internals/testUtils'
import { delay } from './delay'
import { produceAsync } from './produceAsync'

test('happy', async () => {
  const fn = produceAsync({
    foo : async x => {
      await delay(100)

      return `${ x }_ZEPPELIN`
    },
    bar : inputArgument => inputArgument === 5,
  })
  const expected = {
    foo : 'LED_ZEPPELIN',
    bar : false,
  }

  const result = await fn('LED')
  expect(result).toEqual(expected)
})

test('with error', async () => {
  const fn = produceAsync({
    foo : async x => {
      await delay(100)
      throw new Error(`${ x }_ZEPPELIN`)
    },
    bar : inputArgument => inputArgument === 5,
  })

  try {
    await fn('LED')
    expect(1).toBe(2)
  } catch (e){
    expect(e.message).toBe('LED_ZEPPELIN')
  }
})

const rule = { a : async x => x + 1 }
const rules = [
  rule,
  {
    ...rule,
    a : 1,
  },
  {
    ...rule,
    a : [ 1 ],
  },
  1,
  '',
]
const inputs = [ 1, /foo/g, {}, delay(100) ]
 
describe.only('profile', done => {
  profileMethodAsync({
    fn          : produceAsync,
    firstInput  : rules,
    secondInput : inputs,
    callback    : () => {
      1
    },
  })
})