import fc from 'fast-check';
import {
	all,
	compose,
	difference,
	equals,
	head,
	identity,
	is,
	isEmpty,
	length,
	uniq,
	unnest,
} from 'rambdax';

import { collectBy } from './collectBy.js';

test('returns a list of lists', () => {
	fc.assert(
		fc.property(fc.array(fc.nat()), (xs) => {
			const check = all(is(Array));
			const ys = collectBy(identity)(xs);

			return check(ys);
		}),
	);
});

test('groups items but neither adds new ones nor removes any', () => {
	fc.assert(
		fc.property(fc.array(fc.nat()), (xs) => {
			const check = compose(isEmpty, difference(xs), unnest);
			const ys = collectBy(identity)(xs);

			return check(ys);
		}),
	);
});

test('groups related items together', () => {
	fc.assert(
		fc.property(fc.array(fc.boolean()), (xs) => {
			const ys = collectBy(identity)(xs);
			const check = all(compose(equals(1), length, uniq));

			return check(ys);
		}),
	);
});

test('invokes the tag function for each item in the list', () => {
	fc.assert(
		fc.property(fc.array(fc.nat()), (xs) => {
			const id = jest.fn((x) => 42);
			collectBy(id)(xs);
			const check = compose(isEmpty, difference(xs));

			return check(id.mock.calls.map((call) => call[0]));
		}),
	);
});

test('groups items according to the tag value', () => {
	fc.assert(
		fc.property(fc.array(fc.nat()), (xs) => {
			const ys = collectBy((x) => 42)(xs);
			const check = compose(isEmpty, difference(xs), head);

			return isEmpty(xs) && isEmpty(ys) ? true : check(ys);
		}),
	);
});
