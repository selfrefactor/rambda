const R = require('../../rambda')

test('merge', () => {
  expect(R.merge({
    foo : 'bar',
    bar : 'bar',
  })({ bar : 'baz' })).toEqual({
    foo : 'bar',
    bar : 'baz',
  })
})

//test('R.__',()=>{
//const result = R.compose(
//R.map(R.merge('_',{b:20})),
//R.map(R.tap(console.log))
//)([{a:1}, {b:2}, {c:3}])
//
//expect(result).toEqual(
//[{"a": 1, "b": 20}, {"b": 20}, {"b": 20, "c": 3}]
//)
//})
