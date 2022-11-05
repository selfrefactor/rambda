import { replaceAll } from './replaceAll.js'

const replacer = '|'
const patterns = [ /foo/g, 'bar' ]
const input = 'foo bar baz foo bar'

test('happy', () => {
  const result = replaceAll(
    patterns, replacer, input
  )
  const expected = '| | baz | bar'

  expect(result).toEqual(expected)
})

test('throws when wrong patterns', () => {
  expect(() => replaceAll(
    {}, replacer, input
  ))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":{},"schema":"array"}
    all inputs: [{},"|","foo bar baz foo bar"]
    all schemas: ["array","string","string"]"
  `)
})

test('throws when wrong input', () => {
  expect(() => replaceAll(
    patterns, replacer, []
  ))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":[],"schema":"string"}
    all inputs: [[{},"bar"],"|",[]]
    all schemas: ["array","string","string"]"
  `)
})

test('throws when wrong replacer', () => {
  expect(() => replaceAll(
    patterns, null, input
  ))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":null,"schema":"string"}
    all inputs: [[{},"bar"],null,"foo bar baz foo bar"]
    all schemas: ["array","string","string"]"
  `)
})
