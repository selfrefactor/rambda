import {
  type MergeTypes,
  append,
  assertType,
  defaultTo,
  drop,
  dropLast,
  evolve,
  filter,
  find,
  head,
  map,
  pick,
  pipe,
  split,
  union,
} from 'rambda'
type IsNotNever<T> = [T] extends [never] ? false : true
type Expect<T extends true> = T

interface BaseBook {
  title: string
  year: number
  description?: string
  userRating?: number
}
interface Book extends BaseBook {
  awards: {
    number: number
    years?: number[]
  }
  status?: Status
}
interface BookWithBookmarkStatus extends Book {
  bookmarkFlag: boolean
}
interface BookWithReadStatus extends Book {
  readFlag: boolean
}
type BookToRead = BookWithBookmarkStatus & BookWithReadStatus
type FamousBook = Book & {
	status: 'famous'
}

const checkIfFamous = (x: Book): x is FamousBook => {
	return x.status === 'famous'
}
const zaratustra: BaseBook = {
  title: 'Zaratustra',
  year: 1956,
}
const brothersKaramazov = {
  title: 'Brothers Karamazov',
  year: 1880,
}

const awardedZaratustra: Book = {
  ...zaratustra,
  awards: {
    number: 1,
    years: [1956],
  },
}
const awardedBrothersKaramazov: Book = {
  ...brothersKaramazov,
  awards: {
    number: 2,
    years: [1869, 1870],
  },
}
const awardedZaratustraToRead: BookToRead = {
  ...awardedZaratustra,
  readFlag: true,
  bookmarkFlag: true,
}
const awardedBaseValue: Book = {
  title: '',
  year: 0,
  awards: {
    number: 0,
    years: [],
  },
}

type Status = 'famous' | 'can be skipped' | 'must-read'

function checkBookToRead(x: Book): x is BookToRead {
  return (x as BookToRead).readFlag && (x as BookToRead).bookmarkFlag
}

function tapFn<T, U>(
  transformFn: (x: T) => U,
  fn: (a: T, b: U) => void,
): (x: T) => T {
  return x => {
    const result = transformFn(x)
    fn(x, result)
    return x
  }
}

function simplify<T>(x: T) {
  return x as MergeTypes<T>
}

describe('real use cases - books', () => {
  it('case 1', () => {
    const result = pipe(
      [awardedZaratustra, awardedBrothersKaramazov],
      filter(checkIfFamous),
      drop(1),
      // without converting to `as FamousBook`, endsWith will pick up `Book` as type
      tapFn(union([awardedBrothersKaramazov]), (a, b) => {
        a // $ExpectType Book[]
        b // $ExpectType Book[]
      }),
      find(x => {
        x // $ExpectType Book
        return x.title === 'Brothers Karamazov'
      }),
      x => [x],
      filter(Boolean),
    )
    const final: Expect<IsNotNever<typeof result>> = true
  })
  it('case 2', () => {
    const getResult = (book: BaseBook) =>
      pipe(
        book,
        defaultTo(awardedBaseValue),
        assertType(checkBookToRead),
        x => [x],
        dropLast(1),
        append(awardedZaratustraToRead),
        head,
        evolve({
          year: x => x + 1,
        }),
        simplify,
        pick('year'),
      )
    const result = getResult(zaratustra)
    const final: Expect<IsNotNever<typeof result>> = true
  })
  it('case 3', () => {
    const tableData = `id,title,year
		1,The First,2001
		2,The Second,2020
		3,The Third,2018`

    const result = pipe(tableData, split('\n'), map(split(',')))
    result // $ExpectType string[][]
  })
})

it('R.pipe', () => {
  const obj = {
    a: 'foo',
    b: 'bar',
  }

  const result = pipe(
    obj,
    x => ({ a: x.a.length + x.b.length }),
    x => ({ ...x, b: x.a + 'foo' }),
    x => ({ ...x, c: x.b + 'bar' }),
  )

  result.a // $ExpectType number
  result.b // $ExpectType string
  result.c // $ExpectType string
})
