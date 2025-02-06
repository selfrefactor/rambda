const R = require('../../dist/rambda.js');
const Ramda = require('ramda');

const input = [1, 2, 3, 4];

const drop = [
	{
		label: 'Rambda',
		fn: () => {
			R.drop(3, input);
		},
	},
	{
		label: 'Ramda',
		fn: () => {
			Ramda.drop(3, input);
		},
	},
];

module.exports = drop;
