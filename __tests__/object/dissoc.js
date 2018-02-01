const R = require('../../rambda')

test('property exists', () => {
  expect(R.dissoc('b', {a: 1, b: 2})).toEqual({a: 1})
})

test('property doesn\'t exists', () => {
  expect(R.dissoc('c', {a: 1, b: 2})).toEqual({a: 1, b: 2})
})

test('works with non-string property', () => {
  expect(R.dissoc(42, {a: 1, 42: 2})).toEqual({a: 1})
  expect(R.dissoc(null, {a: 1, 'null': 2})).toEqual({a: 1})
  expect(R.dissoc(undefined, {a: 1, 'undefined': 2})).toEqual({a: 1})
})

test('includes prototype properties', function() {
  function Rectangle(width, height) {
    this.width = width
    this.height = height
  }
  var area = Rectangle.prototype.area = function() {
    return this.width * this.height
  }
  var rect = new Rectangle(7, 6)

  expect(
    R.dissoc('area', rect)
  ).toEqual({width: 7, height: 6})

  expect(
    R.dissoc('width', rect)
  ).toEqual({height: 6, area: area})

  expect(
    R.dissoc('depth', rect)
  ).toEqual({width: 7, height: 6, area: area})
})