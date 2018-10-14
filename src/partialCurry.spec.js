const R = require('../../rambda')

test('', () => {
  const fn = ({ a, b, c }) => a + b + c
  const curried = R.partialCurry(fn, { a : 1 })

  expect(R.type(curried)).toEqual('Function')
  expect(curried({
    b : 2,
    c : 3,
  })).toEqual(6)
  expect(true).toBeTruthy()
})

it('with promise', done => {
  const delay = ({ ms, x }) => new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2)
    }, ms)
  })

  const curried = R.partialCurry(delay, { ms : 200 })

  curried({ x : 3 }).then(result => {
    expect(R.type(curried)).toEqual('Function')
    done()
  })
})

it('with async', async () => {
  const delay = ms => new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })

  const fn = async ({ a, b, c }) => {
    await delay(100)

    return a + b + c
  }

  const curried = R.partialCurry(fn, { a : 1 })

  const result = await curried({
    b : 2,
    c : 3,
  })

  expect(result).toEqual(6)
})
