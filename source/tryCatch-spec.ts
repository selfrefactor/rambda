import {tryCatch, delay} from 'rambda'

describe('tryCatch', () => {
  it('synchronous', () => {
    const fn = (x: any) => x.x === 1

    const result = tryCatch(fn, false)(null)
    result // $ExpectType boolean
  })
  it('synchronous + fallback is function', () => {
    const fn = (x: any) => typeof x.x
    const fallback = (x: any) => typeof x
    const result = tryCatch<any, string>(fn, fallback)(null)
    result // $ExpectType string
  })

  it('asynchronous', async () => {
    const fn = async (input: any) => {
  
      return typeof JSON.parse('{a:')
    }
    const result = await tryCatch<string>(fn, 'fallback')(100)
    result // $ExpectType string
  })

  it('asynchronous + fallback is asynchronous', async () => {
    const fn = async (input: any) => {
      await delay(100)
      return JSON.parse(`{a:${input}`)
    }
    const fallback = async (input: any) => {
      await delay(100)
      return 'foo'
    }
    const result = await tryCatch<string>(fn, fallback)(100)
    result // $ExpectType string
  })
})
