import { ap } from './ap.js';

function mult2(x) {
	return x * 2;
}
function plus3(x) {
	return x + 3;
}

test('happy', () => {
	expect(ap([mult2, plus3], [1, 2, 3])).toEqual([2, 4, 6, 4, 5, 6]);
});
