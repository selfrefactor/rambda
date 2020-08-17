import { delay } from './delay'
import { equals } from './equals'
import { map } from './map'
import { pipeAsync } from './pipeAsync'

async function identity(x){
  await delay(100)

  return x
}

test('happy', async () => {
  const fn1 = async x => {
    await delay(100)

    return x + 1
  }
  const fn2 = async x => {
    await delay(100)

    return x * 2
  }
  const result = await pipeAsync(fn1,
    fn2)(await Promise.all([ identity(1), identity(2), identity(3) ]))
  console.log(result)
  // expect(result).toEqual([ 'foo', 'bar' ])
})

const delayFn = ms =>
  new Promise(resolve => {
    resolve(ms + 7)
  })

// test('known issue - function returning promise', async () => {
//   const result = await pipeAsync(
//     a => a,
//     a => a + 1000,
//     delayFn,
//     a => a + 11
//   )(20)

//   expect(result).toEqual('[object Promise]1000')
// })

// test('throw error', async () => {
//   const delay = async () => {
//     await delayFn(1)
//     JSON.parse('{foo')
//   }

//   let didThrow = false
//   try {
//     await pipeAsync(
//       a => a,
//       a => a + 1000,
//       async () => delay(),
//       a => a + 11
//     )(20)
//   } catch (e){
//     didThrow = false
//   }

//   expect(didThrow).toBeTrue()
// })
