import { assoc } from './assoc.js';
import { lens } from './lens.js';
import { lensIndex } from './lensIndex.js';
import { lensPath } from './lensPath.js';
import { over } from './over.js';
import { prop } from './prop.js';
import { toUpper } from './toUpper.js';

const testObject = {
	foo: 'bar',
	baz: {
		a: 'x',
		b: 'y',
	},
};

test('assoc lens', () => {
	const assocLens = lens(prop('foo'), assoc('foo'));
	const result = over(assocLens, toUpper, testObject);
	const expected = {
		...testObject,
		foo: 'BAR',
	};
	expect(result).toEqual(expected);
});

test('path lens', () => {
	const pathLens = lensPath('baz.a');
	const result = over(pathLens, toUpper, testObject);
	const expected = {
		...testObject,
		baz: {
			a: 'X',
			b: 'y',
		},
	};
	expect(result).toEqual(expected);
});

test('index lens', () => {
	const indexLens = lensIndex(0);
	const result = over(indexLens, toUpper)(['foo', 'bar']);
	expect(result).toEqual(['FOO', 'bar']);
});
