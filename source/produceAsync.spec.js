import { delay } from './delay'
import { produceAsync } from './produceAsync'

test('happy', async () => {
  const result = await produceAsync({
    foo : async x => {
      await delay(100)

      return `${ x }_ZEPPELIN`
    },
    bar : x => x.length === 3,
  },
  'LED')
  const expected = {
    foo : 'LED_ZEPPELIN',
    bar : true,
  }

  expect(result).toEqual(expected)
})

test('when all rules are synchronous', async () => {
  const result = await produceAsync({
    foo : x => `${ x }_ZEPPELIN`,
    bar : x => x.length === 3,
  },
  'LED')
  const expected = {
    foo : 'LED_ZEPPELIN',
    bar : true,
  }

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

  await expect(fn('LED')).rejects.toThrow('LED_ZEPPELIN')
})
