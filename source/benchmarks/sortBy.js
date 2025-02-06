const _ = require('lodash');
const R = require('../../dist/rambda.js');
const Ramda = require('ramda');

const list = [{ a: 2 }, { a: 1 }, { a: 0 }];
const fn = (x) => x.a;

const replace = [
	{
		label: 'Rambda',
		fn: () => {
			R.sortBy(fn, list);
		},
	},
	{
		label: 'Ramda',
		fn: () => {
			Ramda.sortBy(fn, list);
		},
	},
	{
		label: 'Lodash',
		fn: () => {
			_.sortBy(list, fn);
		},
	},
];

module.exports = replace;
