import { append, prepend } from 'rambda';

const listOfNumbers = [1, 2, 3];
const listOfNumbersAndStrings = [1, 'b', 3];

describe('R.append/R.prepend', () => {
	describe("with the same primitive type as the array's elements", () => {
		it('uncurried', () => {
			// @ts-expect-error
			append('d', listOfNumbers);
			// @ts-expect-error
			prepend('d', listOfNumbers);
			append(4, listOfNumbers); // $ExpectType number[]
			prepend(4, listOfNumbers); // $ExpectType number[]
		});

		it('curried', () => {
			// @ts-expect-error
			append('d')(listOfNumbers);
			append(4)(listOfNumbers); // $ExpectType number[]
			prepend(4)(listOfNumbers); // $ExpectType number[]
		});
	});

	describe("with a subtype of the array's elements", () => {
		it('uncurried', () => {
			// @ts-expect-error
			append(true, listOfNumbersAndStrings);
			append(4, listOfNumbersAndStrings); // $ExpectType (string | number)[]
			prepend(4, listOfNumbersAndStrings); // $ExpectType (string | number)[]
		});

		it('curried', () => {
			// @ts-expect-error
			append(true)(listOfNumbersAndStrings);
		});
	});

	describe("expanding the type of the array's elements", () => {
		it('uncurried', () => {
			// @ts-expect-error
			append('d', listOfNumbers);
			append<string | number>('d', listOfNumbers); // $ExpectType (string | number)[]
			prepend<string | number>('d', listOfNumbers); // $ExpectType (string | number)[]
		});
	});
});
