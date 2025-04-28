import { pipe, assertType } from 'rambda'

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

it('R.assertType', () => {
	const result = pipe(
		{ title: 'Book1', year: 2020, bookmarkFlag: true },
		assertType(isBookToRead),
	)
	result // $ExpectType BookToRead
})
