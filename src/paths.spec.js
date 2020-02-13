const obj = {
  a : {
    b : {
      c : 1,
      d : 2,
    },
  },
  p : [ { q : 3 }, 'Hi' ],
  x : {
    y : 'Alice',
    z : [ [ {} ] ],
  },
}

test('takes paths and returns values at those paths', () => {
  expect(paths([
    [ 'a', 'b', 'c' ],
    [ 'x', 'y' ],
  ],
  obj)).toEqual([ 1, 'Alice' ])
  expect(paths([
    [ 'a', 'b', 'd' ],
    [ 'p', 'q' ],
  ],
  obj)).toEqual([ 2, undefined ])
})

test('takes a paths that contains indices into arrays', () => {
  expect(paths([
    [ 'p', 0, 'q' ],
    [ 'x', 'z', 0, 0 ],
  ],
  obj)).toEqual([ 3, {} ])
  expect(paths([
    [ 'p', 0, 'q' ],
    [ 'x', 'z', 2, 1 ],
  ],
  obj)).toEqual([ 3, undefined ])
})

test('takes a path that contains negative indices into arrays', () => {
  expect(paths([
    [ 'p', -2, 'q' ],
    [ 'p', -1 ],
  ],
  obj)).toEqual([ 3, 'Hi' ])
  expect(paths([
    [ 'p', -4, 'q' ],
    [ 'x', 'z', -1, 0 ],
  ],
  obj)).toEqual([ undefined, {} ])
})

test('gets a deep property\'s value from objects', () => {
  expect(paths([ [ 'a', 'b' ] ], obj)).toEqual([ obj.a.b ])
  expect(paths([ [ 'p', 0 ] ], obj)).toEqual([ obj.p[ 0 ] ])
})

test('returns undefined for items not found', () => {
  expect(paths([ [ 'a', 'x', 'y' ] ], obj)).toEqual([ undefined ])
  expect(paths([ [ 'p', 2 ] ], obj)).toEqual([ undefined ])
})
