import { assertType } from './assertType'
import { pipe } from './pipe'

type Book = {
  title: string
  year: number
}

type BookToRead = Book & {
  bookmarkFlag: boolean
}

function isBookToRead(book: Book): book is BookToRead {
  return (book as BookToRead).bookmarkFlag !== undefined
}

test('happy', () => {
  const result = pipe(
    [1, 2, 3],
    assertType((x: number[]) => x.length === 3),
  )
  expect(result).toEqual([1, 2, 3])
})

test('throw', () => {
  expect(() => {
    pipe(
      [1, 2, 3],
      assertType((x: number[]) => x.length === 4),
    )
  }).toThrow('type assertion failed in R.assertType')
})

test('R.assertType', () => {
  const result = pipe(
    { title: 'Book1', year: 2020, bookmarkFlag: true },
    assertType(isBookToRead),
  )
  expectTypeOf(result).toEqualTypeOf<BookToRead>()
  expect(result).toEqual({ title: 'Book1', year: 2020, bookmarkFlag: true })
})
