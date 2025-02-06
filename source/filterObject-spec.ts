import { filterObject } from 'rambda';

const obj = { a: 1, b: 2 };

describe('R.filterObject', () => {
	it('happy', () => {
		const result = filterObject((val, prop, origin) => {
			val; // $ExpectType number
			prop; // $ExpectType string
			origin; // $ExpectType Record<PropertyKey, number>

			return val > 1;
		}, obj);
		result; // $ExpectType Record<PropertyKey, number>
	});
	it('curried version requires explicit type', () => {
		const result = filterObject<number>((val, prop, origin) => {
			val; // $ExpectType number
			prop; // $ExpectType string
			origin; // $ExpectType Record<PropertyKey, number>

			return val > 1;
		})(obj);
		result; // $ExpectType Record<PropertyKey, number>
	});
});
