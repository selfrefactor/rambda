const _ = require('lodash');
const R = require('../../dist/rambda.js');
const Ramda = require('ramda');

const list = [1, 2, 3, 4, 5, 6, 7];

const splitEvery = [
	{
		label: 'Rambda',
		fn: () => {
			R.splitEvery(3, list);
		},
	},
	{
		label: 'Ramda',
		fn: () => {
			Ramda.splitEvery(3, list);
		},
	},
];

module.exports = splitEvery;
