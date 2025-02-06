const _ = require('lodash');
const R = require('../../dist/rambda.js');
const Ramda = require('ramda');

const list = [1, 2, 3, 4];
const num = 2;

const takeLast = [
	{
		label: 'Rambda',
		fn: () => {
			R.takeLast(num, list);
		},
	},
	{
		label: 'Ramda',
		fn: () => {
			Ramda.takeLast(num, list);
		},
	},
	{
		label: 'Lodash',
		fn: () => {
			_.takeRight(list, num);
		},
	},
];

module.exports = takeLast;
