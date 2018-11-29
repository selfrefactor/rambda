const { cleanTOC } = require('./cleanTOC')

const input = `
- [Rambda](#rambda)
  * [Rambda's advantages](#rambdas-advantages)
  * [Example use](#example-use)
  * [Install](#install)
  * [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
  * [API](#api)
  * [Benchmark](#benchmark)
  * [Use with ES5](#use-with-es5)
  * [Changelog](#changelog)
  * [Additional info](#additional-info)
  * [Browse by category](#browse-by-category)
`.trim()

const expected = `
* [Example use](#example-use)
* [Install](#install)
* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Benchmark](#benchmark)
* [Use with ES5](#use-with-es5)
* [Changelog](#changelog)
* [Additional info](#additional-info)
* [Browse by category](#browse-by-category)
`.trim()

test('', () => {
  const result = cleanTOC(input)

  expect(
    result
  ).toBe(expected)
})
