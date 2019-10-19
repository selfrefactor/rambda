const bench = require('benny')

const origin = [ 1, 2, 3, {a:1, b: 'foo'}, new RegExp('bar'), 7]
const target = 7
const folder = 'files/benchmars_results'

bench.suite(
  'X in array',

  bench.add('indexOf', () => {
    const a = origin.indexOf(target) > -1
  }),
  
  bench.add('includes', () => {
    const a = origin.includes(target)
  }),

  bench.add('find', () => {
    const a = origin.find(x => x === target) !== undefined
  }),

  bench.cycle(),
  bench.complete(),
  bench.save({ file: 'find-in-array', folder })
)

// bench.suite(
//   'Duplicate array',

//   bench.add('slice', () => {
//     const a = origin.slice()
//   }),
  
//   bench.add('slice0', () => {
//     const a = origin.slice(0)
//   }),

//   bench.add('concat', () => {
//     const a = origin.concat()
//   }),

//   bench.cycle(),
//   bench.complete(),
//   bench.save({ file: 'duplicate-array' })
// )