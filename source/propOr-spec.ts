import { propOr } from 'rambda';

const obj = { foo: 'bar' };
const property = 'foo';
const fallback = 'fallback';

describe('R.propOr', () => {
	it('happy', () => {
		const result = propOr(fallback, property, obj);
		result; // $ExpectType string
	});
	it('curry 1', () => {
		const result = propOr(fallback)(property, obj);
		result; // $ExpectType string
	});
	it('curry 2', () => {
		const result = propOr(fallback, property)(obj);
		result; // $ExpectType string
	});
	it('curry 3', () => {
		const result = propOr(fallback)(property)(obj);
		result; // $ExpectType string
	});
});
