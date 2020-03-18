import { change } from './change'

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
  const expected = {
    a   : 0,
    foo : {
      bar : 1,
      baz : false,
      bax : { nested : 7 },
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

  const result = change(
    origin, 'foo.bax.nested', 7
  )
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
          fourth  : { a : 2 },
        },
      },
    },
  }
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
          // This is 5th level nesting
          // So we get the full change property
          // Instead of merge with the origin
          ///////////////////////////
          fourth  : { a : 2 },
        },
        b : 7,
      },
    },
  }
  const result = change(
    origin, '', changeData
  )
  expect(result).toEqual(expected)
})

test('simpler', () => {
  const localOrigin = {
    a   : 0,
    foo : {
      bar : 1,
      bax : { nested : 2 },
    },
  }
  const changeData = {
    bar : 2,
    bay : 3,
    bax : { baq : 9 },
  }
  const result = change(
    localOrigin, 'foo', changeData
  )

  const expectedResult = {
    a   : 0,
    foo : {
      bar : 2,
      bay : 3,
      bax : {
        nested : 2,
        baq    : 9,
      },
    },
  }

  expect(result).toEqual(expectedResult)
})
