import { into as intoRamda, map as mapRamda } from 'ramda';
import { add, always, compose, filter, identity, map, take } from '../../rambda';
import { into } from './into';

const isOdd = (b) => b % 2 !== 0;
const addXf = {
	'@@transducer/step': add,
	'@@transducer/init': always(0),
	'@@transducer/result': identity,
};

it.only('transduces into arrays', () => {
	const result = intoRamda([10, 20], mapRamda(add(7)), [1, 2, 3, 4]);
	console.log(result);
	// expect(into([], mapRamda(add(1)), [1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
	// expect(into([], map(add(1)), [1, 2, 3, 4])).toEqual([2, 3, 4, 5])
	// expect(into([], filter(isOdd), [1, 2, 3, 4])).toEqual([1, 3])
	// expect(into([], compose(map(add(1)), take(2)), [1, 2, 3, 4])).toEqual([2, 3])
});

// it('transduces into strings', function () {
//   expect(into('', map(add(1)), [1, 2, 3, 4])).toEqual('2345')
//   expect(into('', filter(isOdd), [1, 2, 3, 4])).toEqual('13')
//   expect(into('', compose(map(add(1)), take(2)), [1, 2, 3, 4])).toEqual('23')
// })

// it('transduces into objects', function () {
//   expect(
//     into({}, identity, [
//       ['a', 1],
//       ['b', 2],
//     ])
//   ).toEqual({ a: 1, b: 2 })
//   expect(into({}, identity, [{ a: 1 }, { b: 2, c: 3 }])).toEqual({ a: 1, b: 2, c: 3 })
// })

// it('dispatches to objects that implement `reduce`', function () {
//   var obj = {
//     x: [1, 2, 3],
//     reduce: function () {
//       return 'override'
//     },
//   }
//   expect(into([], map(add(1)), obj)).toEqual('override')
//   expect(into([], filter(isOdd), obj)).toEqual('override')
// })

// it('allows custom transformer', function () {
//   var intoSum = into(addXf)
//   var add2 = map(add(2))
//   var result = intoSum(add2)
//   expect(result([1, 2, 3, 4])).toEqual(18)
// })
