import { Bench } from 'tinybench'
import { __findHighestArity } from './applySpec.js'
import { pipe } from './pipe.js'

import * as Ramda from 'ramda'
import * as Rambda from '../rambda.js'
import { IS_CI } from './_internals/testUtils.js'

const zaratustra = {
  title: 'Zaratustra',
  year: 1956,
}
const awardedZaratustra = {
  ...zaratustra,
  awards: {
    number: 1,
    years: [1956],
  },
}
const awardedDostojevski = {
  title: 'Idiot',
  year: 1869,
  awards: {
    number: 2,
    years: [1869, 1870],
  },
}
const awardedDostojevskiToRead = {
  ...awardedDostojevski,
  readFlag: true,
  bookmarkFlag: true,
}
const awardedZaratustraToRead = {
  ...awardedZaratustra,
  readFlag: true,
  bookmarkFlag: true,
  description: 'The essense of Nietzsche philosophy',
  userRating: 5,
}
const awardedBaseValue = {
  title: '',
  year: 0,
  awards: {
    number: 0,
    years: [],
  },
}

const checkIfMustRead = x => {
  return x.status === 'must-read'
}
const checkIfFamous = x => {
  return x.status === 'famous'
}
const checkReadStatus = x => {
  return x.readFlag
}
const checkBookmarkStatus = x => {
  return x.bookmarkFlag
}
const checkBookToRead = x => {
  return x.readFlag && x.bookmarkFlag
}
const checkHasDescription = x => {
  return x.description !== undefined
}
const checkHasUserRating = x => {
  return x.userRating !== undefined
}

const assertType = fn => {
  return x => {
    if (fn(x)) {
      return x
    }
    throw new Error('type assertion failed')
  }
}

describe('real use cases', () => {
  it('books', async () => {
    const applyTest = (R, book) =>
      R.pipe(
        R.assoc('status', 'famous'),
        R.assocPath(['awards', 'number'], 1),
        R.defaultTo(awardedBaseValue),
        R.tap(R.anyPass([x => x.awards.number >= 0, x => x.year > 1900])),
        R.tap(
          R.both(
            x => x.awards.number >= 1,
            x => x.year > 1900,
          ),
        ),
        assertType(R.either(checkIfFamous, checkIfMustRead)),
        x => ({
          ...x,
          readFlag: true,
          bookmarkFlag: true,
        }),
        assertType(R.both(checkReadStatus, checkBookmarkStatus)),
        assertType(checkBookToRead),
        x => [x, x],
        R.dropLast(1),
        R.difference([awardedDostojevskiToRead]),
        R.append(awardedZaratustraToRead),
        R.last,
        assertType(R.allPass([checkHasDescription, checkHasUserRating])),
        assertType(R.anyPass([checkHasDescription, checkHasUserRating])),
        R.dissocPath('description'),
      )(book)
    expect(applyTest(Rambda, zaratustra)).toMatchInlineSnapshot(`
{
  "awards": {
    "number": 1,
    "years": [
      1956,
    ],
  },
  "bookmarkFlag": true,
  "readFlag": true,
  "title": "Zaratustra",
  "userRating": 5,
  "year": 1956,
}
`)
    if (IS_CI) {
      return
    }
    const bench = new Bench({ name: 'simple benchmark', iterations: 10_000 })

    bench
      .add('Rambda', () => {
        applyTest(Rambda, zaratustra)
      })
      .add('R', async () => {
        applyTest(Ramda, zaratustra)
      })

    await bench.run()

    console.log(bench.name)
    console.table(bench.table())
  })
})

test('issue #627', () => {
  expect(__findHighestArity({ len: pipe(Rambda.length) })).toBe(1)
})

test('with bad input', () => {
  expect(() => pipe()).toThrowErrorMatchingInlineSnapshot(
    `[Error: pipe requires at least one argument]`,
  )
})
