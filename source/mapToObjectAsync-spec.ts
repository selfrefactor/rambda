import { composeAsync, mapToObjectAsync } from 'rambda'

interface Output {
  key1: string
  key2: string
  key3: string
}

const list = [1, 2, 3, 12]
const fn = async (x: number) => {
  if (x > 10) {
    return false
  }

  return x % 2 ? { [`key${x}`]: x + 1 } : { [`key${x}`]: x + 10 }
}

describe('R.mapToObjectAsync - explicit output types', () => {
  it('happy', async () => {
    const result = await mapToObjectAsync<number, Output>(fn, list)
    result // $ExpectType Output
  })
  it('curried', async () => {
    const result = await mapToObjectAsync<number, Output>(fn)(list)
    result // $ExpectType Output
  })
  it('with R.composeAsync', async () => {
    const result = await composeAsync(
      mapToObjectAsync<number, Output>(fn),
      (x: number[]) => x.filter((xx: number) => xx > 2),
    )(list)

    result // $ExpectType Output
  })
})

describe('R.mapToObjectAsync - implicit output types', () => {
  it('happy', async () => {
    const result = await mapToObjectAsync(fn, list)
    result // $ExpectType { [x: string]: number; }
  })
  it('curried', async () => {
    const result = await mapToObjectAsync(fn)(list)
    result // $ExpectType { [x: string]: number; }
  })
  it('with R.composeAsync', async () => {
    const result = await composeAsync(mapToObjectAsync(fn), (x: number[]) =>
      x.filter((xx: number) => xx > 2),
    )(list)

    result // $ExpectType { [x: string]: number; }
  })
})
