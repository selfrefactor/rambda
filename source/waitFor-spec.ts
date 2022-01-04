import {delay, waitFor} from 'rambda'

describe('R.waitFor', () => {
  it('async condition with input', async () => {
    let counter = 0
    const condition = async (x: number) => {
      await delay(10)
      counter += x
      return counter > 2
    }
    const result = await waitFor(condition, 1000, 6)(6)

    result // $ExpectType boolean
  })
  it('async condition without input', async () => {
    let counter = 0
    const condition = async () => {
      await delay(10)
      counter++
      return counter > 2
    }
    const result = await waitFor(condition, 1000, 6)()

    result // $ExpectType boolean
  })
  it('sync condition with input', async () => {
    let counter = 0
    const condition = (x: number) => {
      counter += x
      return counter > 2
    }
    const result = await waitFor(condition, 1000, 6)(6)

    result // $ExpectType boolean
  })
  it('sync condition without input', async () => {
    let counter = 0
    const condition = () => {
      counter++
      return counter > 2
    }
    const result = await waitFor(condition, 1000, 6)()

    result // $ExpectType boolean
  })
})
