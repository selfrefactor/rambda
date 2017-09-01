const R = require('../../dist/rambda.cjs')

test('partialCurry', () => {
  const fn = ({ a, b, c }) => a + b + c
  const curried = R.partialCurry(fn, { a : 1 })
  expect(R.type(curried)).toEqual('Function')
  expect(curried({
    b : 2,
    c : 3,
  })).toEqual(6)
  expect(true).toBeTruthy()
})

it('async', done => {
  const delay = ({ ms, x }) => new Promise(resolve => {
    setTimeout(() => {
      console.log(x)
      resolve(x * 2)
    }, ms)
  })

  const curried = R.partialCurry(delay, { ms : 200 })
  curried({ x : 3 }).then(result => {
    expect(R.type(curried)).toEqual('Function')
    done()
  })
})
