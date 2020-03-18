import { delay } from './delay'
import { isPrototype, isValid } from './isValid'

test('is prototype', () => {
  expect(isPrototype(Promise)).toBe(true)
  expect(isPrototype(Number)).toBe(true)
  expect(isPrototype(Boolean)).toBe(true)
  expect(isPrototype(String)).toBe(true)
  expect(isPrototype(0)).toBe(false)
})

test('prototype inside array', () => {
  const input = { a : [ 1, 2, 3, 4 ] }
  const schema = { a : [ Number ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('with Promise prototype', () => {
  const input = { a : [ delay(1), delay(2) ] }
  const schema = { a : [ Promise ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('object prototype as rule - true', () => {
  const input = { a : {} }
  const schema = { a : Object }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('list of functions', () => {
  const input = { a : [ () => {}, delay ] }
  const schema = { a : [ 'function' ] }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('function schema type can be only string', () => {
  const input = { a : [ () => {}, delay ] }
  const schema = { a : [ Function ] }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('object prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Object }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('number prototype as rule - true', () => {
  const input = { a : 1 }
  const schema = { a : Number }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('array prototype as rule - true', () => {
  const input = { a : [ 1, 2, 3 ] }
  const schema = { a : Array }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('array prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Array }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('string prototype as rule - true', () => {
  const input = { a : 'foo' }
  const schema = { a : String }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('string prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : String }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('boolean prototype as rule - true', () => {
  const input = { a : true }
  const schema = { a : Boolean }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('boolean prototype as rule - false', () => {
  const input = { a : null }
  const schema = { a : Boolean }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('regex prototype cannot be rule - true', () => {
  const input = { a : /foo/g }
  const schema = { a : new RegExp('foo') }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('undefined as a rule - true', () => {
  const input = { a : undefined }
  const schema = { a : undefined }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('undefined as a rule - false', () => {
  const input = { a : null }
  const schema = { a : undefined }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('null as a rule - true', () => {
  const input = { a : null }
  const schema = { a : null }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('null as a rule - false', () => {
  const input = { a : undefined }
  const schema = { a : null }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('`any` safeguard against `null`', () => {
  const input = { a : null }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('`any` safeguard against `undefined`', () => {
  const input = { a : undefined }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('type can be `"any"`', () => {
  const input = { a : () => {} }
  const schema = { a : 'any' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `"function"`', () => {
  const input = { a : () => {} }
  const schema = { a : 'function' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `async`', () => {
  const input = { a : async () => {} }
  const schema = { a : 'async' }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `promise`', () => {
  const input = { a : delay(1999) }
  const schema = { a : 'promise' }
  // TODO
  // ============================================
  // const schema = { a : Promise }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('type can be `promise` list', () => {
  const input = { a : [ delay(1999) ] }
  const schema = { a : [ 'promise' ] }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('function as schema - false', () => {
  const input = {
    a : {
      ab : () => true,
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /fo/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('regex ok', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /fo/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('regex !ok', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : /ba/,
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('optional props is missing', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : 'string',
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is wrong type', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    'a' : {
      ab : 'string',
      ac : 'number',
    },
    'b?' : 'string',
    'c'  : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('optional props - nested', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 3,
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is missing - nested', () => {
  const input = {
    a : { ab : 'foo' },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('optional props is wrong type - nested', () => {
  const input = {
    a : {
      ab : 'foo',
      ac : 'bar',
    },
    b : [],
    c : [ 1, 2 ],
  }
  const schema = {
    a : {
      'ab'  : 'string',
      'ac?' : 'number',
    },
    b : 'array',
    c : [ 'number' ],
  }
  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('nested schema', () => {
  const input = {
    a : {
      b : 'str',
      c : 3,
      d : 'str',
    },
    b : 'foo',
  }
  const schema = {
    a : {
      b : 'string',
      c : 'number',
      d : 'string',
    },
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  const invalidInputFirst = {
    a : {
      b : 'str',
      c : 3,
      d : 'str',
    },
    b : 5,
  }

  expect(isValid({
    input : invalidInputFirst,
    schema,
  })).toBeFalsy()

  const invalidInputSecond = {
    a : {
      b : 'str',
      c : 'str',
      d : 'str',
    },
    b : 5,
  }

  expect(isValid({
    input : invalidInputSecond,
    schema,
  })).toBeFalsy()

  const invalidInputThird = {
    a : { b : 'str' },
    b : 5,
  }

  expect(isValid({
    input : invalidInputThird,
    schema,
  })).toBeFalsy()
})

test('array of type', () => {
  const input = {
    a : [ 1, 2 ],
    b : 'foo',
  }
  const schema = {
    a : [ 'number' ],
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  const invalidInput = {
    a : [ 1, '1' ],
    b : 'foo',
  }

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('function as rule', () => {
  const input = {
    a : [ 1, 2, 3, 4 ],
    b : 'foo',
  }
  const invalidInput = {
    a : [ 4 ],
    b : 'foo',
  }

  const schema = {
    a : x => x.length > 2,
    b : 'string',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('input prop is undefined', () => {
  const input = { b : 3 }
  const schema = { a : 'number' }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()
})

test('enum', () => {
  const input = { a : 'foo' }
  const invalidInput = { a : '' }

  const schema = { a : [ 'foo', 'bar', 'baz' ] }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInput,
    schema,
  })).toBeFalsy()
})

test('readme example', () => {
  const basicSchema = { a : [ 'string' ] }
  const schema = {
    b : [ basicSchema ],
    c : {
      d : { e : 'boolean' },
      f : 'array',
    },
    g : [ 'foo', 'bar', 'baz' ],
  }
  const input = {
    b : [ { a : [ 'led', 'zeppelin' ] } ],
    c : {
      d : { e : true },
      f : [ 'any', 1, null, 'value' ],
    },
    g : 'foo',
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('should allow additional properties', () => {
  const input = {
    title : 'You shook me',
    year  : 1969,
  }

  expect(isValid({
    input,
    schema : { title : 'string' },
  })).toBeTruthy()
})

test('accepts values as schemas', () => {
  const input = {
    title : 'You shook me',
    genre : 'Blues',
    year  : 1969,
  }
  const schema = {
    title : 'You shook me',
    year  : 1969,
  }
  expect(isValid({
    input,
    schema,
  })).toBeTruthy()
})

test('compatible schemas with nested object', () => {
  const input = {
    foo : 'bar',
    baz : { a : { b : 'c' } },
  }
  const invalidInputFirst = {
    foo : 'bar',
    baz : { a : { b : 1 } },
  }
  const invalidInputSecond = {
    foo : 'bar',
    baz : { a : { b : [] } },
  }
  const invalidInputThird = {
    foo : 'bar',
    baz : { a : { b : null } },
  }
  const schema = {
    foo : 'string',
    baz : { a : { b : 'string' } },
  }

  expect(isValid({
    input,
    schema,
  })).toBeTruthy()

  expect(isValid({
    input : invalidInputFirst,
    schema,
  })).toBeFalsy()
  expect(isValid({
    input : invalidInputSecond,
    schema,
  })).toBeFalsy()
  expect(isValid({
    input : invalidInputThird,
    schema,
  })).toBeFalsy()
})

test('should return true when schema is empty object', () => {
  expect(isValid({
    input  : { a : 1 },
    schema : {},
  })).toBeTruthy()
})

test('when schema is undefined', () => {
  expect(isValid({
    input  : { a : 1 },
    schema : undefined,
  })).toBeFalsy()
})

test('should return false with invalid schema rule', () => {
  const input = {
    foo : 'bar',
    a   : {},
  }
  const inputSecond = { foo : 'bar' }

  const schema = {
    foo : 'string',
    baz : { a : {} },
  }

  expect(isValid({
    input,
    schema,
  })).toBeFalsy()

  expect(isValid({
    input : inputSecond,
    schema,
  })).toBeFalsy()
})

test('array of schemas', () => {
  const input = {
    b : [
      {
        a : 'led',
        b : 1,
      },
      {
        a : 'dancing',
        b : 1,
      },
    ],
  }
  const basicSchema = {
    a : String,
    b : Number,
  }
  const schema = { b : [ basicSchema ] }
  const result = isValid({
    input,
    schema,
  })

  expect(result).toBeTruthy()
})
