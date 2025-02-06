const _ = require('lodash');
const R = require('../../dist/rambda.js');
const Ramda = require('ramda');

const obj = {
	a: { c: 2 },
	b: 1,
};
const propInput = 'b';
const expected = { c: 2 };

const propEq = [
	{
		label: 'Rambda',
		fn: () => {
			R.propEq('a')(expected)(obj);

			R.propEq('a', expected)(obj);

			R.propEq('a', expected, obj);
		},
	},
	{
		label: 'Ramda',
		fn: () => {
			Ramda.propEq('a')(expected)(obj);

			Ramda.propEq('a', expected)(obj);

			Ramda.propEq('a', expected, obj);
		},
	},
];

module.exports = propEq;
