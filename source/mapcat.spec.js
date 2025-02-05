import { mapcat } from './mapcat.js';

test('happy', () => {
	const result = mapcat((x) => x.toUpperCase())([
		['a', 'b'],
		['c', 'd'],
		['e', 'f'],
	]);

	console.log(result);
});
