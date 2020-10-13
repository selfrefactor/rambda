import { ok, schemaToString } from './ok'

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
  const errorMessage = `Failed R.ok -
reason: {"input":{},"schema":"string"}
all inputs: [1,"foo",{}]
all schemas: ["number","string","string"]`

  expect(() =>
    ok(
      1, 'foo', {}
    )(
      'number', 'string', 'string'
    )).toThrowWithMessage(Error, errorMessage)
})

/*
  TODO
  What about
  {a: Function}
*/
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
    Object {
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
  )('number')).toThrow()
})

test('when throws with single input', () => {
  expect(() => ok('3')('number')).toThrow()
})
