import { ok, schemaToString } from './ok.js'

test('happy', () => {
  expect(() => {
    ok(
      1, 'foo', {}
    )(
      'number', 'string', 'object'
    )
  }).not.toThrow()
})

test('when validation fails', () => {
  expect(() => ok(
    1, 'foo', {}
  )(
    'number', 'string', 'string'
  ))
    .toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":{},"schema":"string"}
    all inputs: [1,"foo",{}]
    all schemas: ["number","string","string"]"
  `)
})

test('schema in error message', () => {
  const result = schemaToString({
    _a : [ Number ],
    a  : Number,
    b  : x => x > 2,
    c  : [ 'foo', 'bar' ],
    d  : [ { a : String } ],
    e  : 'boolean',
    f  : Array,
    h  : Object,
  })

  expect(result).toMatchInlineSnapshot(`
    {
      "_a": "Array",
      "a": "number",
      "b": "Function",
      "c": "Array",
      "d": "Array",
      "e": "String",
      "f": "array",
      "h": "object",
    }
  `)
})

test('error contains schema', () => {
  try {
    ok(
      1, 'foo', {}
    )(
      { a : Number }, String, String
    )
    expect(false).toBeTrue()
  } catch (e){
    expect(e.message.startsWith('Failed R.ok -')).toBeTruthy()
    expect(e).toBeInstanceOf(Error)
  }
})

test('when not throws with single schema', () => {
  expect(() => ok(
    1, 2, 3
  )('number')).not.toThrow()
})

test('when throws with single schema', () => {
  expect(() => ok(
    1, 2, '3'
  )('number')).toThrowErrorMatchingInlineSnapshot(`
    "Failed R.ok -
    reason: {"input":"3","schema":"number"}
    all inputs: [1,2,"3"]
    all schemas: ["number"]"
  `)
})

test('when throws with single input', () => {
  expect(() => ok('3')('number')).toThrowErrorMatchingInlineSnapshot('"Failed R.ok - {"input":"3","schema":"number"}"')
})
