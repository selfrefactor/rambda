import { mergeDeepLeft } from './mergeDeepLeft';

it('takes two objects, recursively merges their own properties and returns a new object', () => {
	const a = { w: 1, x: 2, y: { z: 3 } };
	const b = { a: 4, b: 5, c: { d: 6 } };
	expect(mergeDeepLeft(a, b)).toEqual({
		w: 1,
		x: 2,
		y: { z: 3 },
		a: 4,
		b: 5,
		c: { d: 6 },
	});
});

it('overrides properties in the second object with properties in the first object', () => {
	const a = { a: { b: 1, c: 2 }, y: 0 };
	const b = { a: { b: 3, d: 4 }, z: 0 };
	expect(mergeDeepLeft(a, b)).toEqual({ a: { b: 1, c: 2, d: 4 }, y: 0, z: 0 });
});

it('is not destructive', () => {
	const a = { w: 1, x: { y: 2 } };
	const res = mergeDeepLeft(a, { x: { y: 3 } });
	expect(a).not.toBe(res);
	expect(a.x).not.toBe(res.x);
	expect(res).toEqual({ w: 1, x: { y: 2 } });
});

it('reports only own properties', () => {
	const a = { w: 1, x: { y: 2 } };
	function Cla() {}
	Cla.prototype.y = 5;
	expect(mergeDeepLeft({ x: new Cla() }, a)).toEqual({ w: 1, x: { y: 2 } });
	expect(mergeDeepLeft(a, { x: new Cla() })).toEqual({ w: 1, x: { y: 2 } });
});
