import { add } from './add'
import { converge } from './converge'
import { multiply } from './multiply'

const f1 = converge(multiply, [ a => a + 1, a => a + 10 ])
const f2 = converge(multiply, [ a => a + 1, (a, b) => a + b + 10 ])
const f3 = converge(multiply, [ a => a + 1, (
  a, b, c
) => a + b + c + 10 ])

test('happy', () => {
  expect(f2(6, 7)).toEqual(161)
})

test('passes the results of applying the arguments individually', () => {
  const result = converge(multiply)([ add(1), add(3) ])(2)
  expect(result).toEqual(15)
})

test('returns a function with the length of the longest argument', () => {
  expect(f1.length).toEqual(1)
  expect(f2.length).toEqual(2)
  expect(f3.length).toEqual(3)
})

test('passes context to its functions', () => {
  const a = function (x){
    return this.f1(x)
  }
  const b = function (x){
    return this.f2(x)
  }
  const c = function (x, y){
    return this.f3(x, y)
  }
  const d = converge(c, [ a, b ])
  const context = {
    f1 : add(1),
    f2 : add(2),
    f3 : add,
  }
  expect(a.call(context, 1)).toEqual(2)
  expect(b.call(context, 1)).toEqual(3)
  expect(d.call(context, 1)).toEqual(5)
})

test('works with empty functions list', () => {
  const fn = converge(function (){
    return arguments.length
  }, [])
  expect(fn.length).toEqual(0)
  expect(fn()).toEqual(0)
})
