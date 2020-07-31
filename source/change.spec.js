import { change } from './change'

test('happy', () => {
  const localOrigin = {
    foo : 1,
    bar : { nested : 2 },
  }
  const changeData = {
    bar : { a : 3 },
    baz : 4,
  }
  const result = change(
    localOrigin, '', changeData
  )

  const expected = {
    foo : 1,
    bar : {
      a      : 3,
      nested : 2,
    },
    baz : 4,
  }

  expect(result).toEqual(expected)
})

const origin = {
  a   : 0,
  foo : {
    bar : 1,
    baz : false,
    bax : { nested : 2 },
  },
  first : {
    second : {
      third : {
        fourthA : 3,
        fourthB : 4,
        fourth  : {
          a     : 1,
          fifth : { unreachable : 22 },
        },
      },
    },
  },
}

test('when rule is not an object', () => {
  const result = change(
    origin, 'foo.bax.nested', 7
  )
  const expected = {
    a   : 0,
    foo : {
      bar : 1,
      baz : false,
      bax : { nested : 7 },
    },
    first : origin.first,
  }

  expect(result).toEqual(expected)
})

test('works with 4 levels deep nesting', () => {
  const changeData = {
    foo : {
      bar : 7,
      bax : { bay : 8 },
    },
    first : {
      second : {
        b     : 7,
        third : {
          fourthA : 9,
          // This is 5th level nesting
          // so we will receive a full change property
          // instead of merge
          ///////////////////////////
          fourth  : { a : 2 },
        },
      },
    },
  }
  const result = change(
    origin, '', changeData
  )
  const expected = {
    a   : 0,
    foo : {
      bar : 7,
      baz : false,
      bax : {
        nested : 2,
        bay    : 8,
      },
    },
    first : {
      second : {
        third : {
          fourthA : 9,
          fourthB : 4,
          fourth  : { a : 2 },
        },
        b : 7,
      },
    },
  }
  expect(result).toEqual(expected)
})
