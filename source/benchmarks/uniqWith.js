const R = require('../../dist/rambda.js');
const Ramda = require('ramda');
const {
	uniqListOfStrings,
	uniqListOfBooleans,
	uniqListOfNumbers,
	uniqListOfLists,
	uniqListOfObjects,
} = require('./_utils.js');

const limit = 100;

const modes = [
	[uniqListOfStrings(limit), (x, y) => x.length === y.length],
	[uniqListOfBooleans(limit), (x, y) => x === y],
	[uniqListOfNumbers(limit), (x, y) => x > y],
	[uniqListOfLists(limit), (x, y) => x.length === y.length],
	[
		uniqListOfObjects(limit),
		(x) => (x, y) => Object.keys(x).length === Object.keys(y).length,
	],
];

function applyBenchmark(fn, input) {
	return fn(input[1], input[0]);
}

const tests = [
	{
		label: 'Rambda',
		fn: R.uniqWith,
	},
	{
		label: 'Ramda',
		fn: Ramda.uniqWith,
	},
];

module.exports = {
	modes,
	tests,
	applyBenchmark,
};
