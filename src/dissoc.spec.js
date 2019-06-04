import { dissoc } from './dissoc'

test('input is null or undefined', () => {
  //These tests match Ramda behavior
  //https://ramdajs.com/repl/?v=0.25.0#?R.dissoc%28%27b%27%2C%20null%29
  expect(dissoc('b', null)).toEqual({})
  //https://ramdajs.com/repl/?v=0.25.0#?R.dissoc%28%27b%27%2C%20undefined%29
  expect(dissoc('b', undefined)).toEqual({})
})

test('property exists curried', () => {
  expect(
    dissoc('b')({
      a : 1,
      b : 2,
    })
  ).toEqual({ a : 1 })
})

test('property doesn\'t exists', () => {
  expect(
    dissoc('c', {
      a : 1,
      b : 2,
    })
  ).toEqual({
    a : 1,
    b : 2,
  })
})

test('works with non-string property', () => {
  expect(
    dissoc(42, {
      a  : 1,
      42 : 2,
    })
  ).toEqual({ a : 1 })

  expect(
    dissoc(null, {
      a    : 1,
      null : 2,
    })
  ).toEqual({ a : 1 })

  expect(
    dissoc(undefined, {
      a         : 1,
      undefined : 2,
    })
  ).toEqual({ a : 1 })
})

test('includes prototype properties', () => {
  function Rectangle(width, height){
    this.width = width
    this.height = height
  }
  const area = Rectangle.prototype.area = function(){
    return this.width * this.height
  }
  const rect = new Rectangle(7, 6)

  expect(dissoc('area', rect)).toEqual({
    width  : 7,
    height : 6,
  })

  expect(dissoc('width', rect)).toEqual({
    height : 6,
    area   : area,
  })

  expect(dissoc('depth', rect)).toEqual({
    width  : 7,
    height : 6,
    area   : area,
  })
})
