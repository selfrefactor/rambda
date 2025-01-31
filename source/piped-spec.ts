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
	drop,
	dropLast,
	either,
	endsWith,
	filter,
	find,
	head,
	inc,
	map,
	mapObject,
	negate,
	piped,
	tap,
	union,
} from 'rambda';
import * as R from 'ramda';
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
let brothersKaramazov = {
	title: 'Brothers Karamazov',
	year: 1880,
}

const awardedZaratustra: Book = {
	...zaratustra,
	awards: {
		number: 1,
		years: [1956],
	},
};
const awardedBrothersKaramazov: Book = {
	...brothersKaramazov,
	awards: {
		number: 2,
		years: [1869, 1870],
	},
};
const awardedBrothersKaramazovToRead: BookToRead = {
	...awardedBrothersKaramazov,
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

function tapFn<T, U>(transformFn: (x: T) => U, fn: (a: T, b: U) => void): (x: T) => T {
	return (x) => {
		const result = transformFn(x);
		fn(x, result);
		return x;
	};
} 
describe('real use cases - books', () => {
	it('case 1', () => {
		const result = piped(
			[awardedZaratustra, awardedBrothersKaramazov],
			filter(checkIfFamous),
			drop(1),
			// without converting to `as FamousBook`, endsWith will pick up `Book` as type
			tapFn(endsWith([awardedBrothersKaramazov as FamousBook]),(a, b) => {
				a; // $ExpectType FamousBook[]
				b; // $ExpectType boolean
			}),
			tapFn(union([awardedBrothersKaramazov]),(a, b) => {
				a; // $ExpectType Book[]
				b; // $ExpectType boolean
			}),
			find(x => {
				x // $ExpectType Book
				return x.title === 'Brothers Karamazov'
			}),
			x => ([x!]),
			filter(Boolean),
		);
		const final: Expect<IsNotNever<typeof result>> = true;
	});
	it('case 2', () => {
		const result = piped(
			zaratustra,
			assoc('status', 'famous' as Status),
			assocPath<Book>('awards.number', 1),
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
			assertType(checkBookToRead),
			(x) => [x],
			dropLast(1),
			difference([awardedBrothersKaramazovToRead]),
			append(awardedZaratustraToRead),
			head,
			assertType(allPass([checkHasDescription, checkHasUserRating])),
			tap((x) => {
				x; // $ExpectType BookWithDescription & BookWithUserRating
			}),
			assertType(anyPass([checkHasDescription, checkHasUserRating])),
			convertToType<BookWithDescription>(),
			dissocPath<Book>('description'),
			convertToType<Record<string, string>>(),
			mapObject((x) => {
				return x as unknown as number;
			}),
		);
		const final: Expect<IsNotNever<typeof result>> = true;
	});
});