import { delay } from './delay.js'
import { produceAsync } from './produceAsync.js'

test('happy', async () => {
  const result = await produceAsync({
    bar : x => x.length === 3,
    foo : async x => {
      await delay(100)

      return `${ x }_ZEPPELIN`
    },
  },
  'LED')
  const expected = {
    bar : true,
    foo : 'LED_ZEPPELIN',
  }

  expect(result).toEqual(expected)
})

test('when all rules are synchronous', async () => {
  const result = await produceAsync({
    bar : x => x.length === 3,
    foo : x => `${ x }_ZEPPELIN`,
  },
  'LED')
  const expected = {
    bar : true,
    foo : 'LED_ZEPPELIN',
  }

  expect(result).toEqual(expected)
})

test('with error', async () => {
  const fn = produceAsync({
    bar : inputArgument => inputArgument === 5,
    foo : async x => {
      await delay(100)
      throw new Error(`${ x }_ZEPPELIN`)
    },
  })

  await expect(fn('LED')).rejects.toThrow('LED_ZEPPELIN')
})
