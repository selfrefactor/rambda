import {
	allPass,
	anyPass,
	append,
	assoc,
	assocPath,
	both,
	defaultTo,
	difference,
	dissocPath,
	dropLast,
	either,
	head,
	map,
	piped,
	range,
	tap,
} from 'rambda';

type IsNotNever<T> = [T] extends [never] ? false : true;
type Expect<T extends true> = T;

interface BaseBook {
	title: string;
	year: number;
	description?: string;
	userRating?: number;
}
interface Book extends BaseBook {
	awards: {
		number: number;
		years?: number[];
	};
	status?: Status;
}
interface MustReadBook extends Book {
	status: 'must-read';
}
interface FamousBook extends Book {
	status: 'famous';
}
interface BookWithBookmarkStatus extends Book {
	bookmarkFlag: boolean;
}
interface BookWithReadStatus extends Book {
	readFlag: boolean;
}
type BookToRead = BookWithBookmarkStatus & BookWithReadStatus;
interface BookWithDescription extends Book {
	description: string;
}
interface BookWithUserRating extends Book {
	userRating: number;
}
type BookWithDetails = BookWithDescription & BookWithUserRating;

const zaratustra: BaseBook = {
	title: 'Zaratustra',
	year: 1956,
};
const awardedZaratustra: Book = {
	...zaratustra,
	awards: {
		number: 1,
		years: [1956],
	},
};
const awardedDostojevski: Book = {
	title: 'Idiot',
	year: 1869,
	awards: {
		number: 2,
		years: [1869, 1870],
	},
};
const awardedDostojevskiToRead: BookToRead = {
	...awardedDostojevski,
	readFlag: true,
	bookmarkFlag: true,
};
const awardedZaratustraToRead: BookToRead = {
	...awardedZaratustra,
	readFlag: true,
	bookmarkFlag: true,
};
const awardedBaseValue: Book = {
	title: '',
	year: 0,
	awards: {
		number: 0,
		years: [],
	},
};

type Status = 'famous' | 'can be skipped' | 'must-read';

function checkIfMustRead(x: Book): x is MustReadBook {
	return (x as MustReadBook).status === 'must-read';
}
function checkIfFamous(x: Book): x is FamousBook {
	return (x as FamousBook).status === 'famous';
}
function checkReadStatus(x: Book): x is BookWithReadStatus {
	return (x as BookWithReadStatus).readFlag;
}
function checkBookmarkStatus(x: Book): x is BookWithBookmarkStatus {
	return (x as BookWithBookmarkStatus).bookmarkFlag;
}
function checkBookToRead(x: Book): x is BookToRead {
	return (x as BookToRead).readFlag && (x as BookToRead).bookmarkFlag;
}
function checkHasDescription(x: Book): x is BookWithDescription {
	return (x as BookWithDescription).description !== undefined;
}
function checkHasUserRating(x: Book): x is BookWithUserRating {
	return (x as BookWithUserRating).userRating !== undefined;
}

function assertType<T, U extends T>(fn: (x: T) => x is U) {
	return (x: T) => {
		if (fn(x)) {
			return x;
		}
		throw new Error('type assertion failed');
	};
}
function convertToType<T>() {
	return <U>(x: U) => x as unknown as T;
}

// function mergeType<T>(x: T){
// 	return x as MergeType<T>
// }

describe('real use cases', () => {
	it('books', () => {
		const result = piped(
			zaratustra,
			assoc('status', 'famous' as Status),
			assocPath<Book>('award.number', 1),
			defaultTo(awardedBaseValue),
			tap(anyPass([(x) => x.awards.number > 1, (x) => x.year > 1900])),
			tap(
				both(
					(x) => x.awards.number > 1,
					(x) => x.year > 1900,
				),
			),
			assertType(either(checkIfFamous, checkIfMustRead)),
			assertType(both(checkReadStatus, checkBookmarkStatus)),
			// //  mergeType,
			assertType(checkBookToRead),
			(x) => [x],
			dropLast(1),
			difference([awardedDostojevskiToRead]),
			append(awardedZaratustraToRead),
			head,
			assertType(allPass([checkHasDescription, checkHasUserRating])),
			tap((x) => {
				x; // $ExpectType BookWithDescription & BookWithUserRating
			}),
			assertType(anyPass([checkHasDescription, checkHasUserRating])),
			convertToType<BookWithDescription>(),
			dissocPath<Book>('description'),
		);
		const final: Expect<IsNotNever<typeof result>> = true;
		final; // $ExpectType true
	});
});
