const _ = require('lodash');
const R = require('../../dist/rambda.js');
const Ramda = require('ramda');
const { uniqListOfStrings } = require('./_utils.js');

const modes = [
	[(val) => val + 1, (val) => val.length],
	[
		(x) => x.toUpperCase(),
		(x) => x.toLowerCase(),
		(x) => `${x}-foo`,
		(x) => x + 1,
		(x) => x.length,
		(x) => x.join('---'),
	],
	{
		special: true,
		fns: [
			(x) => x.toUpperCase(),
			(x) => x.toLowerCase(),
			(firstName, lastName) => `The name's ${lastName}, ${firstName} ${lastName}`,
		],
	},
];

const applyBenchmark = (fn, input) => {
	if (input.special) {
		return fn(...input.fns)('foo', 'bar');
	}

	return fn(...input)(uniqListOfStrings(100));
};

const tests = [
	{
		label: 'Rambda',
		fn: R.compose,
	},
	{
		label: 'Ramda',
		fn: Ramda.compose,
	},
	{
		label: 'Lodash',
		fn: _.flowRight,
	},
];

module.exports = {
	tests,
	applyBenchmark,
	modes,
};
